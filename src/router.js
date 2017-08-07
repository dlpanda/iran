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
  { path:'/races', component:Races,
	children:[
		{
			path:'/races/:pageId',name:"races",component:RaceDetail
		}
	]},
  { path:'/login', component:Login},
  { path:'/results', component:Results,
  children:[
  {
  	path:'albums',component:Albums
  },
  {
  	path:'search',component:Search,
	children:[
	{
		path:'code',component:SearchCode
	},
	{
		path:'athletes',component:SearchAthletes
	}
	]
}
  ]
},
  { path:'/home',component:Home},
  
	{ path:'/my',component:My}
]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

export default router;

