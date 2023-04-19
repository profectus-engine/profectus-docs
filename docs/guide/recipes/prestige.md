# Prestige Mechanic

Prestige mechanics are a common feature within incremental games. They involve resetting some amount of progress within the game in exchange for a new currency that persists between these resets. Many games will even have multiple layers of reset mechanics that each reset everything before them.

## Create a conversion

The first step is creating a conversion that'll handle calculating how much of the prestige currency gets generated. For our example, let's assume there's a base layer called `main` and a prestige layer called `prestige`. This conversion will be based on the amount of `points` the player has, a resource within `main`. Here's an example conversion, using the formula from [The Prestige Tree](https://jacorb90.me/Prestige-Tree/)'s prestige layer:

```ts
const conversion = createCumulativeConversion(() => ({
	baseResource: main.points,
	gainResource: noPersist(points),
	formula: x => x.div(10).sqrt()
}));
```

Keep in mind `points` here refers to `prestige.points` since it's within the `prestige` layer.

## Create a reset button

Next let's create a button that will perform the reset and generate points. We'll create a clickable, like so:

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

This creates a simple clickable that can only be clicked when we'll gain some amount of the prestige currency, and it tells us how much we'll get. This could be further improved by making the display convey how many points the player will need to generate 1 more prestige point.

## Resetting previous content

Now we need to go back to the `main` layer. Here we'll create a `reset` feature that gets a list of all the things it needs to reset - for this example, we'll just reset the entire layer:

```ts
const reset = createReset(() => ({
	thingsToReset: [layer]
}));
```

And then we can modify the convert button to trigger the reset:

```ts
onClick() {
	conversion.convert();
	reset.reset();
}
```

If you have multiple tiers of resets, you may add a `onReset` function to each reset that triggers the next reset before it. That will cause the resets to cascade.

## Branching resets

A common pattern for reset mechanics is to display these various layers in a tree and have the tree propagate the resets for you. There are a couple utility functions to help you accomplish this: [createResetButton](../../api/modules/data/common#createresetbutton) and [createLayerTreeNode](../../api/modules/data/common#createlayertreenode). You'll typically place the tree itself in the `main` layer, and create a tree node for each layer. Then you can call the tree's `reset` function with the layer that's resetting and it'll propagate the reset as appropriate.
