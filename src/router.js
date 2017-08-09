import Vue from "vue";
import VueRouter from  "vue-router";
import Login from "./components/login.vue";
import Races from "./components/races.vue";
import Results from "./components/results.vue";
import Home from "./components/home.vue";
import Albums from "./components/albums.vue";
import Search from "./components/search.vue";
import SearchCode from "./components/searchCode.vue";
import SearchAthletes from "./components/searchAthletes.vue";
import RaceDetail from "./components/raceDetail.vue";
import My from "./components/my.vue";
import App from "./App.vue"
Vue.use(VueRouter); //安装路由功能


//配置路由如下
//
const routes = [
  { path:'/', redirect:'/home'},
  { path:'/races', component:Races},
  { path:'/login', component:Login},
  { path:'/races/111',component:RaceDetail},
  { path:'/results', component:Results},
  { path:'/results/albums',component:Albums},
  { path:'/results/search/athletes',component:SearchAthletes},
  { path:'/results/search/code',component:SearchCode},
  { path:'/home',component:Home},
  { path:'/my',component:My}
]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

export default router;

