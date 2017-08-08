<template>
	<div>
		<div>
			<h3 id="bardHeard"><span id="barddivst">〓</span>比赛</h3>
		</div>	
		
		<nav>
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
						<div>不限</div>
						<div>近期</div>
						<div>年月</div>
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
			<div id="bardFotter">
				<img src="http://pic2.iranshao.com/photo/image/WechatIMG8-9d85f13b3504e877379bd6a3c301686f.jpeg!320x320"  id="bardone"/>
				<div class="bardOne">徒步中国·张掖全国徒步大会</div>
				<div class="bardTwo"><span class="n1">2017-08-11</span class="n2"><span>甘肃省 张掖市</span></div>
				<div class="bardThree"><span class="n3">11</span>人关注</div>
				<div class="bardFour">报名中 <span class="n4  ">一键报名</span></div>
			</div>
		</div>
				
			</div>
		</template>



<script>
window.onload = function(){
	var btn = document.getElementById("bardRemove");
	var click1 = document.getElementById("bardInput");
	click1.onclick = function(){
		btn.style.display="inline-block";
	}	
}



	export default{
		
	}
</script>


<style scoped lang="scss">
$ui-width: 750px;
@function px2rem($px) {
    @return $px/$ui-width*7.5rem;
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
		z-index: 10;
		width:100%;
		display:none;
		
		

	}
	#bardNo{
		position:absolute;
		display:flex;
		background:#fff;
		z-index: 10;
		width:100%;
		height: px2rem(200px);
		#bardzl{
			flex:1;
				display:none;
			div{
			
			padding: px2rem(10px);
			border: 1px solid #ccc;				
			}
	
		}
		
		#bardDataTo{
			flex:2;
			#bardBack{
				display:none;
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
		z-index: 10;
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
		
	}
}
#barddivsting{
	font-size:px2rem(16px);
	position:absolute;
	z-index: 20;
	#bardone{
		width: px2rem(80px);
    	height: px2rem(80px);
    	position: absolute;
    	margin: px2rem(10px);
    	top:0;
	}
	#bardFotter{
		width:100%;
		margin-top:px2rem(10px);
		margin-bottom: px2rem(10px);
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