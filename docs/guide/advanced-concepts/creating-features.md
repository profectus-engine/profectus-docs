# Creating Features

Profectus is designed to encourage the developer to eventually start designing their own features for use in specific games. Features are designed to work where they require minimal (and typically zero) modifications around the code base - you simply write a single file for the feature, and any vue components it needs, and the act of importing that feature will set everything up. This also means you can share these features with others in entire collections, and any they don't use won't be present in the build output, won't be loaded, and won't affect the project in any way.

## Creating the Feature

Every feature has an interface for the feature itself as well as an options object for every constructor the feature has (typically just one). The main difference is that the options object will have computable properties typed as `MaybeRefOrGetter` but the feature itself will have replaced those with just `MaybeRef`. You should be able to use any of the existing features as a reference for how these types look and work.

The feature should typically have a `type` property pointing to a symbol unique to this feature, so they can be easily differentiated at runtime. If it's a feature that should be renderable, then it'll also need to make sure the options extends `VueFeatureOptions` and the feature itself `VueFeature`. These will handle allowing it to be rendered using the `render` utility function and handle things like style, classes, visibility, a unique ID, and adding its [node](./nodes) to the layer or modal's context.

The constructor itself should do several things. They should take their options within a function, so that they're not resolved when the object is constructed. It should return a lazy proxy of the feature, which allows features to reference each other and only resolve themselves once every feature is defined. The constructor should create any persistent refs it may require outside of the lazy proxy - it won't have access to the options at this point, so it should make any it _potentially_ may require. Any that turn out not being needed can be [deleted](/api/game/persistence/functions/deletePersistent). Inside the lazy proxy the constructor should create the feature object, including the extra properties in the options object, vue feature mixin, and use [processGetter](/api/util/computed/functions/processGetter) on every computable type. You should ensure the feature object `satisfies` the feature interface, and then return it.

The vue feature mixin will require a string unique to the feature as well as a function to get a `JSX.Element` for this feature. Typically that just means returning the vue component made for this feature, passing in props from the feature object.

Because typescript does not emit JS, if a property is supposed to be a function it is impossible to differentiate between a function that is itself the intended value or a function that returns the actual value. For this reason, it is not recommended for any feature types to include properties that are `MaybeRefOrGetter<Function>`s, and all functions _will_ be wrapped in `computed`.

## Vue Components

Any vue components you write need to do a couple things. Typically they'll need to type each prop directly, but you can just type it as the property on the feature itself. That is, you can't do `defineProps<MyFeature>()` but you can do `defineProps<{ display: MyFeature["display"]; }>()`. If there are custom displays this feature may have, you'll want to create a PascalCase variable that is just a function passing the prop into the [render](/api/util/vue/functions/render) utility, like this:

`const Title = () => render(props.title);`

## Custom Settings

To add a setting to the options menu specific to this feature, you'll need to do three things, all inside the feature's file. First, extend the settings type with the name of the new setting. For example, here's how the challenge feature adds a setting to hide completed challenges:

```ts
declare module "game/settings" {
    interface Settings {
        hideChallenges: boolean;
    }
}
```

Next you must set the default value of this setting when the settings is loaded, which happens during the `loadSettings` event emitted on the [global bus](/api/game/events/variables/globalBus). This is how that looks like for the same `hideChallenges` setting from above:

```ts
globalBus.on("loadSettings", settings => {
    settings.hideChallenges ??= false;
});
```

Finally, you'll need to register a Vue component to the settings menu so the player can actually modify this setting. Here's the example for the `hideChallenges` setting:

```ts
globalBus.on("setupVue", () =>
    registerSettingField(() => (
        <Toggle
            title={
                <span class="option-title">
                    Hide maxed challenges
                    <desc>Hide challenges that have been fully completed.</desc>
                </span>
            }
            onUpdate:modelValue={value => (settings.hideChallenges = value)}
            modelValue={settings.hideChallenges}
        />
    ))
);
```

## Updating Features

If your custom feature requires running some sort of update method every tick, you'll want to search layers when they're added for any features of this type (using the [findFeatures](/api/features/feature/functions/findFeatures) utility), add an event handler for every `update`/`postUpdate`/`preUpdate`, and clean it up when the layer is removed. Here's how this looks like for the `action` feature:

```ts
const listeners: Record<string, Unsubscribe | undefined> = {};
globalBus.on("addLayer", layer => {
    const actions: Action[] = findFeatures(layer, ActionType) as Action[];
    listeners[layer.id] = layer.on("postUpdate", diff => {
        actions.forEach(action => action.update(diff));
    });
});
globalBus.on("removeLayer", layer => {
    // unsubscribe from postUpdate
    listeners[layer.id]?.();
    listeners[layer.id] = undefined;
});
```
