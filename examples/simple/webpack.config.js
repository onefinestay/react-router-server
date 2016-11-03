import path from 'path';
import StatsPlugin from 'stats-webpack-plugin';

module.exports = {
  entry: {
    app: './examples/simple/src/index.js'
  },

  output:{
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/'
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },

  plugins: [
    new StatsPlugin('stats.json')
  ]
};