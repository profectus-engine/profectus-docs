# Creating Features

Profectus is designed to encourage the developer to eventually start designing their own features for use in specific games. Features are designed to work where they require minimal (and typically zero) modifications around the code base - you simply write a single file for the feature, and any vue components it needs, and the act of importing that feature will set everything up. This also means you can share these features with others in entire collections, and any they don't use won't be present in the build output, won't be loaded, and won't affect the project in any way.

## Creating the Feature

Every feature has a couple of types. They have the feature themselves, a generic version for convenience, and any constructor typically has an options type and a type that gets "added" to it to create the feature itself. These typically involve replacing some types to denote how various properties change from, for example, `Computable<X>` to `ProcessedComputable<X>`. You should be able to use any of the existing features as a reference for how these types look and work.

Most significantly, the base type should typically always have a `type` property pointing to a symbol unique to this feature, so they can be easily differentiated at runtime. If it's a feature that should be renderable, then it'll also need `[Component]` and `[GatherProps]` properties, which describe the vue component to use and how to get the props for it from this feature, as well as a unique ID for the feature's [node](./nodes). You can use the [getUniqueID](/api/modules/features/feature#getuniqueid) utility to help.

The constructor itself should do several things. They should take their options within a function, so that they're not resolved when the object is constructed. It should return a lazy proxy of the feature, which allows features to reference each other and only resolve themselves once every feature is defined. The constructor should create any persistent refs it may require outside of the lazy proxy - it won't have access to the options at this point, so it should make any it _potentially_ may require. Any that turn out not being needed can be [deleted](/api/modules/game/persistence#deletepersistent). Inside the lazy proxy the constructor should create the options object, assign onto it every property from the base type, call [processComputable](/api/modules/util/computed#processcomputable) on every computable type, and [setDefault](/api/modules/features/feature#setdefault) on any property with a default value. Then you should be able to simply return the options object, likely with a type cast, and the constructor will be complete.

Because typescript does not emit JS, if a property is supposed to be a function it is impossible to differentiate between a function that is itself the intended value or a function that returns the actual value. For this reason it is not recommended for any feature types to include properties that are `Computable<Function>`s, and all functions _will_ be wrapped in `computed`. The notable exception to this is [JSX](../important-concepts/coercable#render-functions-jsx), which uses a utility function to mark that a function should not be wrapped.

## Vue Components

Any vue components you write need to do a couple things. Typically they'll need to type any props that come from computed properties appropriately, for which you can use the [processedPropType](/api/modules/util/vue#processedproptype) utility - using it will look something like `style: processedPropType<StyleValue>(String, Object, Array)`. You'll also want to make sure to `unref` any of these props you use in the template. The template should make sure to include a `Node` component with the feature's ID. Also, if there are custom displays this feature may have, you'll want to convert the `CoercableComponent` into a Vue component inside the setup function, typically using the [computeComponent](/api/modules/util/vue#computecomponent) or [computeOptionalComponent](/api/modules/util/vue#computeoptionalcomponent) utilities.

## Custom Settings

To add a setting to the options menu specific to this feature, you'll need to do three things, all inside the feature's file. First, extend the settings type with the name of the new setting. For example, here's how the challenge feature adds a setting to hide completed challenges:

```ts
declare module "game/settings" {
    interface Settings {
        hideChallenges: boolean;
    }
}
```

Next you must set the default value of this setting when the settings is loaded, which happens during the `loadSettings` event emitted on the [global bus](/api/modules/game/events#globalbus). This is how that looks like for the same `hideChallenges` setting from above:

```ts
globalBus.on("loadSettings", settings => {
    setDefault(settings, "hideChallenges", false);
});
```

Finally, you'll need to register a Vue component to the settings menu so the player can actually modify this setting. Here's the example for the `hideChallenges` setting:

```ts
registerSettingField(
    jsx(() => (
        <Toggle
            title={jsx(() => (
                <span class="option-title">
                    Hide maxed challenges
                    <desc>Hide challenges that have been fully completed.</desc>
                </span>
            ))}
            onUpdate:modelValue={value => (settings.hideChallenges = value)}
            modelValue={settings.hideChallenges}
        />
    ))
);
```

## Updating Features

If your custom feature requires running some sort of update method every tick, you'll want to search layers when they're added for any features of this type (using the [findFeatures](/api/modules/features/feature#findfeatures) utility), add an event handler for every `update`/`postUpdate`/`preUpdate`, and clean it up when the layer is removed. Here's how this looks like for the `action` feature:

```ts
const listeners: Record<string, Unsubscribe | undefined> = {};
globalBus.on("addLayer", layer => {
    const actions: GenericAction[] = findFeatures(layer, ActionType) as GenericAction[];
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
