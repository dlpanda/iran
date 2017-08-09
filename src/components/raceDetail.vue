<template>
	<div id="wlyall">
		<div id="wlyheader">
		<router-link to="/races" tag="span" activeClass="active wlyh1" class="left">《</router-link>	{{playlist.name}}
		</div>
		<div id="wlynav">
			<div class="wlyn1">
				
			</div>
			<div class="wlyn2">
				<div class="wlyn21">
					<div><img :src="imgsrc" /></div>
					<span>报名中</span>
				</div>
				<div class="wlyn22">
					{{playlist.name}}
				</div>
				<span class="wlyn23">暂无评分</span>
				<span class="wlyn24">{{playlist.follows_count}}人关注</span>
				<span class="wlyn25">{{playlist.upcoming_participations_count}}人预计参赛</span>
			</div>
			<div class="wlyn3">
				<div class="wlyn31" @click="myhandleClick(playlist.id)">预计参加</div><div class="wlyn32">关注</div>
			</div>
			
		</div>
		<div id="wlybody">
			<h1 class="wlyb1">赛事章程<span>></span></h1>
			<div class="wlyb2">
				<div class="wlyb21"><span>比赛时间</span>{{playlist.start_date}}</div>
				<div class="wlyb22"><span>比赛地点</span>{{playlist.location}}</div>
				<div class="wlyb23"><span>报名时间</span>{{playlist.reg_start_date}}开始-{{playlist.reg_end_date}}结束</div>
				<div class="wlyb24"><span>报名组别</span><span v-for="(data,index) in datalist" :key="data.id" >{{data.name}}/</span></div>				
			</div>			
		</div>
		<div id="wlysai">
			赛事详情<span @click="handleClick(playlist.id)">></span>
		</div>
		<div id="wlyping">
			<div class="wlyp1">
				赛事动态（0）
			</div>
			<div class="wlyp2">
				赛事相册（0）
			</div>
			<div class="wlyp3">
				赛事点评（0）<span>发表点评</span>
				<p>为了确保点评的真实性，等比赛结束后<br>再分享你的赛后感想吧！</p>
			</div>
			<div class="wlyp4">
				赛事日记（0）
			</div>
			<div class="wlyp5">
				历届赛事（0）
			
			</div>
			<div class="wlyp6">
				
			</div>
			
		</div>
		<div id="wlyfooter">
			一键报名
		</div>
	</div>
</template>



<script>
import router from "../router";
	export default{
		data(){
			return {
				
				playlist:null,
				imgsrc:null,
				datalist:[]
			}
		},	
		mounted(){
			console.log(this.$route.params.myid);
			axios.get(`/api/detail?id=${this.$route.params.myid}`).then(res=>{
				console.log(res.data);
				this.playlist = res.data.data.race;
				console.log(this.playlist.cover.split("!")[0]);
				this.imgsrc = this.playlist.cover.split("!")[0];
				// console.log(datalist);
				// console.log(this.playlist.detail);
				console.log(this.playlist.race_groups);
				this.datalist = this.playlist.race_groups;
				
				//dispatch 消息 给action
				// this.$store.dispatch("UPDATE_NAME",this.playlist.name);

			})
			// console.log(this.mscg)
		},
		methods:{
			handleClick(id){
				console.log(id);
				//通过js 方式 进行(单页面)页面跳转
				//通过路径跳转
				// router.push(`/races/${this.$route.params.myid}/briefs`); 
				// 
				// 通过名字找到组件进行跳转。
				router.push({name:"races",params:{ myid: id }})
			},
			myhandleClick(id){
				console.log(id);
				//通过js 方式 进行(单页面)页面跳转
				//通过路径跳转
				// router.push(`/races/${this.$route.params.myid}/briefs`); 
				// 
				// 通过名字找到组件进行跳转。
				router.push({name:"individual",params:{ myid: id }})
			}
		}			
	}
</script>


