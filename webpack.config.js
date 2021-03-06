const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')


const paths = {
  DIST: path.resolve(__dirname, 'client/dist/'),
  SRC: path.resolve(__dirname, 'client/src/'),
  JS: path.resolve(__dirname, 'client/src/js')
}

module.exports = {
  entry: path.join(paths.JS, 'index.jsx'),
  output: {
    path: paths.DIST,
    filename: 'bundle.js'
  },
  watch: true,
  plugins: [
    new HtmlWebpackPlugin({
    template: path.join(paths.SRC, 'index.html')
    }),
    new ExtractTextPlugin('style.bundle.css')
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}