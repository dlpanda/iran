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
				<b id="checkB">手机或邮箱格式错误</b>
				<input type="text" placeholder="短信验证码" id="check">
				<input type="button" value="点击获取" id="get">
				<input type="password" placeholder="请输入六位密码" id="password"/>
				<b id="checkPswB">请填写六位密码或验证码</b>
				<b id="loginB">账号或密码错误</b>
				<input type="button" value="登录 / 注册" id="login" @click="first()"/>
				<input type="button" value="登录" id="login1" @click="login()"/>
				<input type="button" value="注册" id="login2" @click="regist()" />
				<p>忘记密码？</p>	
				<div class="clear"></div>	
			</div>	
		</main>
	</div>
</template>

<script>
	export default{
		methods:{
			regist(){
				var telVal = document.getElementById("te").value;
		    	var pswVal = document.getElementById("password").value;
		    	var checkVal = document.getElementById("check").value;
		    	var filterPsw = /^\d{6}$/;
				if(!filterPsw.test(pswVal) || checkVal==""){
            		checkB.style.display= "none";
            		checkPswB.style.display= "block";
            		loginB.style.display= "none";
            	}else{
            		//开始注册
            		console.log("ok");
            		axios.post('/users/regist4ajax',{
						username:telVal,
						psw:pswVal
					}).then((res)=>{
						console.log(res.data);
					 	if(res.data.code==1){
					 		console.log(res.data.code);
					 		alert("注册成功");					 		
							location.href = "/#/my";
					 		// window.location.reload();
							// router.push('/myder');
							return;
							}
						})
            	}
			},
			first(){
				var teVal = document.getElementById("te").value;
				var checkB = document.getElementById("checkB");
				var checkPswB = document.getElementById("checkPswB");
		    	var loginB = document.getElementById("loginB");
            	var filterEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            	var filterTel = /^1[34578]\d{9}$/;
            	if(!filterEmail.test(teVal) || !filterTel.test(teVal)){
            		checkB.style.display= "block";
            		checkPswB.style.display= "none";
            		loginB.style.display= "none";
            	}
			},
		    login(){
		    	var telVal = document.getElementById("te").value;
		    	var pswVal = document.getElementById("password").value;
		    	var loginB = document.getElementById("loginB");
				var checkB = document.getElementById("checkB");
				var checkPswB = document.getElementById("checkPswB");
		    	var filterPsw = /^\d{6}$/;
		    	if(filterPsw.test(pswVal)){
		    		axios.post('/users/login4ajax',{
						username:telVal,
						psw:pswVal
					}).then((res)=>{
					 	if(res.data.code==1){
					 		//登录成功
					 		console.log(res.data.code)
					 		console.log("登录成功跳转");
							location.href = "/home";
							return;
						}
						if(res.data.code==0){
					 		//密码错误
				    		checkB.style.display= "none";
		            		checkPswB.style.display= "none";
		            		loginB.style.display= "block";
						}
					})
		    	}else{
		    		//未填写密码
		    		checkB.style.display= "none";
            		checkPswB.style.display= "none";
            		loginB.style.display= "block";
		    	}
		    },
		    OnInput(){
		    	var elCheck = document.getElementById("check");
		    	var elGet = document.getElementById("get");
		    	var elPsw = document.getElementById("password");
		    	var elLogin = document.getElementById("login");
		    	var elLogin1 = document.getElementById("login1");
		    	var elLogin2 = document.getElementById("login2");
            	var teVal = document.getElementById("te").value;
            	var filterEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            	var filterTel = /^1[34578]\d{9}$/;
            	if(filterEmail.test(teVal) || filterTel.test(teVal)){
            		console.log("合格");
            		var username = document.getElementById("te").value;
            		var psw = document.getElementById("password").value;
            		axios.post('/users/check4ajax',{
						username:username
					}).then((res)=>{
						console.log(res.data);
						if(res.data.code==0){
							//手机号注册了  只显示登录、密码、登录
							elPsw.style.display= "block";
							elLogin.style.display= "none";
							elLogin1.style.display= "block";
						}else{
							//手机号未注册  显示验证码、获取、密码、注册
							elCheck.style.display= "inline-block";
							elGet.style.display= "inline-block";
							elPsw.style.display= "block";
							elLogin.style.display= "none";
							elLogin2.style.display= "block";
						}
					})
            	}else{
            		//格式不对，返回初始样式
					elCheck.style.display= "none";
					elGet.style.display= "none";
					elPsw.style.display= "none";
					elLogin.style.display= "block";
					elLogin1.style.display= "none";
					elLogin2.style.display= "none";
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
		#password{
			display:none;
		}
		#check{
			width:70%;
			box-sizing: border-box;
			display:inline-block;
			display:none;
		}
		#get{
			width:30%;
			display:inline-block;
			background:#ededed;
    		text-indent: px2rem(0px);
			margin-left:px2rem(-8px);
			display:none;
		}
		#login{
			border:none;
			font-size: 16px;
			color:#fff;
			background:#fc3b00;
		}
		#login1{
			display:none;
			border:none;
			font-size: 16px;
			color:#fff;
			background:#fc3b00;
		}
		#login2{
			display:none;
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
		b{
			display:none;
			color:red;
			font-size: px2rem(14px);
		}
	}
}
</style>