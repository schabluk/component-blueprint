const path = require('path')

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'lib')
}

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "index.js",
    publicPath: '/'
  },
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".jsx", ".scss"]
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loader: "source-map-loader" },
      { test: /\.jsx?$/, loader: 'eslint', include: PATHS.app },
      { test: /\.tsx?$/, loader: 'tslint', include: PATHS.app }
    ],
    loaders: [
      { test: /\.tsx?$/, loader: "ts-loader", include: PATHS.app },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          plugins: ['transform-runtime', 'transform-decorators-legacy'],
          presets: ['es2015', 'react', 'stage-1']
        },
        include: PATHS.app
      },
      { test: /\.json$/, loader: 'json' },
      { test: /\.html/, loader: 'html' },
      { test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass'], include: PATHS.app },
      { test: /\.css$/, loaders: ['style', 'css', 'postcss-loader'], include: PATHS.app },
      /* eslint-disable */
      { test: /\.woff(\?.*)?$/,  loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff' },
      { test: /\.woff2(\?.*)?$/, loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2' },
      { test: /\.ttf(\?.*)?$/,   loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?.*)?$/,   loader: 'file?prefix=fonts/&name=[path][name].[ext]' },
      { test: /\.svg(\?.*)?$/,   loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml' },
      { test: /\.(png|jpg)$/,    loader: 'url?limit=8192' }
      /* eslint-enable */
    ]
  },
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};
