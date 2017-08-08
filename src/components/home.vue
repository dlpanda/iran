<template>
  <div id="app">
  	<span :class="isLeftShow?'grey cover':'transparent cover'" @click="isLeftShow=!isLeftShow"></span>
  	<header>
  		<i class="left" @click="isLeftShow=!isLeftShow">目</i>
  		<img src="http://assets.iranshao.com/src/images/logo-text.9660dcc0e5373b1a27e84bbda7cde28c.jpg" id="title"/>
  	</header>
  	<xia-cover v-if="isLeftShow" direction="moveltor">
	  	<nav>
	  		<div class="top">
	  			<div class="admin">
	  			</div>
	  			<h2>登录/注册</h2>
	  			<div class="tap">
	  				<div class="leftTap">我的主页</div>
	  				<div class="rightTap">我的报名</div>
	  			</div>
	  		</div>
	  		<ul>
	  			<router-link to="/home" tag="li" activeClass="active">首页</router-link>
	  			<router-link to="/races" tag="li" activeClass="active">比赛</router-link>
	  			<router-link to="/home" tag="li" activeClass="active">装备</router-link>
	  			<router-link to="/home" tag="li" activeClass="active">咨询</router-link>
	  			<router-link to="/home" tag="li" activeClass="active">原创</router-link>
	  			<router-link to="/home" tag="li" activeClass="active">众策</router-link>
	  		</ul>
	  	</nav>
	  </xia-cover>
	<div id="swiper">
		<swipe class="my-swipe">
			<swipe-item v-for="(data,index) in looplist" :key="data.url">
				<img :src="data.cover"/>
			</swipe-item>
		</swipe>
	</div>
	<div id="button">
		<ul>
			<router-link to="/races" tag="li" activeClass="active">
				<img src="http://assets.iranshao.com/src/images/home-race.ac2bb899ef395473fe2c3d788f102537.png"/>
			</router-link>
			<router-link to="/races" tag="li" activeClass="active">
				<img src="http://assets.iranshao.com/src/images/home-reg.c106bf350f433016ed482ded49984b4c.png"/>
			</router-link>
			<router-link to="/results" tag="li" activeClass="active">
				<img src="http://assets.iranshao.com/src/images/home-result.c66cf0db723d31e14734717a0b3ee625.png"/>
			</router-link>
		</ul>
	</div>
	<div id="introM">
		<h2>推荐比赛</h2>
		<ul>
			<li v-for="(data,index) in datalist" :key="data.id" @click="handleClick(data.id)">
				<img :src="data.cover"/>
				<div class="right_container">
					<h3>{{data.name}}</h3>
					<p><span>{{data.start_date}}</span><span>{{data.location}}</span></p>
					<div class="focus">
						<i>♥</i><span class="follows">{{data.follows_count}}</span>
					</div>
					<div class="tags">
						<span v-bind:style="{'display':data.has_photos?'inline-block':'none'}">照片</span>
						<span v-bind:style="{'display':data.has_results?'inline-block':'none'}">成绩</span>
						<span v-bind:style="{'display':data.is_reging?'inline-block':'none'}">报名中</span>
						<span v-bind:style="{'display':data.is_reging?'inline-block':'none'}">一键报名</span>
					</div>
				</div>
			</li>
		</ul>
	</div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vue-swipe';
import 'vue-swipe/dist/vue-swipe.css';
import Vue from 'vue';
Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);
var child={
	template:`
                <transition :name="direction">
                        <slot>
                        </slot>
                </transition>
            `,
    props:["direction"]
}
export default {
  data(){
  	return{
  		isLeftShow:false,
  		looplist:[],
  		datalist:[]
  	} 
  },
  components:{
  	"xia-cover":child,
  },
  methods:{
  	handleClick(id){
  		console.log(id);
  		router.push({name:"races",params:{pageId:id}})
  	}
  },
  mounted(){
  	axios.get("/api/all").then(res=>{
  		this.looplist=res.data.data.carousels,
  		this.datalist=res.data.data.races
  	}
  	)
  }
}
</script>

