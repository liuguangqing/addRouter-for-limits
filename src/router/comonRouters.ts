import login from "@/views/layout/login.vue";

const routes: any[] = [
  {
    path: "/",
    redirect: '/home/index'
  },
  {
    path: "/login",
    component: login
  }
];

export default routes