# eslint-plugin-uuapp

Extends eslint by rules specific for uuApp.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-uuapp`:

```
$ npm install eslint-plugin-uuapp --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-uuapp` globally.

## Usage

Add `uuapp` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "uuapp"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "uuapp/rule-name": 2
    }
}
```

## Supported Rules

- [uuapp/no-empty-scenario-comments](docs/rules/no-empty-scenario-comments.md) - enforces using text description for HDS a A* comments






