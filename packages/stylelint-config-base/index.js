'use strict';

module.exports = {
    'extends': 'stylelint-config-standard',
    'rules': {
        'alpha-value-notation': 'number',
        'at-rule-empty-line-before': [
            'always',
            {
                'except': [
                    'blockless-after-same-name-blockless',
                    'first-nested'
                ],
                'ignore': [
                    'after-comment'
                ],
                'ignoreAtRules': [
                    'else'
                ]
            }
        ],
        'at-rule-name-space-after': 'always',
        'at-rule-no-unknown': null,
        'at-rule-no-vendor-prefix': true,
        'at-rule-semicolon-space-before': 'never',
        'block-closing-brace-newline-after': [
            'always',
            {
                'ignoreAtRules': [
                    'if',
                    'else'
                ]
            }
        ],
        'block-no-empty': null,
        'color-function-notation': 'modern',
        'declaration-no-important': true,
        'declaration-property-unit-allowed-list': {
            'font-size': [
                'em',
                'rem',
                'px',
                '%'
            ]
        },
        'function-parentheses-newline-inside': 'never-multi-line',
        'function-url-quotes': [
            'always',
            {
                'except': [
                    'empty'
                ]
            }
        ],
        'indentation': 4,
        'max-nesting-depth': [
            3,
            {
                'ignoreAtRules': [
                    'media',
                    'include'
                ]
            }
        ],
        'no-descending-specificity': null,
        'selector-attribute-quotes': 'always',
        'shorthand-property-no-redundant-values': true,
        'string-quotes': 'double'
    }
};
