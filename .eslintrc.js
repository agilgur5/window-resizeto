module.exports = {
  ignorePatterns: ['dist/'],
  extends: [
    'standard-with-typescript'
  ],
  parserOptions: {
    // same as ./tsconfig.json, but adds test dir to be linted
    project: './tsconfig.eslint.json',
  },
  rules: {
    'prettier/prettier': 'off' // override tsdx lint
  }
}
