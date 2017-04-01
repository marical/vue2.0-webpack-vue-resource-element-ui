<template>
	<div class="right-box h100 el-card">
		<div class="ani-box" @click="jump">
	        <img src="../assets/images/face.jpg" width="100" class="animated fadeInUp lastPic" />
	        <span class="animated flipInX ege">我的头像</span>
	    </div>
    </div>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		},
		methods:{
			jump:function(){
				window.location.href="http://www.cnblogs.com/zhuyijun/"
			}
		}
	}
</script>

<style>
.right-box {
    left: 0;
    box-sizing: border-box;
    padding: 20px 20px 0;
    position: absolute;
    right: 0;
    bottom: 0;
    overflow-y: auto;
}
.ani-box {
    text-align: center;
    cursor: pointer;
}
.lastPic {
    display: block;
    margin: 16% auto 0;
    border-style: none;
}
.animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}
</style>