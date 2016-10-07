/**
 * Base Webpack configuration
 */

module.exports = function (PATHS) {
  return {
    preLoaders: [
      { test: /\.js$/, loader: "source-map-loader" },
      { test: /\.jsx?$/, loader: 'eslint', include: PATHS.app },
      { test: /\.tsx?$/, loader: 'tslint', include: PATHS.app }
    ],
    loaders: [
      { test: /\.tsx?$/, loader: "ts-loader", include: PATHS.app },
      {
        test: /\.jsx?$/,
        loader: 'babel', // loaders: ['babel?cacheDirectory'],
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
  }
}
