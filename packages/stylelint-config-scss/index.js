'use strict';

module.exports = {
    'extends': 'stylelint-config-standard',
    'plugins': [
        'stylelint-scss'
    ],
    'rules': {
        'scss/at-import-no-partial-leading-underscore': true,
        'scss/selector-no-redundant-nesting-selector': true
    }
};
