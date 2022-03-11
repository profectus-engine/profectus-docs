# Dynamic Layers

You can dynamically add and remove layers using the `addLayer` and `removeLayer` functions. Note that removing a layer does not change the player save data in any way, so you can safely add and remove the same layer. In fact, there is a `reloadLayer` to do just that, which is used for when the structure of a layer changes - e.g., adding a new feature.

If you're going to be procedurally generating layers, all with a similar structure, it might make sense to use a utility function like the following in order to easily access a correctly typed reference to a layer with a given ID:

```ts
function getDynLayer(id: string): DynamicLayer {
  const layer = layers[id];
  if (!layer) throw "Layer does not exist";
  return layer as DynamicLayer; // you might need an "as unknown" after layer
}
```
