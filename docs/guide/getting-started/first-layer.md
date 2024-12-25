# Your First Layer

This page is a guide on where to start with creating your very first layer. It is intended for developers who are first learning to use the engine.

## Creating the layer

::: info
The template comes with a layer in `projEntry.tsx` and another in `prestige.tsx`. You can use those as a base instead of creating a new one from scratch.
:::

To add a new layer, first create it via the [createLayer](../../api/modules/game/layers#createlayer) function. You typically create a single layer per file, the first being in `projEntry`. After it is created, you'll need to add it to the returned array in [getInitialLayers](../../api/modules/data/projEntry#getinitiallayers).

The `createLayer` function will need a unique ID for your layer and a function that constructs the layer. At a minimum, it needs a `display` property so Profectus knows what to render. It will look something like this:

```ts
const id = "p";
const layer = createLayer(id, layer => {
    return {
        display: () => <>My layer</>
    };
});
```

## Adding a resource

Game elements in Profectus are called "features". You'll create them inside the layer's constructor function and return them in the object at the end. Many features can also be rendered in the layer's display.

In the file tree, there's a folder called `src/features`, which contains all the different features that are included in Profectus (and any others you've created or downloaded from others!). You can browse the folder to see all the features and learn what each one does. Some features also have dedicated guide pages on how to use them.

Let's add one of these features to our layer: a Resource. As with most features, there's a [createResource](../../api/modules/features/resource#createresource) constructor for creating this feature. These constructors typically take a function that returns an object with all the options for that feature. However, resources are simple features, so they just take the options as parameters. Creating a resource will look like this:

```ts
const points = createResource<DecimalSource>(0, "prestige points");
```

In your IDE you'll be able to see the documentation for each parameter - in this case, the first one is the default value for this resource, and the second is the display name for the resource. Now we can make sure to add the points to our layer's object and display it using the [MainDisplay](../../api/modules/features/resource#maindisplay-component) Vue component. All in all, our layer should look like this now:

```ts
const id = "p";
const layer = createLayer(id, layer => {
    const points = createResource<DecimalSource>(0, "prestige points");

    return {
        points,
        display: () => (
            <>
                <MainDisplay resource={points} />
            </>
        )
    };
});
```

## Update loop

Some things happen every tick, such as passive resource generation. You can hook into the update loop using an event bus. There's a global one and one for each layer. For example, within the layer function, you can add this code to our example to increase our points at a rate of 1 per second:

```ts
layer.on("update", diff => {
	points.value = Decimal.add(points.value, diff);
});
```

Note that the `createLayer`'s function receives a parameter for the base layer, which you may have to add. The `diff` parameter insidde the event callback represents the seconds that have passed since the last update - which will typically be around 0.05 unless throttling is disabled in the settings. If we wanted to generate an amount other than 1/s, we could multiply diff by the per-second rate.

## Adding an upgrade

Let's add a more complex feature to the layer now - an upgrade. Upgrades represent one-time purchases. This time the [createUpgrade](../../api/modules/features/upgrade#createupgrade) function requires an options function. We can create a lambda that returns the options object. We'll need to give it a cost requirement and display. Afterwards, it should look like this:

```ts
const myUpgrade = createUpgrade(() => ({
	requirements: createCostRequirement(() => ({
		resource: noPersist(points),
		cost: 10
	})),
	display: {
		description: "Double points generation"
	}
}));
```

We'll add this upgrade to our returned object and our display. Upgrades are a renderable feature, which means we can use the [render](../../api/modules/util/vue#render) function to display them. The returned layer object will now look like this:

```ts
return {
	points,
	myUpgrade,
    display: () => (
        <>
            <MainDisplay resource={points} />
            {render(myUpgrade)}
        </>
    )
}
```

The last thing to do to implement our upgrade is to give it an effect! If `myUpgrade.bought.value` is true, then the points generation should double. We'll represent that by creating a points gain modifier, which will make it easy to handle many things affecting points gain. The modifier should look like this:

```ts
const myModifier = createSequentialModifier(() => [
	createMultiplicativeModifier(() => ({
		multiplier: 2,
		enabled: myUpgrade.bought
	}))
]);
```

Now to make the points gain use the modifier, we'll update the line that adds points to this:

```ts
points.value = Decimal.add(points.value, Decimal.times(myModifier.apply(1), diff));
```

You now have a functioning upgrade, and are prepared to create many more upgrades and other features!

## Next Steps

Since Profectus is an engine, what to do with it is a fairly open-ended question. If you're not quite ready to go out on your own, there are more guides to help prepare you. A good next step would be the [Prestige Mechanic](../recipes/prestige) recipe page.

The "Important Concepts" section of the guide goes further into various parts of the engine that are prudent to understand. If any of those look interesting or like something you need help with, they can be a great help.

Beyond that, the best way to learn is to just continue using the engine and exploring its various features. Have fun!
