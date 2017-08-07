<template>
  <div id="app">
  	<span :class="isLeftShow?'grey':'transparent'" @click="isLeftShow=!isLeftShow"></span>
  	<header>
  		<i class="left" @click="isLeftShow=!isLeftShow">目</i>
  		<img src="http://assets.iranshao.com/src/images/logo-text.9660dcc0e5373b1a27e84bbda7cde28c.jpg"/>
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
		    <swipe-item class="slide1">1</swipe-item>
  			<swipe-item class="slide2">2</swipe-item>
  			<swipe-item class="slide3">3</swipe-item>
		</swipe>
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
  		looplist:[]
  	} 
  },
  components:{
  	"xia-cover":child,
  },
  mounted(){
  	axios.get("").then(res=>{

  	})
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
	span{
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
		height:px2rem(50px);
		position:fixed;
		top:0px;
		width:100%;
		left:0px;
		line-height:px2rem(50px);
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
		.my-swipe{
			height:100px;
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