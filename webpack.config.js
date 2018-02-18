/**
 * Created by edwin on 5/15/17.
 */
const webpack = require('webpack'),
    glob = require('glob');

let config = {
  entry: {
      'bundle': glob.sync('./assets/js/*.js')
  },
  output: {filename: './public/js/[name].js'},
  watch: true,
  module:{
      loaders: [
          {
              test: /\.js$/,
               exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
                  presets:['es2015']
              }
          }
      ]
  }
};

module.exports = config;
