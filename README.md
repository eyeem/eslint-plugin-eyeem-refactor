# eslint-plugin-eyeem-refactor

Catches accidental usage of components and packages that the team has decided to migrate away from!

1. No `classnames` dependency for components. Refactor that component!
2. These deprecated components from `eyeem-components`:

- `Text`
- `Checkbox`
- `Input`

Use the ones from `@eyeem-ui` instead!

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-eyeem-refactor`:

```
$ npm install eslint-plugin-eyeem-refactor --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-eyeem-refactor` globally.

## Usage

Add `eyeem-refactor` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["eyeem-refactor"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "eyeem-refactor/no-deprecated-imports": 2,
    "eyeem-refactor/no-classnames-module": 2
  }
}
```
