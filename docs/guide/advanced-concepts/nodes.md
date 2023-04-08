# Nodes

Every feature that is rendered in the DOM should have a `Node` component within it, which registers itself to the closest `Context` component (typically within the`Layer`'s component) and tracks the bounding rect (both size and position) of the DOM element. You can then search for a feature's unique `id` property within `layer.nodes` to get access to the DOM element for that feature, if it currently exists.

This can be used for features with more complex displays, such as particle effects positioned relative to another feature, or drawing links between different nodes.

The bounding rect that will typically be kept up to date and react to things like nodes changing size, or moving because of the window resizing or feature's showing or hiding. However, there are ocassional situations where it may become out of sync, so it's recommended to only use the node system for visual effects, where any glitches will be relatively minor.
