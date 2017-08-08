<template>
	<div>
		<header>
			<span class="left">
				导航
			</span>
			<span class="mid">
				爱燃烧
			</span>
			<span class="right">
				我的
			</span>
		</header>
		<main>
			<div class="top">
				<img src="http://pic.iranshao.com/photo/image/e64c7c72ba3820c597a04386761c07f1.png">
				<h1>爱燃烧 —「运动不止于梦想」</h1>
			</div>
			<div class="next">
				<input type="text" placeholder="请输入手机号码或邮箱" id="te"  v-on:input="OnInput ()"/>
				<input type="text" placeholder="短信验证码" id="check">
				<input type="button" value="点击获取" id="get">
				<input type="password" placeholder="请输入密码，不少于8位" id="password"/>
				<input type="button" value="登录/注册" id="login"/>
				<input type="button" value="登录" id="login1"/>
				<input type="button" value="注册" id="login2" @click="getTel()" />
				<p>忘记密码？</p>	
				<div class="clear"></div>	
			</div>	
		</main>
	</div>
</template>

<script>
	export default{
		 data(){
		    //在组件化开发中 data必须势函数， 返回值才是我们定义的所有状态值
		    return {
		      currentview:'home'
		    }
		  },
		  methods:{
		    getTel(){
		    	var telVal = document.getElementById("te").value;
		        console.log(telVal+1);
		    },
		    OnInput(){
            	var teVal = document.getElementById("te").value;
            	var filterEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            	var filterTel = /^1[34578]\d{9}$/;
            	if(filterEmail.test(teVal) || filterTel.test(teVal)){
            		console.log("合格");
            	}
       		}
		  }
	}
</script>

<style scoped lang="scss">
$ui-width: 750px;
@function px2rem($px) {
    @return $px/$ui-width*7.5rem;
}

.clear{
	clear:both;
}
header{
	position:relative;
	height:px2rem(50px);
	width:100%;
	border-bottom:1px #ccc solid;
	font-size:px2rem(16px);
	line-height:50px;
	.left{
		position: absolute;
		top:0px;
		left:px2rem(20px);
		height:50px;
	}
	.mid{
		display: block;
		text-align:center;
		width:100%;
		height:px2rem(50px);
	}
	.right{
		position:absolute;
		top:0px;
		right:px2rem(20px);
		height:px2rem(50px);
	}
}
main{
	padding-bottom:px2rem(20px);
	font-size:px2rem(16px);
	margin-top:px2rem(20px);
	width:100%;
	border-top:1px #ccc solid;
	border-bottom:1px #ccc solid;
	.top{
		width:100%;
		text-align:center;
		font-size:px2rem(16px);
		margin-top:px2rem(50px);
		img{

		}
		h1{
			font-size: px2rem(14px);
			font-weight: normal;
			margin-top:px2rem(14px);
		}
	}
	.next{
		width:80%;
		margin:0 auto;
		margin-top:px2rem(60px);
		input{
			width:100%;
			margin-top:px2rem(20px);
			height:px2rem(34px);
			background: #fbeeb3;
			display:block;
    		border: 1px solid #ccc;
    		text-indent: px2rem(10px);
		}
		#check{
			width:70%;
			box-sizing: border-box;
			display:inline-block;
		}
		#get{
			width:30%;
			display:inline-block;
			background:#ededed;
    		text-indent: px2rem(0px);
			margin-left:px2rem(-8px);
		}
		#login{
			border:none;
			font-size: 16px;
			color:#fff;
			background:#fc3b00;
		}
		#login1{
			border:none;
			font-size: 16px;
			color:#fff;
			background:#fc3b00;
		}
		#login2{
			border:none;
			font-size: 16px;
			color:#fff;
			background:#fc3b00;
		}
		p{
			font-size: px2rem(13px);
			margin-top:px2rem(5px);
			color:#00befc;
			float: right;
		}
	}
}
</style>