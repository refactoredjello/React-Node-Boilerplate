const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = {
  DIST: path.resolve(__dirname, 'client/dist/'),
  SRC: path.resolve(__dirname, 'client/src/'),
  JS: path.resolve(__dirname, 'client/src/js')
}

const HtmlWebpackPluginConfig = 

module.exports = {
  entry: path.join(paths.JS, 'index.js'),
  output: {
    path: paths.DIST,
    filename: 'bundle.js'
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html')
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
}