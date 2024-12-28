# Prestige Mechanic

Prestige mechanics are a common feature in incremental games. They involve resetting a portion of the game's progress in exchange for a new currency that persists between these resets. Many games even have multiple layers of reset mechanics, each resetting everything that came before them.

## Create a conversion

The first step is to create a conversion that will handle calculating the amount of prestige currency generated. In our example, let's assume there's a base layer called `main` and a prestige layer called `prestige`. This conversion will be based on the amount of `points` the player has, a resource within `main`. Here's an example conversion, using the formula from [The Prestige Tree](https://jacorb90.me/Prestige-Tree/)'s prestige layer:

```ts
const conversion = createCumulativeConversion(() => ({
	baseResource: main.points,
	gainResource: noPersist(points),
	formula: x => x.div(10).sqrt()
}));
```

In this case, `points` refers to `prestige.points`, as it's within the `prestige` layer.

## Create a reset button

Next, create a button that will perform the reset and generate points. Create a clickable like this:

```ts
const convertButton = createClickable(() => ({
	requirements: createBooleanRequirement(() => Decimal.gt(unref(conversion.actualGain), 0)),
	display: {
		description: () => `Reset for ${formatWhole(conversion.currentGain)} prestige points`
	},
	onClick() {
		conversion.convert();
	}
}));
```

This creates a simple clickable that can only be clicked when the player will gain some amount of the prestige currency, and it displays how much they'll get. This can be further improved by displaying how many points the player will need to generate one more prestige point.

## Resetting previous content

Now, return to the `main` layer. Create a `reset` feature that receives a list of all the things it needs to reset - in this example, we'll just reset the entire layer:

```ts
const reset = createReset(() => ({
	thingsToReset: [layer]
}));
```

Then, modify the convert button to trigger the reset:

```ts
onClick() {
	conversion.convert();
	reset.reset();
}
```

If you have multiple tiers of resets, you may add an `onReset` function to each reset that triggers the next reset before it, causing the resets to cascade.

## Branching resets

A common pattern for reset mechanics is to display these various layers in a tree and have the tree propagate the resets for you. There are a couple of utility functions to help you accomplish this: [createResetButton](/api/data/common/functions/createResetButton) and [createLayerTreeNode](/api/data/common/functions/createLayerTreeNode). You'll typically place the tree itself in the `main` layer and create a tree node for each layer. Then you can call the tree's `reset` function with the layer that's resetting, and it will propagate the reset as appropriate.
