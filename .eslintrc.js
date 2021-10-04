/* eslint-disable jsdoc/require-file-overview */
module.exports = {
  extends: ['./packages/eslint-config/src/index.js'],
  ignorePatterns: [
    '**/node_modules/**',
    '**/publish',
    '**/publish/**/*.js',
    '**/watch',
    '**/watch/**/*.js',
  ],
}
