# eslint-plugin-only-var

> Enforce `var` usage.

## Why

While we're in the process of upgrading the code base to newer versions of JS, we currently cannot use `const` or `let`.  Sometimes we get confused and do it anyways.  This will stop that.

## Usage

```
yarn add -D eslint-plugin-only-var
```

```js
// .eslintrc
{
  // ...
  "plugins": [
    "only-var"
  ],
  "rules": {
    "only-var/only-var": "error"
  }
}
```