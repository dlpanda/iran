<template>
	<div>
	<span :class="isLeftShow?'grey':'transparent'" @click="isLeftShow=!isLeftShow" id="bardCeng"></span>
		<div>
			<h3 id="bardHeard"><span id="barddivst" class="left" @click="isLeftShow=!isLeftShow">〓</span>比赛</h3>
		</div>	
		
		<nav>
		<xia-cover v-if="isLeftShow" direction="moveltor">
	  	<div id="bardLeft">
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
	  	</div>
	  </xia-cover>
			<div id="bardSearch">
				<div id="bardSearching">
					<input type="search" placeholder="搜索比赛/地区" id="bardInput">
					<button id="bardRemove">取消</button>
				</div>
				
			</div>
			
			<div id="bardSort">
				<div id="bardSorting">
					<div id="bardSorted">分类</div>
					<div id="bardData">日期</div>
					<div id="bardMap">地区</div>
					<div id="bardEnroll">筛选排序</div>
				</div>
				<div id="bardClassify">
					<div>不限</div>
					<div>健康跑</div>
					<div>马拉松</div>
					<div>越野跑</div>
					<div>铁人三项</div>
					<div>徒步</div>
					<div>其他</div>
				</div>
				<div id="bardNo">
					<div id="bardzl">
						<div id="bardtime1">不限</div>
						<div id="bardtime2">近期</div>
						<div id="bardtime3">年月</div>
					</div>
					
					
					<div id="bardDataTo">
					<div id="bardBack"></div>
					<div id="bardWeek">
						<div>上周</div>
						<div>本周</div>
						<div>下周</div>
					</div>
					<div id="bardRiQi">
						<div id="bardYear">
								<div>2018</div>
								<div>2017</div>
								<div>2016</div>
								<div>2015</div>
								<div>2014</div>
								<div>2013</div>
						</div>
						<div id="bardMonth">
								<div>全部</div>
								<div>1</div>
								<div>2</div>
								<div>3</div>
								<div>4</div>
								<div>5</div>
								<div>6</div>
								<div>7</div>
								<div>8</div>
								<div>9</div>
								<div>10</div>
								<div>11</div>
								<div>12</div>
						</div>
					</div>
						
					</div>
				</div>
				<div id="bardDi">
					<div id="bardClass">
						<div id="bardHot">热门</div>
						<div id="bardChina">国内</div>
						<div id="bardForeign">国外</div>	
					</div>
					
					<div id="bardHot1">
								<div>不限</div>
								<div>上海</div>
								<div>北京</div>
								<div>广州</div>
								<div>成都</div>
								<div>杭州</div>
								<div>沈阳</div>
								<div>武汉</div>
								<div>厦门</div>
								<div>重庆</div>
								<div>苏州</div>
								<div>南京</div>
								<div>西安</div>
								<div>日本</div>
								<div>香港</div>
								<div>台湾</div>
								<div>美国</div>
								<div>英国</div>
					</div>
					<div id="bardChina1">
								<div>全部</div>
								<div>北京市</div>
								<div>天津市</div>
								<div>上海市</div>
								<div>江苏省</div>
								<div>浙江省</div>
								<div>广东省</div>
								<div>黑龙江省</div>
								<div>吉林省</div>
								<div>辽宁省</div>
								<div>安徽省</div>
								<div>福建省</div>
								<div>甘肃省</div>
								<div>广西壮族自治区</div>
								<div>贵州省</div>
								<div>海南省</div>
								<div>河北省</div>
								<div>河南省</div>
								<div>湖北省</div>
								<div>湖南省</div>
								<div>江西省</div>
								<div>内蒙古自治区</div>
								<div>宁夏回族自治区</div>
								<div>青海省</div>
								<div>山东省</div>
								<div>山西省</div>
								<div>陕西省</div>
								<div>四川省</div>
								<div>西藏自治区</div>
								<div>新疆维吾尔自治区</div>
								<div>云南省</div>
								<div>重庆市</div>
								<div>香港</div>
								<div>澳门</div>
								<div>台湾</div>
					</div>
					<div id="bardForeign1">
								<div>全部</div>
								<div>美国</div>
								<div>日本</div>
								<div>英国</div>
								<div>泰国</div>
								<div>加拿大</div>
								<div>韩国</div>
								<div>俄罗斯联邦</div>
								<div>德国</div>
					</div>
				</div>
				<div id="bardLie">
						<div id="bardEndivst">
						<div>不限</div>
						<div>一键报名</div>
						<div>正在报名</div>
					</div>
					<div id="bardReorder">
						<div>综合排序</div>
						<div>按人气排序</div>
						<div>按时间排序</div>
					</div>
				</div>
			</div>
			
		</nav>
		<div id="barddivsting">
			<div class="bardFotter" v-for="(item,index) in bardlooplist" :key="index" @click="myhandleClick(item.id)">
				<img :src=item.cover class="bardone"/>
				
				<div class="bardOne">
					{{item.name}}
				</div>
				
				<div class="bardTwo"><span class="n1">{{item.start_date}}</span class="n2"><span>{{item.location}}</span></div>
				<div class="bardThree"><span class="n3">{{item.follows_count}}</span>人关注</div>
				<div class="bardFour">报名中 <span class="n4  ">一键报名</span></div>
			</div>
			
		</div>
				
			</div>
		</template>



