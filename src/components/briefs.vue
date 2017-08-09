<template>
	<div>
		<div id="wlyheader1">
			<span @click="handleClick()">《</span>	
			<!-- {{navlist.name}} -->赛事详情
		</div>
	
		<div id="wlyall1">
			 
			
		</div>
	</div>
</template>



<script>
import router from"../router";
	export default{
		data(){
			return {
				
				playlist:null,
				navlist:null
				
			}
		},	
		mounted(){
			console.log(this.$route.params.myid);
			axios.get(`/api/detail?id=${this.$route.params.myid}`).then(res=>{
				
				this.playlist = res.data.data.race;
				this.navlist= res.data.data.race;
				document.getElementById('wlyall1').innerHTML=this.playlist.detail;
				// this.$store.dispatch("UPDATE_NAME",this.playlist.name);
				
			})
			// console.log(this.mscg)
		},
		methods:{
			handleClick(){
				this.$router.go(-1);
			}
		}		


	}
</script>


<style lang="scss">
$ui-width: 750px;
@function px2rem($px) {
    @return $px/$ui-width*7.5rem;
}
#wlyheader1{
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
	span{
		display: block;
		float: left;
		width: px2rem(40px);
		height: px2rem(46px);
		font-size: px2rem(16px); 
	}
	}
	#wlyall1{
		font-size: 16px;
		img{
			width: px2rem(341px) !important;
			height: px2rem(166px) !important;
		}
	}

</style>