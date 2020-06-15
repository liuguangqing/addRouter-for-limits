module.exports = {
  "plugins": {
    // "postcss-import": {},
    // "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "postcss-write-svg": {
      uft8: false
    },
    "postcss-cssnext": {},
    "postcss-px-to-viewport": {
      viewportWidth: 750, // 设计稿宽度
      unitPrecision: 3, // px to vw无法整除时，保留几位小数
      viewportUnit: 'vw', // 转换成vw单位
      selectorBlackList: ['.ignore', '.hairlines', 'el-header'], // 不转换的类名
      minPixelValue: 1, // 小于1px不转换
      mediaQuery: false, // 允许媒体查询中转换
      exclude: /(\/|\\)(node_modules)(\/|\\)/ //不转换我们引入的第三方包
    },
    "postcss-viewport-units": {},
    "cssnano": {
      preset: "advanced",
      autoprefixer: false, // 和cssnext同样具有autoprefixer，保留一个
      "postcss-zindex": false
    }
  }
}