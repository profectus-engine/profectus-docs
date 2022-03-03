# Project Entry

This is a TypeScript file containing the non-static parts of your project, and acts as the entry point for it.

It is stored at `/src/data/projEntry.jsx`.

This file has 3 things it must export, but beyond that can export anything the creator wants it to. Typically in addition to the required 3, the initial/"main" layer will be exported. Typically utilites belong in `common.tsx`, which exists next to `projEntry.tsx`. 

## Required Exports

### getInitialLayers

- Type: `(player: Partial<PlayerData>) => GenericLayer[]`

A function that is given a player save data object currently being loaded, and returns a list of layers that should be active for that player. If a project does not have dynamic layers, this should always return a list of all layers. 

### hasWon

- Type: `ComputedRef<boolean>`

A computed ref whose value is true whenever the game is over. 

For example, in a game where the goal is to have a resource reach 10:
```ts
export const hasWon = computed(() => Decimal.gte(resource.value, 10));
```

### fixOldSave

- Type: `(oldVersion: string | undefined, player: Partial<PlayerData>) => void`

This function will be run whenever a save is loaded that has a different version than the one in [project info](./project-info.md#versionnumber). It will be given the old version number, and the player save data object currently being loaded.

The purpose of this function is to perform any necessary migrations, such as capping a resource that accidentally inflated in a previous version of the project. By default it will do nothing.
