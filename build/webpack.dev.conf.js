var path = require('path')
var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var glob = require('glob')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  // module: {
  //   loaders: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  // },
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    //使用ProvidePlugin加载使用频率高的模块
    new webpack.ProvidePlugin({
      // $ : "webpack-zepto"
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'h5.html',
      template: path.resolve(__dirname, '../src/entry/h5/h5.html'),
      inject: true,
      chunks: ['h5']
    }),
    new HtmlWebpackPlugin({
      filename: 'app.html',
      template: path.resolve(__dirname, '../src/entry/app/app.html'),
      inject: true,
      chunks: ['app']
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: path.resolve(__dirname, '../src/entry/login/login.html'),
      inject: true,
      chunks: ['login']
    })
  ]

})

