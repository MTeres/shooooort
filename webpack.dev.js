const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    port: 8081,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    },
    proxy: {
      '/shorten': {
        target: 'http://localhost:3001/',
        changeOrigin: true,
        secure: false,
        logLevel: 'debug'
      },
      '/**/stats': {
        target: 'http://localhost:3001/',
        changeOrigin: true,
        secure: true,
        logLevel: 'debug'
      }
    }
  }
})
