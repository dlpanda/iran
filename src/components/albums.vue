<template>
	<div id="albums">
		<header>
			<router-link to="/results" tag="i" activeClass="active" class="left">return</router-link>
			<!-- <i class="left">return</i> -->
			<div class="center">最新照片</div>
		</header><!-- /header -->
		<div class="all">
			<div class="nav">
				<div class="top">
					<div class="one">
						<img src="http://pic2.iranshao.com/photo/image/a5btcekya4ydgqfrhikotioi90t6s9k9.jpg!320x320">
					</div>
					<div class="two">
						<img src="http://pic2.iranshao.com/photo/image/fb5jpeei0b18xgvim656buma3muqh0k9.jpg!320x320" alt="">
					</div>
					<div class="three">
						<img src="http://pic2.iranshao.com/photo/image/spg4aclqquk81tt9gdc0pvzim06kcsor.jpg!320x320" alt="">
					</div>
					<div class="four">
						<img src="http://pic2.iranshao.com/photo/image/y7lb80dsxrzlg14i2ltst3df9w0l766r.jpg!320x320" alt="">
					</div>
					<div class="five">
						<img src="http://pic2.iranshao.com/photo/image/etfihc1yp4xwdn29zxf5yfgacc9v0a4i.jpg!320x320" alt="">
					</div>
				</div>
				<div class="center">
					第二届宁波小港葡萄山地马拉松
				</div>
				<div class="bottom">
					更新时间：21分钟前
				</div>
				
			</div>
		</div>
	</div>
</template>



<script>
	export default{
		
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
	#albums {
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
		}
	}
</style>