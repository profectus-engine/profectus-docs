# Dynamic Layers

You can dynamically add and remove layers using the [addLayer](/api/game/layers/functions/addLayer) and [removeLayer](/api/game/layers/functions/removeLayer) functions. It's important to note that removing a layer does not affect the player's save data. You can safely add and remove the same layer without losing any progress. For instances where the structure of a layer changes, such as when adding a new feature, use the [reloadLayer](/api/game/layers/functions/reloadLayer) function.

When procedurally generating layers with similar structures, consider using a utility function like the one below. This function allows you to access a correctly typed reference to a layer with a specified ID easily:

```ts
function getDynLayer(id: string): DynamicLayer {
  const layer = layers[id];
  if (!layer) throw "Layer does not exist";
  return layer as DynamicLayer;
}
```

This utility function can streamline your code when dealing with multiple dynamic layers and ensure that you're working with the correct layer type.

When working with dynamic layers you'll need to ensure you can determine what layers should exist when loading a save file, by returning an accurate list from your project's [getInitialLayers](/api/data/projEntry/functions/getInitialLayers) function.
