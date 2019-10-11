const merge = require('webpack-merge');
const dev = require('./webpack.config.dev');
const path = require('path');

module.exports = merge(dev, {
  serve: {
    content: path.resolve(__dirname, 'dist'),
    port: 3333,
    open: true,
    hot: true
  }
});
