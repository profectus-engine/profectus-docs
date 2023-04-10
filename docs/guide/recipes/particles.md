# Particles

This is a more comprehensive example based on the Kronos example used in the [nodes](../advanced-concepts/nodes) docs. You will design a particle effect, make it appear on another feature, and ensure it adapts to the game state.

## Design the Effect

First, design the particle effect. Profectus uses [pixi-particles](https://github.com/pixijs/particle-emitter), and you can use the online particle effect editor [here](http://pixijs.github.io/pixi-particles-editor/). However, the editor returns an older format of the particle effect emitter config, so you'll need to convert it like this:

```ts
import myParticleEffect from "myParticleEffect.json";
import { upgradeConfig } from "@pixi/particle-emitter"

const particleEffect = upgradeConfig(myParticleEffect);
```

## Create the Particles

Next, create the particles feature and render it. You'll also want to track the bounding rect of the particle effects. Consider the following step:

```ts
const particles = createParticles(() => ({
    fullscreen: false,
    zIndex: -1,
    boundingRect: ref<null | DOMRect>(null),
    onContainerResized(boundingRect) {
        this.boundingRect.value = boundingRect;
    }
}));
```

This code adds a bounding rect for the particles and updates it when the container is created or resizes.

## Adding the Effect

Now, create the emitter. Pull in the Kronos example, which displays a particle effect when `actualGain > 0`.

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

This code watches for whether the node exists and the `boundingRect` exists, which are required to display the effect. You can additionally watch any other values that would have an impact on the particle effect, like whether or not it should be emitting.

## Support Hot Reloading

If you're using hot reloading, you might need to reload the particle effect. Here's an example from Kronos of adding the callback to the particles constructor:

```ts
const particles = createParticles(() => ({
    fullscreen: false,
    zIndex: -1,
    boundingRect: ref<null | DOMRect>(null),
    onContainerResized(boundingRect) {
        this.boundingRect.value = boundingRect;
    },
    onHotReload() {
        Object.values(elements).forEach(element => element.refreshParticleEffect());
    }
}));
```

The `refreshParticleEffect` function destroys the emitter, creates a new one, and updates it:

```ts
const refreshParticleEffect = () => {
    particlesEmitter.value
        .then(e => e.destroy())
        .then(
            () =>
                (particlesEmitter.value = particles.addEmitter(element.particlesConfig))
        )
        .then(() =>
            updateParticleEffect([
                Decimal.gt(actualGain.value, 0),
                layer.nodes.value[name]?.rect,
                particles.boundingRect.value
            ])
        );
};
```
