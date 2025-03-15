---
title: no-dupe-conditions
rule_type: suggestion
---

There should not be multiple identical conditions in an if statement.

## Rule Details

This rule disallows duplicate conditionals in if statements.

Example of **incorrect** code for this rule:

::: incorrect

```js
/*eslint no-dupe-conditions: "error"*/

if (a === 1 || a === 1) {

}
```

:::

Example of **correct** code for this rule:

::: correct

```js
/*eslint no-dupe-conditions: "error"*/

if (a === 1) {

}
```

:::
