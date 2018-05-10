const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    port: 8081,
    proxy: {
      '/shorten': {
        target: 'https://impraise-shorty.herokuapp.com/',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
