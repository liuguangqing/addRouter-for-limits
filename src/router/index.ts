import Vue from "vue";
import VueRouter from "vue-router";
import ax from '@/service/axios';
import routes from './comonRouters';
import { formatRoutes } from './utils';
import { Message } from 'element-ui'

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes
});
const NotFound = () => import('@/views/layout/404.vue');
// let defaultRoute: any = ''  // 更改控制台校验

router.beforeEach((to: any, from: any, next: any) => {
  let storeJs: any = router.app.$options.store
  const username = sessionStorage.getItem('username');
  if(!username && to.path !== '/login'){
    Message.error('请先登录当前用户');
    next({path: '/login'});

  } else if (storeJs.state.remoteRouteRefresh && to.path !== '/login') {
    ax({url: '/login', method: 'post', data: {token: storeJs.state.token}}).then((res: any) => {
      console.warn('模拟请求-成功', res)
      if (res.status === 200 && res.data.errno === 0) {

        const menuData = res.data.result;
        storeJs.commit('set_remoteRouteRefresh', false)
        storeJs.commit('set_menudata', menuData)
        localStorage.setItem('menudata', JSON.stringify(menuData));
        // defaultRoute = JSON.stringify(menuData);
        const routeData = formatRoutes(menuData);
        router.addRoutes([routeData].concat([
          {name:'404',path:'/404',component: NotFound},
          {path:'*',redirect: '/404'}
        ]));
        Message.success('恭喜登录成功。。');
        next(to.path)

      }
      else {
        storeJs.commit('set_remoteRouteRefresh', true)
        Message.error('不存在此用户 ！');
        next({path: '/login'});
      }
    })
    .catch((err: any) => {
        console.log(err);
    });    
  } else {
    // if (defaultRoute === localStorage.getItem('menudata')) {
      next();
    // } else {
    //   sessionStorage.setItem('username', '') // 清除用户信息
    //   localStorage.setItem('menudata', '') // 清除菜单数据
    //   location.href = '/login'
    // }
  }
})

export default router;
