# Formulas

Profectus utilizes formulas for various features, such as increasing requirements for repeatables and challenges or determining resource gains in conversions. These formulas often need to be inverted or integrated to enable features like buying multiple levels of a repeatable at once or determining when a conversion will increase resource gains. The Formula class can handle these operations, supporting every function Decimal does, while tracking the operations internally.

For example, a cost function like `Decimal.pow(this.amount, 1.05).times(100)` can be represented using a Formula: `Formula.variable(this.amount).pow(1.05).times(100)`.

```ts
const myRepeatable = createRepeatable(function (this: GenericRepeatable) {
    return {
        requirements: createCostRequirement(() => ({
            resource: points,
            cost: Formula.variable(this.amount).pow(1.05).times(100)
        })),
        maximize: true
    };
});
```

## Limitations

### Single Variable

For inverting and integrating, formulas should have a single variable, which serves as the input. Although other parts of the formula can be computed values, they must not be dependent on the input variable for inverting or integrating purposes. Formulas work correctly as long as changing other parts of the formula doesn't affect the input variable.

### Invertibility and Integrability

Certain operations may not support inverting or integrating. Functions such as rounding or clamping are non-invertible, while others like super-log are non-integrable. You may only use a single complex operation in addition to add, sub, mult, and div operations. For formulas with two complex operations, a [custom formula](#custom-formulas) is required.

### Spending Resources

When working with formulas, the `spendResources` property determines whether the formula needs to be invertible or integrable. The property is used in two utilities: [calculateMaxAffordable](/api/modules/game/formulas/formulas#calculatemaxaffordable) and [calculateCost](/api/modules/game/formulas/formulas#calculatecost). These utilities are ultimately employed wherever formulas are used, such as in cost requirements or conversions.

Spending resources refers to whether max affordability and cost calculations should account for resources spent. If spending resources is set to true, the formula will be integrated and inverted, albeit with certain limitations. For example, exponential modifiers and soft caps can make a formula non-integrable.

Consider a simple formula that returns the input value as the cost. For example, to make three sequential purchases, the costs would be 1, 2, and 3, totaling 6. When resources are spent, making three purchases in a single operation will cost a total of 6. However, if resources are not spent, the cost would only be 3, the cost of the last purchase. Accounting for resources being spent means that the overall cost calculation reflects the cumulative costs of multiple purchases.

Integration in this context is an estimation, as it calculates the area under a continuous curve, while actual purchases occur at integer values. This means that calculating max affordable might overshoot and the cost at that amount might undershoot. To help address this, the `summedPurchases` property can be used, which manually sums the last X purchases, reducing the error margin. This also ensures higher accuracy when the player makes fewer purchases at once, which is when accuracy is most relevant. For larger numbers of purchases, a slight overshoot or undershoot is typically acceptable.

### Modifiers

When applying changes to a formula using [modifiers](/api/modules/game/modifiers), use the `modifierToFormula` utility to apply the modifier while preserving invertibility if the modifier is invertible.

### Custom Formulas

If the existing functions are insufficient for your needs, create a custom formula by implementing your own evaluation, inversion, and integration functions. Use the operations in `src/game/formulas/operations.ts` as reference. For spending resources, the integral formula must be invertible.
