const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./config/base')

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dist')
}

module.exports = {
  entry: "./src/webapp.tsx",
  output: {
    path: PATHS.build,
    filename: "bundle.js"
  },
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".jsx", ".scss"]
  },
  module: baseConfig(PATHS),
  devtool: "source-map",
  devServer: {
    // Enable history API fallback so HTML5 History API based
    // routing works. This is a good default that will come
    // in handy in more complicated setups.
    historyApiFallback: true,
    // Display only errors to reduce the amount of output.
    stats: 'errors-only'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
};
