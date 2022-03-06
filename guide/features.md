# Features

A [layer](./layers) is made up of features. There are many types of features included in Profectus, and more can be created once you become familiar with the engine.

To create a feature, the feature type will have one or more functions to help you. They'll typically look something like this:

```ts
const addGainUpgrade = createUpgrade(() => ({
    display: {
        title: "Generator of Genericness",
        description: "Gain 1 point every second"
    },
    cost: 1,
    resource: points
}));
```

The result will be a [lazy proxy](./layers#lazy-proxies) of the feature being created. The feature can then be used throughout the rest of the layer. The main thing to keep in mind when creating features is that they should typically be included in the layer object that gets returned. If a feature has any [persistent refs](./reactivity#persistent) they must be included or else they will not have their values saved and loaded correctly.

While the structure of layers is intentionally left up to the creator, it is recommended to avoid storing them in arrays. If you ever remove an upgrade from an array, or add an upgrade in between others, then it will interfere with the save data of existing users. You can manually fix these issues in [fixOldSave](./project-entry.md#fixoldsave), but it's recommended to avoid the error entirely.

Since usually you want to access a specific feature, storing them in an object is much more reliable and makes the code easier to read. For things like checking number of upgrades bought, for example, you can still use `Object.values` to get an array of the objects instead.

#### Example

```ts
const upgrades = { addGainUpgrade, gainMultUpgrade, upgMultUpgrade };
const numUpgrades = computed(() => Object.values(upgrades).length);
```

## Tree Shaking

Since Profectus takes advantage of [tree shaking](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking), and type of feature that is not used will not be included in the output of the project. That means users have less code to download, a slight performance boost, and you don't need to worry about feature type-specific settings appearing (such as whether to show maxed challenges).

It should be noted that a couple features depend on each other, such as Buyables depending on Clickables. That means you may see features included in the output despite not directly using them. Some features, such as Links and Tooltips, are used by the engine itself and will always be included in the output.
