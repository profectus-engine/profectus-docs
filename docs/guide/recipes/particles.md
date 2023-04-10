# Particles

This is a more complete example from the Kronos example used in the [nodes](../advanced-concepts/nodes) docs. You will design a particle effect, make it appear on another feature, and make it adapt to the game state.

Let's start with designing the particle effect. Profectus uses pixi-particles, and there's an online particle effect editor for it [here](https://pixijs.io/pixi-particles-editor/). However, it will return an older format of the particle effect emitter options, so you'll need to convert it like so:

```ts
import myParticleEffect from "myParticleEffect.json";
import { upgradeConfig } from "@pixi/particle-emitter"

const particleEffect = upgradeConfig(myParticleEffect);
```

Next we need to create the particles feature and render it. We'll also want to track the bounding rect of the particle effects. We'll consider the next step:

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

You'll note this adds a bounding rect and updates it's based on the boundingRect set to non-null. The next step will be creating the emitter. Now we can pull in the Kronos example, which make a particle effect that appears when actualGain > 0.

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

You'll note this checks regularly whether the boundingRect exists. If you ensure all the references to things are being watched, youy can make complex situations for various emitters.

If you're hot reloading, it may be required to re-load the particle effect. Here's example code from Kronos.

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
