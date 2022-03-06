# Coercable Components

Most times a feature has some sort of dynamic display, it'll allow you to pass a "Coercable Component", or rather, something that can be coerced into a Vue component. This page goes over the different types of values you can use

## Template Strings

If you provide a string, it will be wrapped in a component using it as the template. This is the simplest method, although not suitable for complex displays, and realistically cannot use Vue components as none are registered globally (by default). Recommended for static or simple dynamic displays, such as displays on features.

Template strings need to be wrapped in some HTML element. By default, they'll be wrapped in a `<span>` element, although certain features may wrap things in div or header elements instead, as appropriate.

## Render Functions (JSX)

You can provide a render function and it will be wrapped in a component as well. The intended use for this is to write JSX inside a function, which will get automatically converted into a render function. You can read more about that process on the Vue docs on [Render Functions & JSX](https://vuejs.org/guide/extras/render-function.html#render-functions-jsx). Note that JSX must be returned in a function - it does not work "standalone". The CoercableComponent type will enforce this for you.

JSX can use imported components, making this suited for writing the display properties on things like Tabs or Layers. There are also built-in functions to `render` features (either as their own or in a layout via `renderRow` and `renderCol`), so you don't need to import the Vue component for every feature you plan on using.

Typically a feature will accept a `Computable<CoercableComponent>`, which means functions would (normally) be wrapped in a computed (see [Computable](./reactivity#computable) for more details). This would break render functions, so when passing a render function as a CoercableComponent it must be specially marked that it shouldn't be cached. You can use the built-in `jsx` function to mark a function for you.

#### Example

```ts
{
	display: jsx(() => (
        <>
            <MainDisplay resource={points} color={color} />
            {render(resetButton)}
            {renderRow(upgrade1, upgrade2, upgrade3)}
        </>
    )),
}
```

## Components

This one might be the most obvious, but you can also just give it a Vue component to display outright. Keep in mind it will not be passed any props, so it should not depend on any. You can read more about creating Vue components on [Components Basics](https://vuejs.org/guide/essentials/component-basics.html).
