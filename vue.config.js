module.exports = {
  devServer: {
    port: 8081,
    host: '0.0.0.0'
  }
  productionSourceMap: false,
    configureWebpack: {
        performance: {
            hints: process.env.NODE_ENV === 'production' ? 'warning' : false
        }
    }
}
