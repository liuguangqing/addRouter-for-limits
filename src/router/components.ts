
// 本地保存的路由地址
const routeMap: any = {
  index: () => import('../views/index.vue'),
  home: () => import('../views/home.vue'),
  about: () => import('../views/about.vue'),
  zhaoxin: () => import('../views/zhaoxin.vue'),
  change: () => import('../views/change.vue'),
  addAdverse: () => import('../views/addAdverse.vue')
};

const routeMapTwo: any = require.context('@/', true, /\.vue$/)
// routeMapTwo.keys().forEach((key: any) => {
//   let iteParam = key.substring(0, key.length - 4)
//   let iteParamPATH = `.${key.substring(0, key.length - 4)}.vue`
//   console.log(iteParam, iteParamPATH )
//   routeMap[iteParam.split('/')[iteParam.split('/').length - 1]] = () => import(iteParamPATH)
// })
export  { routeMap }