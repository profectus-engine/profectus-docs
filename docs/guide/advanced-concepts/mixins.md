# Mixins and Wrappers

Mixins and wrappers are ways of adding functionality to your features in a modular way, allowing them to be shared with the community or reused between projects with ease. There's already a couple built into the engine, including one that every renderable feature uses, `vueFeatureMixin`.

## Mixins

Mixins are for adding additional properties to the feature, and are used by the one writing the feature itself (rather than just instantiating it). For example, `vueFeatureMixin` takes a couple parameters - a string for identifying features, an options object that can contain settings like `visibility`, `style`, `classes`, etc. - and a render function - and adds various properties required for rendering the feature. The mixin gets implemented by having the feature's options object extending the mixin's options, the feature interface extending the mixin itself, and destructuring the mixin's return object in the constructor itself:

```ts
const clickable = {
    type: ClickableType,
    ...(props as Omit<typeof props, keyof VueFeature | keyof ClickableOptions>),
    ...vueFeatureMixin("clickable", options, () => (
        <Clickable
            canClick={clickable.canClick}
            onClick={clickable.onClick}
            display={clickable.display}
        />
    )),
    ...
} satisfies Clickable;
```

You'll note the properties included by the mixin also get omitted from the props object, since they'll be overwritten. In the end, you'll know its setup correctly because the `satisfies` clause won't cause issues (assuming you've correctly made `Clickable` extend `VueFeature` or whatever the name of the feature and mixin are).

Custom mixins should work similarly to the existing mixins and support everything mentioned above. The bonus amounts/completions mixins are good examples of what a simpler mixin would look like.

If there's a feature you'd like to write that could work as either a mixin or wrapper, prefer mixins due to their better typing. If the person using the mixin or wrapper wasn't creating a new feature, they can easily extend the feature to use the mixin like I demonstrate [here](https://forums.moddingtree.com/t/using-the-bonus-mixins-on-repeatables-and-challenges/1648).

## Wrappers

Wrappers have the advantage of not requiring extending the feature and being able to access pre-defined properties on the feature, but make types a bit more tricky to work with.

Wrappers take a constructed feature and modify or add properties on it. For example, `addTooltip` will take a vue feature and make it have a tooltip on hover. It and all wrappers should take the feature as the first param and the options func as the second.

Similar to a feature, the wrapper should make a lazy proxy with all its properties. But, you can't add this lazy object to the feature directly, because that would force its evaluation. Instead, you should use [runAfterEvaluation](../../api/modules/util/proxies#runAfterEvaluation) and inside its callback add the wrapper object to the feature and make sure the wrapper object gets evaluated by referencing a property within it. If it is a wrapper around a vue component, you can also add the wrapper element to the feature's `wrappers` array inside the callback.
