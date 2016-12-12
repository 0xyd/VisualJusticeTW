const webpack = require('webpack');
const path = require('path');
// Y.D 20161212: Figure it later
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, 'scripts', 'jrcf.js'),
  output: {
    path: path.join(__dirname),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: path.join(__dirname, 'components'),
        loader: ['babel-loader'],
        query: {
          cacheDirectory: 'babel_cache',
          presets: ['react', 'es2015']
        }
      },
      {
        test: path.join(__dirname, 'scripts', 'jrcf.js'),
        loader: ['babel-loader'],
        query: {
          cacheDirectory: 'babel_cache',
          presets: ['react', 'es2015']
        }
      },
      // Y.D 20161212: Figure it later
      // {
      //   test: path.join(__dirname, 'style'),
      //   loader: ExtractTextPlugin.extract("style", "css!stylus")
      // }
      
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    }),
    new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
    }),
    // Y.D 20161212: Figure it later
    // Extract css file
    // new ExtractTextPlugin("[name].css")
  ]
}