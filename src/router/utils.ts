import { routeMap } from './components';
import { asd } from './interface';

// routeMapTwo()
const formatRoutes = function (routes: any, routeData?: any) {
  routes.length && routes.forEach((route: asd) => {
    if (!routeData) {
      routeData = {
        path: route.path,
        name: route.name,
        // 组件匹配成功的话才可以访问具体的页面
        component: routeMap[route.component],
        children: [],
      };
    }
    if (route.component && routeData) {
      route.component = routeMap[route.component];
      routeData.children.push({
        path: route.path,
        name: route.name,
        component: route.component,
        meta: {
            title: route.title,
        },
      })
    }
    if (route.children && route.children.length) {
      formatRoutes(route.children, routeData);
    }
  });
  return routeData;
};

export { formatRoutes }