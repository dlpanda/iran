<template>
	<div id="results">
		<header>
			<router-link to="/" tag="i" activeClass="active" class="left">return</router-link>
			<!-- <i class="left">return</i> -->
			<div class="center">成绩照片认领</div>
			<router-link to="/search" tag="i" activeClass="active" class="right">search</router-link>
			<!--<i class="right">search</i>-->
		</header><!-- /header -->
		<div  class="phone">最新照片</div>
		<mt-loadmore :top-method="loadTop" ref="loadmore">
			<div class="all" >
				<div class="nav" v-for="(data,index) in looplist" :key="new Date().getTime()+index+100">
					<div class="top">
						<div class="one">
							<img src="http://pic2.iranshao.com/photo/image/yw0oqf7uyalpn6ceoohku.JPG!320x320">
						</div>
						<div class="two">
							<img src="http://pic2.iranshao.com/photo/image/h7j7v9174zshe9cdfgnu9n.JPG!320x320" alt="">
						</div>
						<div class="three">
							<img src="http://pic2.iranshao.com/photo/image/xwgj8g0a25l3uijdfkfl94.JPG!320x320" alt="">
						</div>
						<div class="four">
							<img src="http://pic2.iranshao.com/photo/image/v7xq30ahmtwj01ubnbful.JPG!320x320" alt="">
						</div>
						<div class="five">
							<img src="http://pic2.iranshao.com/photo/image/9ytxbpxneckcd9w2tgftc.JPG!320x320" alt="">
						</div>
					</div>
					<div class="center">
						{{data.albums[0].race.name}}
					</div>
					<div class="bottom">
						更新时间：21分钟前
					</div>
					
				</div>
				<router-link to="/results/albums" tag="div" activeClass="active" class="check-all">查看全部</router-link>
			</div>
		</mt-loadmore>
		<div class="con" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading"  infinite-scroll-immediate-check="false" infinite-scroll-distance="0">
			<div class="top">
				最新成绩
			</div>
			<div class="center" v-for="(data,index) in datalist" :key="new Date().getTime()+index">
				<div class="left">
					<img :src="data.cover">
				</div>
				<div class="right">
					<div class="right-top">
						{{data.name}}
					</div>
					<div class="right-center">
						<span class="time">{{data.start_at}}</span>
						<span class="province">{{data.location}}</span>
					</div>
					<div class="right-bottom">
						<span class="grade">成绩</span>
						<span class="grade">证书</span>
					</div>
				</div>
			</div>
		</div>

		<router-view></router-view>
	</div>
</template>



<script>
import router from "../router"; //router 路由控制器	
import { Indicator } from 'mint-ui';
	export default{
		data(){
			return {
				looplist:[],
				datalist:[],
				loading:false,
				current:1,
				
			}
		},
		mounted(){
			Indicator.open('加载中...');
			axios.get("/api/photo").then(res=>{
				console.log(res.data);
				console.log(res.data.data.races);
				this.looplist = res.data;
				this.datalist = res.data.data.races;
				Indicator.close();
			})


			this.scrollfunc = function(){
				console.log('scroll');
			}
			window.addEventListener('scroll',this.scrollfunc)
		},
		beforeDestory(){
			window.removeEventListener('scroll',this.scrollfunc)
		},
		methods:{
			loadTop(){
				console.log('下拉刷新，请求数据');

				setTimeout(()=>{
					this.$refs.loadmore.onTopLoaded();
				},2000)

			},


			loadMore(){
				console.log('滚动到底部');

				this.current++;

				axios.get('/api/photo').then(res=>{
					this.datalist = [...this.datalist,...res.data.data.races]
				})
			}
		}
	}
</script>


