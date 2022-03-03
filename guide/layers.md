# Layers

Profectus content is organized into units called "Layers". When display content to the user, it will be done so by having some number of layers appearing as sections on the screen. They are stored in `/src/data/layers`.

Each layer is ultimately a collection of different features, and a display function. While there are a couple reserved properties for layers, most of its structure is fully up to the creator. 

Layers can be dynamically added or removed at any time, which also allows for effectively disabling or enabling content based on arbitrary conditions. Just make sure [getInitialLayers](./project-entry.md#getinitiallayers) can process the player save data object and determine which layers should be currently active.
