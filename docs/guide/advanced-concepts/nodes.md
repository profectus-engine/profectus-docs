# Nodes

Features rendered in the DOM should include a `Node` component, which registers itself to the nearest `Context` component (usually within the `Layer`'s component) and tracks the bounding rect (both size and position) of the DOM element. Access the DOM element for a feature via its unique `id` property within `layer.nodes`, provided it currently exists.

This is useful for features with complex displays, such as particle effects positioned relative to another feature or drawing links between different nodes. To illustrate this, let's look at a complete example of using `layer.nodes` to get a node's bounding rect and then placing a particle effect using it. Here's an example from Kronos:

```ts
const particlesEmitter = ref(particles.addEmitter(element.particlesConfig));
const updateParticleEffect = async ([shouldEmit, rect, boundingRect]: [
    boolean,
    DOMRect | undefined,
    DOMRect | undefined
]) => {
    const emitter = await particlesEmitter.value;
    emitter.emit = isGaining && rect != undefined && boundingRect != undefined;
    if (emitter.emit && !emitter.destroyed) {
        emitter.cleanup();
        emitter.updateOwnerPos(
            rect.x + rect.width / 2 - boundingRect.x,
            rect.y + rect.height / 2 - boundingRect.y
        );
        emitter.resetPositionTracking();
    }
};
watch(
    [
        () => Decimal.gt(actualGain.value, 0),
        () => layer.nodes.value[name]?.rect,
        particles.boundingRect
    ],
    updateParticleEffect
)
```

In this example the particle effects will update whenever the window resizes, the feature's bounding rect changes, or the particle effect is supposed to turn on/off. By watching for other relevant properties you can ensure even more complex situations are accounted for.

The bounding rect is usually kept up-to-date and responsive to changes such as nodes resizing, moving due to window resizing, or features being shown or hidden. However, occasional situations may cause it to be out of sync. Therefore, it's recommended to use the node system for visual effects only, where any glitches have minimal impact.
