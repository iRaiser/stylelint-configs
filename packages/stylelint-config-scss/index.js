'use strict';

module.exports = {
    'plugins': [
        'stylelint-scss'
    ],
    'rules': {
        'scss/at-import-no-partial-leading-underscore': true,
        'scss/comment-no-empty': true,
        'scss/comment-no-loud': true,
        'scss/double-slash-comment-empty-line-before': [
            'always', {
                ignore: [
                    'between-comments',
                    'stylelint-commands'
                ]
            }
        ],
        'scss/double-slash-comment-whitespace-inside': 'always',
        'scss/selector-no-redundant-nesting-selector': true
    }
};