<style scoped lang="scss">
	$ui-width: 750px;
	@function px2rem($px) {
	    @return $px/$ui-width*7.5rem;
	}
	html {
		height: 100%;
		width: 100%;
		overflow: scroll;
	}

	ul{
		list-style: none;
	}
	img{
		display: block;
		border: none;
	}
	#results{
		font-size:px2rem(16px);
		header{
			width: 100%;
			height: px2rem(44px);
			border-bottom: 1px solid #f8f8f9;
			.left{
				width: px2rem(40px);
				height: px2rem(44px);
				line-height: px2rem(44px);
				background: red;
				float: left;
				margin-left: px2rem(10px);
			}
			.center{
				float: left;
				line-height: px2rem(44px);
				padding: 0 px2rem(80px);
			}
			.right{
				width: px2rem(50px);
				height: px2rem(44px);
				line-height: px2rem(44px);
				background: red;
				float: left;
				margin-right: px2rem(10px);
			}
		}
		.phone{
			height: px2rem(53px);
			line-height: px2rem(70px);
			border-bottom: 1px solid #f8f8f9;
			padding: 0 px2rem(10px);
			font-weight: bold;
		}
		.all {
			.nav{
				width: 100%;
				box-sizing: border-box;
				padding: px2rem(10px);
				border-bottom: 1px solid #f8f8f9;
				.top {
					width: 100%;
					padding-top: px2rem(20px);
					padding-bottom: px2rem(10px);
					height: px2rem(178px);
					.one {
						float: left;
						width: 50%;

						img {
							width: 100%;
						}
					}
					.two {
						float: right;
						width: 25%;
						img {
							width: 100%;
						}
					}
					.three {
						float: left;
						width: 25%;
						img {
							width: 100%;
						}
					}
					.four {
						float: left;
						width: 25%;

						img {
							width: 100%;
						}
					}
					.five {
						float: left;
						width: 25%;

						img {
							width: 100%;
						}
					}
				}
				.center {
					clear: both;
					font-size: px2rem(15px);
					font-weight: bold;
				}
				.bottom {
					clear: both;
					font-size: px2rem(13px);
					color: #ababab;
				}
			}
			.check-all {
				height: px2rem(43px);
				line-height: px2rem(43px);
				text-align: center;
				color: #ff5000;
				border-bottom: 5px solid #ccc;
			}
		}
		.con {
			// position: relative;
			.top {
				height: px2rem(53px);
				line-height: px2rem(70px);
				border-bottom: 1px solid #f8f8f9;
				padding: 0 px2rem(10px);
				font-weight: bold;
			}
			.center {
				border-bottom: 1px solid #f8f8f9;
				padding: px2rem(20px) px2rem(10px);
				// position: absolute;
				// top: px2rem(75px);
				// left: px2rem(10px);
				.left {
					width: px2rem(60px);
					height: px2rem(60px);
					// position: absolute;
					// top: 0;
					// bottom: 0;
					// left: 0;
					// right: 0;
					float: left;
					padding-right: px2rem(5px);
					img {
						width: 100%;
						border-radius: px2rem(5px);
						
					}
				}
				.right {
					width: px2rem(250px);
					padding-left: px2rem(65px);
					.right-top {
						overflow: hidden;
						width: px2rem(250px);
						white-space: nowrap;
						text-overflow: ellipsis;
					}
					.right-center {
						overflow: hidden;
						width: px2rem(250px);
						white-space: nowrap;
						text-overflow: ellipsis;
						color: #898989;
						font-size: px2rem(14px);
						.time {
							margin-right: px2rem(10px);
							display:inline-block;
							width: px2rem(80px);
							overflow: hidden;
							margin-top: px2rem(5px);
						}
						.province {
							display: inline-block;
							overflow: hidden;
							width: px2rem(150px);
							white-space: nowrap;
							text-overflow: ellipsis;
						}

					}
					.right-bottom {
						.grade {
							display: inline-block;
							width: px2rem(40px);
							height: px2rem(16px);
							line-height: px2rem(16px);
							text-align: center;
							background: #ebeff1;
							color: #304269;
							border-radius: px2rem(5px);
							font-size: px2rem(12px);
							margin-right: px2rem(3px);
						}
					}
				}
			}
		}

	}
</style>