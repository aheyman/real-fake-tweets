module.exports = {
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': [0],
    'react/prop-types': 0,
    'react/prefere-stateless-function': [{ ignorePureComponents: true }],
  },
  env: {
    browser: true,
    jest: true,
  },
};
