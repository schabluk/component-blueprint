const path = require('path')
const baseConfig = require('./config/base')

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dist')
}

module.exports = {
  entry: "./src/main.ts",
  output: {
    filename: 'dist/main.js',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".jsx", ".scss"]
  },
  module: baseConfig(PATHS),
  devtool: "source-map",
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    'react': 'commonjs react',
    'react-dom' : 'commonjs react-dom'
  }
};
