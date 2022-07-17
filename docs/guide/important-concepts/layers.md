# Layers

Profectus content is organized into units called "Layers". When displaying content to the user, the screen will be divided into several tabs that each display the content of a layer. These layers are stored in `/src/data/layers`.

Each layer is ultimately a collection of different features, and a display function. While there are a couple reserved properties for layers, most of its structure is fully up to the creator. 

Layers can be dynamically added or removed at any time, which also allows for effectively disabling or enabling content based on arbitrary conditions. Just make sure [getInitialLayers](./project-entry.md#getinitiallayers) can process the player save data object and determine which layers should be currently active.

## Lazy Proxies

Layers (and features) are not actually created immediately. Instead, their options are gotten through a function which is then run the first time something _inside_ the layer is accessed. This is a concept called lazy evaluation, which is also used for things like `computed`, and allows for features to reference each other without worrying about cyclical dependencies.
