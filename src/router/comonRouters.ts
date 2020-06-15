import login from "@/views/layout/login.vue";
import mobile from "@/views/mobile/index.vue";

const routes: any[] = [
  {
    path: "/",
    redirect: '/home/index'
  },
  {
    path: "/mobile",
    component: mobile
  },
  {
    path: "/login",
    component: login
  }
];

export default routes