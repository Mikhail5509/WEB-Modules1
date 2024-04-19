const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.txt$/,
        loader: 'raw-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
       template: './src/index.html'
    })
  ]
}