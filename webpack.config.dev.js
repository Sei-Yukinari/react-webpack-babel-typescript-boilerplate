const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        enforce: 'pre',
        loader: 'tslint-loader',
        test: /\.tsx?$/,
        exclude: [
          /node_modules/
        ],
        options: {
          emitErrors: true
        }
      },
      {
        loader: 'ts-loader',
        test: /\.tsx?$/,
        exclude: [
          /node_modules/
        ],
        options: {
          configFile: 'tsconfig.dev.json'
        }
      }
    ]
  },
});
