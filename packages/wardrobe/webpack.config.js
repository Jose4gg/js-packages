const webpackConfigFunc = require('webpack-config');

module.exports = (env, argv) => webpackConfigFunc(env, argv, {
  rootPath: __dirname,
  htmlPath: 'app/index.html',
  entryPath: 'app/index.tsx',
  tsconfigPath: 'tsconfig.json',
  port: 8086
});