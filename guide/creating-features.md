# Creating Features

\# TODO

Because typescript does not emit JS, if a value is supposed to be a function it is impossible to determine if a given function is the intended value or a function that returns the actual value. For this reason it is not recommended for any feature types to include properties that are `Computable<Function>`s, and all functions _will_ be wrapped in `computed`. The notable exception to this is [JSX](./coercable#http://localhost:3000/guide/coercable.html#render-functions-jsx), which uses a utility function to mark that a function should not be wrapped.
