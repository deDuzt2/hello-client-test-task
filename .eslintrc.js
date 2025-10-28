module.exports = {
  extends: ['react-app', 'prettier'],
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    'import/prefer-default-export': 'off',
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          ['external', 'internal'],
          'parent',
          'sibling',
          'index',
          'object',
        ],
        'newlines-between': 'always',
      },
    ],
  },
}
