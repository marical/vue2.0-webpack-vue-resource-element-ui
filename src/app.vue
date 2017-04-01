<template>
	<div id='app'>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
export default {
	  name: 'app',
	  data () {
	    return {
	
	    }
	  },
	  created:function(){
	       this.$router.push('view'); // 页面加载时跳转
	  }
}
</script>

<style lang="stylus">
@import "./assets/css/editor.css"
@import "./assets/css/common.css"
@import "./assets/js/highlight/default.css"
</style>