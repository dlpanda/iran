<template>
	<div id="search">
		<header>
			<router-link to="/results" tag="i" activeClass="active" class="left">return</router-link>
			<!-- <i class="left">return</i> -->
			<div class="center">成绩照片认领</div>
			<router-link to="/search/all" tag="i" activeClass="active" class="right">search</router-link>
			<!--<i class="right">search</i>-->
		</header>

		<router-view>
		</router-view>
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
	#search {
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
	}
</style>