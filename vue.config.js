module.exports = {
  publicPath: '/',
  // transpileDependencies: ['pl-table'],
  // 服务器地址： 服务器    ip/pathA  
  // 接口地址  : 本地地址   /api/pathA
  // open: true, //是否自动弹出浏览器页面
  devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '',
                }
            }
        }
  }
}
