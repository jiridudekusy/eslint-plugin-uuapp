# Enforces using text description in HDS a A* comments.  (no-empty-scenario-comments)

Please describe the origin of the rule here.


## Rule Details

This rule aims to...

Examples of **incorrect** code for this rule:

```js
    // hds 1.2
    // hds 10.2
    // A1
    // A345

```

Examples of **correct** code for this rule:

```js
    // any comment
    // hds 1.2 - test step
    // hds 10.2 - test step
    // A1 - test step
    // A345 - test step

```

## When Not To Use It

Do not use this rule if you are not developing uuApp.


