import Vue from "vue";
import VueRouter from  "vue-router";
import Login from "./components/login.vue";
import Races from "./components/races.vue";
import Results from "./components/results.vue";
import App from "./App.vue"
Vue.use(VueRouter); //安装路由功能


//配置路由如下
//
const routes = [
  { path:'/', component:App},
  { path:'/races', component:Races},
  { path:'/login', component:Login},
  { path:'/results', component:Results}
]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

export default router;

