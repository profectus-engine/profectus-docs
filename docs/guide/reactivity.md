# Reactivity

Profectus takes large advantage of Vue's reactivity system. It's recommended to read up on how [refs](https://vuejs.org/guide/essentials/reactivity-fundamentals.html#reactive-variables-with-ref) and [computed](https://vuejs.org/guide/essentials/computed.html) refs work. Ultimately this means that sometimes you'll need to type `.value` to get the actual value of something, but also you are able to pass things around by reference instead of by value. Indeed, it is recommended to only unwrap the actual value when you actually need it. `.value` is guaranteed to be correct and up to date only on the exact moment it is accessed.

With a proper IDE, such as [Visual Studio Code](./setup#visual-studio-code-setup), you should be able to see whether or not something is a ref or not from type hints. If in doubt, you can always wrap the property in an `unref` call.

Vue's reactivity is probably the "quirkiest" part of Profectus, and not even the documentation makes all of those quirks clear. It is recommend to read [this thread](https://github.com/vuejs/docs/issues/849) of common misconceptions around Vue reactivity.

## Computable

Most properties on features will accept `Computable` values. Computable values can either be a raw value, a ref to the value, or a function that returns the value. In the lattermost case it will be wrapped in `computed`, turning it into a ref. The feature type will handle it being a ref or a raw value by using `unref` when accessing those values. With type hints, your IDE should correctly identify these values as refs or raw values so you can treat them as the types they actually are.

Because functions are automatically wrapped in `computed` for many properties, it might be expected to happen to custom properties you add to a feature that isn't defined by the feature type. These functions will _not_ be wrapped, and if you want it cached you should wrap it in a `computed` yourself. This does, however, allow you to include custom methods on a feature without worry.