<script>
import router from "../router";

window.onload = function(){
	var btn = document.getElementById("bardRemove");
	var btn1 = document.getElementById("bardClassify");
	var btn2 = document.getElementById("bardNo");
	var btn3 = document.getElementById("bardDi");
	var btn4 = document.getElementById("bardLie");
	var btn5 = document.getElementById("bardWeek");
	var btn6 = document.getElementById("bardBack");
	var btn7 = document.getElementById("bardWeek");
	var btn8 = document.getElementById("bardRiQi");
	var btn9 = document.getElementById("bardClass");
	var btn10 = document.getElementById("bardHot1").querySelectorAll('div');
	var btn11 = document.getElementById("bardChina1").querySelectorAll('div');
	var btn12 = document.getElementById("bardForeign1").querySelectorAll('div');

	var click12 = document.getElementById("barddivsting");
	var click11 = document.getElementById("bardForeign");
	var click10 = document.getElementById("bardChina");
	var click9 = document.getElementById("bardHot");
	var click8 = document.getElementById("bardtime3");
	var click7 = document.getElementById("bardtime2");
	var click6 = document.getElementById("bardtime1");
	var click5 = document.getElementById("bardEnroll");
	var click4 = document.getElementById("bardMap");
	var click3 = document.getElementById("bardData");
	var click2 = document.getElementById("bardSorted");
	var click1 = document.getElementById("bardInput");
	click1.onclick = function(){
		btn.style.display="inline-block";
	},	
	click2.onclick = function(){
		btn1.style.display="block";
		btn1.style.zIndex=100;
		btn2.style.display="none";
		btn3.style.display="none";
		btn4.style.display="none";
		btn2.style.zIndex=10;
		btn3.style.zIndex=10;
		btn4.style.zIndex=10;

	},
	click3.onclick = function(){
		btn2.style.display="flex";
		btn2.style.zIndex=100;
		btn1.style.display="none";
		btn3.style.display="none";
		btn4.style.display="none";
		btn1.style.zIndex=10;
		btn3.style.zIndex=10;
		btn4.style.zIndex=10;

	},
	click4.onclick = function(){
		btn3.style.display="block";
		btn9.style.display="flex";
		btn3.style.zIndex=100;
		btn9.style.zIndex=100;
		btn2.style.display="none";
		btn1.style.display="none";
		btn4.style.display="none";
		btn2.style.zIndex=10;
		btn1.style.zIndex=10;
		btn4.style.zIndex=10;

	},
	click5.onclick = function(){
		btn4.style.display="block";
		btn4.style.zIndex=100;
		btn2.style.display="none";
		btn3.style.display="none";
		btn1.style.display="none";
		btn2.style.zIndex=10;
		btn3.style.zIndex=10;
		btn1.style.zIndex=10;

	},
	click6.onclick = function(){
		btn6.style.display="flex";
		btn7.style.display="none";
		btn8.style.display="none";
	},
	click7.onclick = function(){
		btn7.style.display="flex";
		btn6.style.display="none";
		btn8.style.display="none";
	},
	click8.onclick = function(){
		btn8.style.display="flex";
		btn6.style.display="none";
		btn7.style.display="none";
	},
	click9.onclick = function(){
		for (var i = 0; i<btn10.length;i++) {
  	 	btn10[i].style.display="inline-block";
 		};
 		for (var i = 0; i<btn11.length;i++) {
  	 	btn11[i].style.display="none";
 		};
 		for (var i = 0; i<btn12.length;i++) {
  	 	btn12[i].style.display="none";
 		};
	},
	click10.onclick = function(){
		
		for (var i = 0; i<btn11.length;i++) {
  	 	btn11[i].style.display="inline-block";
 		};
 		for (var i = 0; i<btn10.length;i++) {
  	 	btn10[i].style.display="none";
 		};
 		for (var i = 0; i<btn12.length;i++) {
  	 	btn12[i].style.display="none";
 		};
	},
	click11.onclick = function(){
		for (var i = 0; i<btn12.length;i++) {
  	 	btn12[i].style.display="inline-block";
 		};
 		for (var i = 0; i<btn11.length;i++) {
  	 	btn11[i].style.display="none";
 		};
 		for (var i = 0; i<btn10.length;i++) {
  	 	btn10[i].style.display="none";
 		};
	}
	click12.onclick = function(){
		btn.style.display="none";
		btn1.style.display="none";
		btn2.style.display="none";
		btn4.style.display="none";
	}
}


