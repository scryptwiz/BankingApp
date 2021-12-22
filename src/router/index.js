import { createRouter, createWebHistory } from "vue-router";
import SignUp from '../views/SignUp.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard'
import Balance from '../views/Balance'

const routes = [
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/dashboard/:id",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/balance",
    name: "Balance",
    component: Balance,
  },
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  // {
    // path: "/about",
    // name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
      // import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
