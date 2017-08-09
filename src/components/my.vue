<template>
	<div>
		<header>
			<span class="left">
				返回
			</span>
			<span class="mid">
				账户设置
			</span>
		</header>
		<main>
			<div class="emali">
				<p>邮箱</p>
				<span class="e">906772005@qq.com</span><b class="change">更换邮箱</b>
			</div>
			<div class="name">
				<p>昵称</p>
				<input type="text" id="name"/><br/>
			</div>
			<div class="add">
				<p>地址</p>
				<input type="text" id="add"/><br/>
			</div>
			<div class="autograph">
				<p>签名</p>
				<textarea name="" id="autograph"></textarea>
			</div>
			<div class="head">
				<p>默认头像</p>
				<img src="" alt="未设置">
			</div>
			<div class="file">
				<input type="file">
			</div>
			<input type="button" id="click" value="更新">
		</main>
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
		font-weight: bold;
		color:#fc3b00;
		display: block;
		text-align:center;
		width:100%;
		height:px2rem(50px);
	}
}
main{
	height:px2rem(617px);
	background:#f3f2f6;
	width:100%;
	padding-bottom:px2rem(20px);
	font-size:px2rem(16px);
	padding:px2rem(15px) px2rem(10px);
	box-sizing:border-box;
	div{
		p{
			margin-bottom:px2rem(5px);
			font-weight: bold;
		}
		input{
			width:100%;
			border:1px #ccc solid;
			height:px2rem(30px);
			line-height:px2rem(30px);
		}
		width:95%;
		margin:0 auto;
		border-bottom:1px solid #ccc;
		margin-top: px2rem(10px);
		padding-bottom:px2rem(10px);
	}
	.emali{
		.change{
			display:inline-block;
			margin-left:px2rem(10px);
			color:blue;
		}
	}
	.autograph{
		textarea{
			width:100%;
			border:1px solid #ccc;
			height:px2rem(60px);
		}
	}
	.file{
		input{background:#fff;}
	}
	#click{
		width:100%;
		height:px2rem(69px);
		background:#fc3b00;
		height:px2rem(40px);
		color:#fff;
		font-size: px2rem(16px);
	}
	img{
		width:px2rem(80px);
		height:px2rem(80px);
	}
}
</style>