<style scoped lang="scss">
$ui-width: 750px;
@function px2rem($px) {
    @return $px/$ui-width*7.5rem;
}
#wlyall{
	font-size: px2rem(12px);
	background-color: #eee;

	#wlyheader{
	width: 90%;
	padding-right: 10%;
	height: px2rem(46px);
	font-size: px2rem(20px);
	font-weight: 400;
	text-align: center;
	line-height: px2rem(46px);
	white-space: nowrap;
	overflow: hidden;
	text-overflow:ellipsis;
	background-color: #fff;
	.wlyh1{
		display: block;
		float: left;
		width: px2rem(40px);
		height: px2rem(46px);
		font-size: px2rem(16px); 
	}
	}
	#wlynav{
	height: px2rem(224px);
	width: 100%;
	position: relative;
	background-color: #fff;
	.wlyn1{
		height: px2rem(120px);
		background: url(http://assets.iranshao.com/src/images/marathon-bg.80db6edbfe5495147d0c3dc870875bb7.jpg) 0 0 no-repeat;
	}
	.wlyn2{
		height: px2rem(95px);
		width: 100%;
		position: absolute;
		top: px2rem(55px);
		.wlyn21{
			width: px2rem(70px);
			height: px2rem(95px);
			margin-left: px2rem(20px);
			float: left;
			div{
				width: px2rem(70px);
				height: px2rem(70px);
				img{
					width: px2rem(70px);
					height: px2rem(70px);
					display: block;
				}

			}
			span{
				display: block;
				width: px2rem(70px);
				height: px2rem(20px);
				font-size: px2rem(16px);
				text-align: center;
				background-color: #f60;
				color: #fff;
			}
		}
		.wlyn22{
			width: px2rem(170px);
			height: px2rem(43px);
			float: left;
			font-size: px2rem(14px);
			color: #fff;
			margin-left: px2rem(20px); 
			white-space: nowrap;
			display: box;
			line-clamp:2;
			box-orient: vertical;
			word-break: break-all;
			overflow: hidden;
			text-overflow:ellipsis;			

		}
		.wlyn23{
			width: px2rem(48px);
			height: px2rem(16px);
			position: absolute;
			font-size: px2rem(12px);
			top: px2rem(45px);
			left: px2rem(110px);
			color: #ccc;
		}
		.wlyn24{
			width: px2rem(60px);
			height: px2rem(16px);
			position: absolute;
			font-size: px2rem(12px);
			top: px2rem(70px);
			left: px2rem(110px);
			color: #ccc;
		}
		.wlyn25{
			width: px2rem(70px);
			height: px2rem(16px);
			position: absolute;
			font-size: px2rem(12px);
			top: px2rem(70px);
			left: px2rem(180px);
			color: #ccc;
		}		
	}
	.wlyn3{
		width: 100%;
		height: px2rem(54px);
		margin-top: px2rem(50px);
		.wlyn31{
			width: px2rem(162px);
			height: px2rem(34px);
			font-size: px2rem(16px);
			float: left;
			text-align: center;
			line-height: px2rem(34px);
			border: 1px solid #f60;
			border-radius: px2rem(34px);
			margin-left: px2rem(20px);
			color: #f60;
		}
		.wlyn32{
			width: px2rem(162px);
			height: px2rem(34px);
			font-size: px2rem(16px);
			float: left;
			text-align: center;
			line-height: px2rem(34px);
			border: 1px solid #f60;
			border-radius: px2rem(34px);
			margin-left: px2rem(20px);	
			color: #f60;		
		}
	}
	}
	#wlybody{
		
		margin-top: px2rem(10px);
		background-color: #fff;
		width: 100%;
		.wlyb1{
			
			padding-right: 10%;
			height: px2rem(45px);
			margin-left: px2rem(20px);
			font-size: px2rem(16px);
			line-height: px2rem(45px);
			color:#333;
			span{
				float: right;
	
			}
		}
		.wlyb2{
			.wlyb21{
				height: px2rem(44px);
				font-size: px2rem(14px);
				line-height: px2rem(44px);
				padding-left: px2rem(20px);
				span{
					margin-right: px2rem(10px);
					color: #666;
				}
			}
			.wlyb22{
				height: px2rem(44px);
				font-size: px2rem(14px);
				line-height: px2rem(44px);
				padding-left: px2rem(20px);
				span{
					margin-right: px2rem(10px);
					color: #666;
				}
			}
			.wlyb23{
				height: px2rem(44px);
				font-size: px2rem(14px);
				line-height: px2rem(44px);
				padding-left: px2rem(20px);
				span{
					margin-right: px2rem(10px);
					color: #666;
				}
			}
			.wlyb24{
				height: px2rem(44px);
				font-size: px2rem(14px);
				line-height: px2rem(44px);
				padding-left: px2rem(20px);
				width: px2rem(355px);
				white-space: nowrap;
				overflow: hidden;
				text-overflow:ellipsis;
				span{
					// margin-right: px2rem(5px);
					color: #666;
				}
			}
		}
	}
	#wlysai{
		height: px2rem(44px);
		font-size: px2rem(16px);
		line-height: px2rem(44px);
		padding-left: px2rem(20px);
		background-color: #fff;
		margin: px2rem(10px) 0;
		color: #000;
		font-weight: 100;
		span{
			float: right;
			margin-right: px2rem(10px);
			color: #666;
		}	
	}
	#wlyfooter{
		width: px2rem(375px);
		height: px2rem(50px);
		position: fixed;
		bottom: 0;
		left: 0;
		text-align: center;
		line-height: px2rem(50px);
		background-color: #f60;
		color: #fff;
		font-size: px2rem(20px);
	}
	#wlyping{
		.wlyp1{
			height: px2rem(44px);
			font-size: px2rem(16px);
			line-height: px2rem(44px);
			padding-left: px2rem(20px);
			background-color: #fff;
			margin: px2rem(10px) 0;
			color: #000;
			font-weight: 100;	
			color: #aaa;	
		}
		.wlyp2{
			height: px2rem(44px);
			font-size: px2rem(16px);
			line-height: px2rem(44px);
			padding-left: px2rem(20px);
			background-color: #fff;
			margin: px2rem(10px) 0;
			color: #000;
			font-weight: 100;		
			color: #aaa;
		}
		.wlyp3{
			height: px2rem(102px);
			font-size: px2rem(16px);
			line-height: px2rem(44px);
			padding-left: px2rem(20px);
			background-color: #fff;
			margin: px2rem(10px) 0;
			color: #000;
			font-weight: 100;
			color: #aaa;
			span{
				width: px2rem(75px);
				height: px2rem(28px);
				float: right;
				border:1px solid #ccc;
				border-radius: px2rem(14px);
				line-height: px2rem(28px);
				text-align: center;
				margin-top: px2rem(10px);
			}
			p{
				text-align: center;
				line-height: px2rem(20px);
				color: #ccc;
				font-size: px2rem(12px);
			}
	
		}
		.wlyp4{
			height: px2rem(44px);
			font-size: px2rem(16px);
			line-height: px2rem(44px);
			padding-left: px2rem(20px);
			background-color: #fff;
			margin: px2rem(10px) 0;
			color: #000;
			font-weight: 100;
			color: #aaa;		
		}
		.wlyp5{
			height: px2rem(44px);
			font-size: px2rem(16px);
			line-height: px2rem(44px);
			padding-left: px2rem(20px);
			background-color: #fff;
			margin: px2rem(10px) 0;
			color: #000;
			font-weight: 100;
			color: #aaa;		
		}
		.wlyp6{
			height: px2rem(44px);
					
		}
	}
}
</style>