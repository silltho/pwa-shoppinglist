module.exports = {
	"parser": "babel-eslint",
  'extends': 'airbnb',
  'rules': {
	  'camelcase': 'off',
    'comma-dangle': ['error', 'never'],
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': ['warn', { 'aspects': ['invalidHref'] }],
	  'react/forbid-prop-types': 0,
    'react/prefer-stateless-function': 'off',
    'semi': ['error', 'never'],
    'linebreak-style': 0,
	  'arrow-parens': ['error', 'always']
  },
  'env': {
    'browser': true,
    'node': true
  },
  'plugins': []
}