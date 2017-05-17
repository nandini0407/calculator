module.exports = {
  entry: './lib/calculator.js',
  output: {
    filename: 'lib/bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '*']
  }
};