<style scoped lang="scss">
$ui-width: 750px;
@function px2rem($px) {
    @return $px/$ui-width*7.5rem;
}
*{
	padding:0;
	margin:0
}
html{
	font-size:100px;
	height:100%;
}
body{
	height:100%;
}
ul{
	list-style:none;
}
#app{
	.cover{
		height:100%;
		width:100%;
		opacity:0.5;
		background:black;
		position:absolute;
		z-index:4;
	}
	.grey{
		display:block;
	}
	.transparent{
		display:none;
	}
	header{
		background-color:white;
		height:px2rem(50px);
		position:fixed;
		top:0px;
		width:100%;
		left:0px;
		line-height:px2rem(50px);
		z-index:2;
		.left{
			font-size:12px;
			float:left;
			padding-left:10px;
		}
		img{
			position:absolute;
			right:50%;
			margin-right:px2rem(-42px);
			width:px2rem(84px);
			margin-top:px2rem(13px);
			display:block;
		}
	}
	nav{
		height:100%;
		width:px2rem(306px);
		position:fixed;
		left:0;
		top:0;
		color:#7f7f7f;
		z-index:5;
		background:white;
		.top{
			padding-top:px2rem(20px);
			height:px2rem(110px);
			width:100%;
			background:url("http://assets.iranshao.com/src/images/drawer_head_bg.d3d25da971cb8fad69575a4c72cf523f.png") no-repeat;
			.admin{
				height:px2rem(50px);
				background:url("http://assets.iranshao.com/src/images/user-default.83557d4ecf8f9433543f400c84d9b739.png") no-repeat;
				background-size:cover;
				border-radius: 50%;
				float:left;
				width:px2rem(50px);
				margin-left:px2rem(34px);
			}
			h2{
				float:left;
				font-size:18px;
				margin-left:px2rem(16px);
			}
			.tap{
				clear:both;
				width:100%;
				height:px2rem(62px);
				line-height:px2rem(62px);
				font-size:16px;
				
				margin-left:px2rem(34px);
				.leftTap{
					float:left;
					width:px2rem(110px);
				}
				.rightTap{
					float:left;
				}
			}
		}
		ul{
			color:#404040;
			line-height:px2rem(50px);
			padding-top:px2rem(25px);
			padding-left:px2rem(34px);
			font-size:18px;
			li{
				height:px2rem(50px);
			}
		}
	}
	#swiper{
		padding-top:px2rem(50px);
		.my-swipe{
			z-index:1;
			height:px2rem(160px);
			img{
				height:px2rem(160px);
				width:100%;
			}
		}
	}
	#button{
		height:px2rem(96px);
		ul{
			height:px2rem(96px);
			padding:px2rem(8px) 0;
			li{
				
				width:px2rem(120px);
				float:left;
				height:px2rem(80px);
				img{
					width:px2rem(120px);
					display:block;
				}
			}
			li:nth-of-type(2){
				margin-left:px2rem(7px);
				margin-right:px2rem(7px);
			}
		}
	}
	#introM{
		h2{
			padding-left:px2rem(16px);
			font-size:px2rem(18px);
			height:px2rem(68px);
			line-height:px2rem(68px);
		}
		ul{
			li{
				height:px2rem(120px);
				background-color:white;
				width:100%;
				img{
					margin-left:px2rem(16px);
					margin-top:px2rem(20px);
					height:px2rem(60px);
					width:px2rem(60px);
					float:left;
				}
				.right_container{
					float:left;
					margin-top:px2rem(20px);
					width:px2rem(250px);
					margin-left:px2rem(10px);
					h3{
						line-height:px2rem(28px);
						font-size:px2rem(16px);
						height:px2rem(28px);
						width:100%;
						white-space:nowrap; 
						overflow:hidden; 
						text-overflow:ellipsis;
					}
					p{
						width:100%;
						height:px2rem(20px);
						line-height:px2rem(20px);
						font-size:12px;
						color:#b6b6b6;
						white-space:nowrap; 
						overflow:hidden; 
						text-overflow:ellipsis;
						span:first-child{
							padding-right:px2rem(14px);
						}
					}
				.focus{
					color:#dcdddd;
					height:px2rem(22px);
					line-height:px2rem(22px);
					font-size:12px;
					i{

					}
					span{
						
					}
				}
				.tags{
					span{
						float:left;
						margin-right:px2rem(4px);
						border-radius:px2rem(8px);
						height:px2rem(16px);
						line-height:px2rem(16px);
						font-size:12px;
						background-color:#ebeff1;
						color:#4a5a7c;
						padding:0 px2rem(8px);
					}
					span:nth-last-child(1){
						background-color:#ffeae0;
						color:#ff611a;
					}
				}
			}
		}
	}
}
}

    .moveltor-enter-active{
            animation : kerwinslide-enter 1s 1;
        }

        .moveltor-leave-active{
            animation : kerwinslide-leave 1s 1;
        }

        @keyframes kerwinslide-enter{
            from{
                transform:translateX(-100%);
                opacity: 0
            }

            to{
                 transform:translateX(0px);
                opacity: 1
            }
        }

        @keyframes kerwinslide-leave{
            from{
                transform:translateX(0px);
                opacity: 1
            }

            to{
                 transform:translateX(-100%);
                opacity: 0
            }
        }
</style>