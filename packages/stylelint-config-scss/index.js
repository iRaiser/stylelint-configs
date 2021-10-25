'use strict';

module.exports = {
    'extends': [
        'stylelint-config-recommended-scss'
    ],
    'rules': {
        'scss/comment-no-loud': true,
        'scss/double-slash-comment-empty-line-before': [
            'always', {
                'ignore': [
                    'between-comments',
                    'stylelint-commands'
                ]
            }
        ],
        'scss/double-slash-comment-whitespace-inside': 'always',
        'scss/selector-no-redundant-nesting-selector': true
    }
};
