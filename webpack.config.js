const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'scripts', 'chronicle.js'),
  output: {
    path: path.join(__dirname),
    filename: 'chronicle-bundle.js'
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
        test: path.join(__dirname, 'scripts', 'chronicle.js'),
        loader: ['babel-loader'],
        query: {
          cacheDirectory: 'babel_cache',
          presets: ['react', 'es2015']
        }
      }
      
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
    })
  ]
}
