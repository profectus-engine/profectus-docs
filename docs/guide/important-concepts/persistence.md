# Persistence

Persistence refers to data that is saved so that it _persists_ when the user closes the tab and opens it again in the future.

In Profectus, this is handled by creating "persistent refs", which act like [refs](./reactivity.md) but whose value is stored in an object that gets saved to localStorage. Other than that you can treat them like any other ref - when adding the layer, any persistent refs will automatically have their values updated to the ones saved in localStorage. If there isn't a saved value, it'll use the default value passed to the persistent ref constructor.

Many features in Profectus, such as upgrades, milestones, and challenges, internally have persistent refs to save things like whether the upgrade has been purchased, the milestone achieved, or the challenge completed. Creators can also create their own custom persistent refs to store any arbitrary (but serializable) data they need - that means Numbers (including big numbers), strings, booleans, or objects containing only serializable values. Another notable function is the resource constructor. If you pass a default value into its constructor, it will automatically create a persistent ref for that resource. If you pass in a ref, it will NOT make the ref persistent.

It's important for saving and loading these properties for these refs to be in a well-known location. This is implemented based on the location of the persistent ref within a layer. That means it's important that **all persistent refs are located within the object returned by the createLayer options function**. If a persistent ref is not within that object, it will NOT be saved and loaded - regardless of whether it's a persistent ref within a feature, one you manually created, or otherwise.

Additionally, this structure should typically remain consistent between project versions. If a value is in a new location, it will not load the value from localStorage correctly. This is exacerbated if two values swap places, such as when an array is re-ordered. In the event a creator changes this structure anyways, the [fixOldSave](../creating-your-project/project-entry.md#fixoldsave) function can be used to migrate the old player save data to the new structure expected by the current version of the project.

As of Profectus 0.6, save data will now report warnings whenever there is redundancy - two locations for the same persistent data, which creates larger saves that can cause issues when loading after updates. To fix redundancies, wrap all but one location for the data in [noPersist](/api/game/persistence/functions/noPersist).

One place to look out for specifically is tree nodes, which typically have a persisten `pinned` value and can appear in both the nodes array as well as the links array.
