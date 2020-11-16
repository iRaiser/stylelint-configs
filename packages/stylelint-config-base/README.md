# StyleLint Config

[![Version](https://flat.badgen.net/npm/v/@iraiser/stylelint-config-base)](https://www.npmjs.com/package/@iraiser/stylelint-config-base)
[![Download](https://flat.badgen.net/npm/dt/@iraiser/stylelint-config-base)](https://www.npmjs.com/package/@iraiser/stylelint-config-base)

StyleLint shareable config for the iRaiser CSS style guide.

## Install

    npm install @iraiser/stylelint-config-base stylelint --save-dev
    
## Usage

Create ``.stylelintrc`` file on root of your project.

```
{
    "extends": [
        "@iraiser/stylelint-config-base"
    ]
}
```

You can extend the rules with your own config, see [StyleLint documentation](https://stylelint.io/user-guide/configuration).
