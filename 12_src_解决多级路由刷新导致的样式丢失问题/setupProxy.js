const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    proxy('/search', { // 遇到api1前缀的请求 就会触发该代理配置
      target: "http://localhost:5000", // 请求转发给谁
      // changeOrigin: true, // 控制服务器收到的请求头中Host字段的值
      /*
        hangeorigin设置为true时，服务器收到的请求头中的host为: localhost:5000
        changeorigin设置为false时，服务器收到的请求头中的host为: oca]host:3000
        changeorigin默认值约false，但我们一般将changeorigin值设为true
      */
      // pathRewrite: { '^/search': '' } // 重写请求路径 去除请求前缀，保证交给后台服务器的是正常请求地址
    })
  )
}