const path = require('path');

module.exports = {
  entry: './lib/calculator.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'lib/bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '*']
  }
};
