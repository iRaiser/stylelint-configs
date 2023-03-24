# iRaiser StyleLint Configs

StyleLint configs for the iRaiser style guide.

## Install

```shell
npm install @iraiser/stylelint-config-base stylelint --save-dev
```

## Usage

Create ``.stylelintrc`` file on root of your project.

```json
{
    "extends": [
        "@iraiser/stylelint-config-base"
    ]
}
```

You can extend the rules with your own config,
see [StyleLint documentation](https://stylelint.io/user-guide/configuration).

## Release

When you have finish developing a feature, bugfix or something else, push your changes on `main` branch and launch
the `release` command:

```shell
npm run release
```

## Packages

| Package                                                                                                                       | Version                                                                                                                                  |
|-------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| [``@iraiser/stylelint-config-base``](https://github.com/iRaiser/stylelint-configs/blob/master/packages/stylelint-config-base) | [![Version](https://flat.badgen.net/npm/v/@iraiser/stylelint-config-base)](https://www.npmjs.com/package/@iraiser/stylelint-config-base) |
| [``@iraiser/stylelint-config-scss``](https://github.com/iRaiser/stylelint-configs/blob/master/packages/stylelint-config-scss) | [![Version](https://flat.badgen.net/npm/v/@iraiser/stylelint-config-scss)](https://www.npmjs.com/package/@iraiser/stylelint-config-scss) |
