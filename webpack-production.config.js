const path = require('path')
const webpack = require('webpack')
const config = require('./webpack.config')

const LIBRARY_NAME = 'walls'

module.exports = Object.assign(config, {
  mode: 'production',
  entry: {
    [LIBRARY_NAME]: path.resolve(__dirname, 'index.js'),
  },
  externals: ['react', 'react-router-dom', 'prop-types'],
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].js',
    libraryTarget: 'umd',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
})