var child={
	template:`
                <transition :name="direction">
                        <slot>
                        </slot>
                </transition>
            `,
    props:["direction"]
}
	export default{
  data(){
  	return{
  		isLeftShow:false,
  		bardlooplist:[]
  	} 
  },
  components:{
  	"xia-cover":child,
  },
  mounted(){
  	axios.get(`/api/listxiangqing?id${this.$route.params.myid}`).then(res=>{
  		console.log(res.data.races);
  			this.bardlooplist=res.data.races
  	})
  },
  methods:{

	myhandleClick(id){
		console.log(id);
		//通过js 方式 进行(单页面)页面跳转
		//通过路径跳转
		// router.push(`/races/${this.$route.params.myid}/briefs`); 
		// 
		// 通过名字找到组件进行跳转。
		router.push({name:"detail",params:{ myid: id }})
	}
}	
}
</script>


<style scoped lang="scss">
$ui-width: 750px;
@function px2rem($px) {
    @return $px/$ui-width*7.5rem;
}
#bardCeng{
		height:100%;
		width:100%;
		opacity:0.5;
		background:black;
		position:absolute;
		z-index:150;
	}
	.grey{
		display:block;
	}
	.transparent{
		display:none;
	}
#bardHeard{
	font-size:px2rem(24px);
	height:px2rem(50px);
	width:100%;
	border-bottom: 1px solid #ccc;
	text-align: center;
	position:relative;
	line-height: px2rem(50px);
	#barddivst {
		position: absolute;
		left:0;
	}
}
#bardLeft{
		height:100%;
		width:px2rem(306px);
		position:fixed;
		left:0;
		top:0;
		color:#7f7f7f;
		z-index:200;
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
#bardSearch{
	font-size:px2rem(14px);
	height:px2rem(50px);
	width:100%;
}
#bardSearch{
	height:px2rem(50px);
	width:100%;
	position:relative;
	border-bottom: 1px solid #ccc;
	#bardSearching{
		width:78%;
		margin:px2rem(10px) 5%;

		height:px2rem(30px);
		background:#aaa;

		#bardInput{
			height:px2rem(30px);
			width:80%; 
			background:#aaa;
			text-indent: px2rem(5px);
		}
		#bardRemove{
			position:absolute;
			height:px2rem(30px);
			left:px2rem(280px); 
			display:none;
	
		}

	}

}	
#bardSort{
	font-size:px2rem(16px);
	
	#bardSorting{
		position:relative;
		width:100%;
		height:px2rem(30px);
		border-bottom: 1px solid #ccc;
		display:flex;
		div{


			width:100%;
			text-align: center;
			font-size:px2rem(10px);
			line-height:px2rem(30px); 
		}
	}
	#bardClassify{
		position:absolute;
		background:#fff;
		z-index: 100;
		width:100%;
		display:none;
		div{
			
			padding: px2rem(10px);
			border: 1px solid #ccc;				
			}

	}
	#bardNo{
		position:absolute;
		display:flex;
		background:#fff;
		z-index: 10;
		width:100%;
		height: px2rem(200px);
		display:none;
		#bardzl{
			flex:1;
				
			div{
			
			padding: px2rem(10px);
			border: 1px solid #ccc;				
			}
	
		}
		
		#bardDataTo{
			flex:2;
			#bardBack{
				background:#fff;
				width:100%;
				height: px2rem(100px);
				
			}
			#bardWeek{
				display:none;
				div{
			
					padding: px2rem(10px);
					border: 1px solid #ccc;				
				}
			}
			#bardRiQi{
				display: flex;
				display:none;
				#bardYear{
					flex:1;
					max-height: px2rem(200px);
					overflow: scroll;
					div{
			
						padding: px2rem(10px);
						border: 1px solid #ccc;				
					}
				}
				#bardMonth{
					flex:1;
					max-height: px2rem(200px);
					overflow: scroll;
					div{
			
						padding: px2rem(10px);
						border: 1px solid #ccc;				
					}
				}
			}
		}
		
		
	}
	#bardDi{
		position:absolute;
		background:#fff;
		width:100%;
		height: px2rem(200px);
		#bardClass{
			display:flex;
			width:100%;
			height:px2rem(50px);
			text-align: center;
			line-height: px2rem(50px);
			border-bottom: 1px solid #ccc;
			display:none;
			#bardHot{
				flex:1;
			}
			#bardChina{
				flex:1;
			}
			#bardForeign{
				flex:1;
			}
		}
		#bardHot1{
			div{
				display:none;
				margin:px2rem(10px) px2rem(5px);
					
			}
		}
		#bardChina1{
			div{
				display:none;
				margin:px2rem(10px) px2rem(5px);
					
			}
		}
		#bardForeign1{
			div{
				display:none;
				margin:px2rem(10px) px2rem(5px);
					
			}
		}
		
	}
	#bardLie{
		position:absolute;
		display:none;
		background:#fff;
		width:100%;
		div{
			
			padding: px2rem(10px);
			border: 1px solid #ccc;				
			}
		
	}
}
#barddivsting{
	font-size:px2rem(16px);
	position:absolute;
	z-index: 20;
	width:100%;
	
	.bardFotter{
		
		background:#fff;
		width:100%;
		margin-top:px2rem(10px);
		margin-bottom: px2rem(20px);
		position:relative;
		.bardone{
		width: px2rem(80px);
    	height: px2rem(80px);
    	position: absolute;
    	margin: px2rem(10px);
    	top:0;
	}
		div{
		margin-left: px2rem(100px);
		}
		.bardOne{
			margin-top:px2rem(5px);
		}
		.bardTwo{
			font-size: px2rem(10px);
			color: #ccc;
			margin-top:px2rem(5px);
			margin-bottom: px2rem(5px);
		}
		.bardThree{
			font-size: px2rem(10px);
			color: #ccc;
			margin-top:px2rem(5px);
			margin-bottom: px2rem(5px);
		}
		.bardFour{
			font-size: px2rem(10px);
			color: #0fc;
			.n4{
				text-align: center;
				height:px2rem(30px);
				line-height: px2rem(30px);
				width:px2rem(70px);
				display:inline-block;
				float:right;
				color: #ff5000;
				border-radius: px2rem(20px);
    			border: 1px solid;
    			font-weight: 600;
			}
		}	
	}
	
}

</style>