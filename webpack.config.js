var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// Webpack Config
var webpackConfig = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor':    './src/vendor.ts',
    'head':    './src/head.ts',
    'app':       './src/main.ts',
  },

  output: {
    path: 'app/build',
  },

  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.optimize.CommonsChunkPlugin({ name: ['app', 'vendor', 'polyfills', 'head'], minChunks: Infinity }),
  ],

  module: {
    loaders: [
      { test: /\.ts$/,   loader: 'ts-loader' },
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!sass-loader?sourceMap')
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff&name=build/[name].[ext]'},
      { test: /\.(ttf|eot|svg|jpeg|jpg|gif|png|txt)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=build/[name].[ext]'
      }
    ]
  },

  devServer: {
    contentBase: 'app',
    publicPath: '/build',
  },

};


// Our Webpack Defaults
var defaultConfig = {
  devtool: 'source-map',
  cache: true,
  debug: true,
  output: {
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [
          // these packages have problems with their sourcemaps
          path.join(__dirname, 'node_modules', 'rxjs'),
          path.join(__dirname, 'node_modules', '@angular2-material'),
        ]
      },
      {
        test: /\.ts$/,
        loader: 'tslint'
      }
    ],
    noParse: [
      path.join(__dirname, 'node_modules', 'zone.js', 'dist'),
      path.join(__dirname, 'node_modules', '@angular', 'bundles')
    ]
  },

  resolve: {
    root: [ path.join(__dirname, 'src') ],
    extensions: ['', '.ts', '.js']
  },

  devServer: {
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 }
  },

  node: {
    global: 1,
    crypto: 'empty',
    module: 0,
    Buffer: 0,
    clearImmediate: 0,
    setImmediate: 0
  },
}

var webpackMerge = require('webpack-merge');
module.exports = webpackMerge(defaultConfig, webpackConfig);
