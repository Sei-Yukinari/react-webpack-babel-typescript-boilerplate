const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'common',            // production or development
  entry: './src/index.tsx',  // エントリーポイント
  module: {
    rules: [
      {                           // Linterを走らせる
        enforce: 'pre',
        loader: 'tslint-loader',
        test: /\.tsx?$/,
        exclude: [
          /node_modules/
        ],
        options: {
          emitErrors: true      // これ設定しとくとTSLintが出してくれたwarningをエラーとして扱ってくれる、要するに-Wall
        }
      },
      {
        loader: 'ts-loader',    // トランスパイル
        test: /\.tsx?$/,
        exclude: [
          /node_modules/
        ],
        options: {
          configFile: 'tsconfig.prod.json' // TypeScriptのコンパイル設定ファイル
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']    // importの時に、これらの拡張子は解決してもらえる、要するにHoge.tsxをimport Hoge from './Hoge'みたいに書ける
  },
  output: {
    filename: 'static/js/bundle.js',        // トランスパイルされたファイル
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "index.html"    // 同じ階層にあるindex.htmlを元に、デプロイ用のindex.htmlを作って出力ディレクトリに配置してくれる
    })
  ]
};
