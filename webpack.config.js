// Build dependencies
// Start this using $ npm run build

var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    map: './map.js'
  },
  output: {
    path:  path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {test: /\.json$/, loader: 'json'}
    ]
  },
  plugins: [
  ],
  externals: [
    {'options': "Options"},
    {'tls': "tls"}
  ]
}
