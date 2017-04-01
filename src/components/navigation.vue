<template>
	<div class="wrap">
		<div title="资源导航" class="navigation">
			<h3 class="resource">资源导航</h3>
	    </div>
	    <div class="wrap_body">
	    	<p class="doclist" v-for="item in apiList"><a :href='item.url'  target="_blank">{{item.title}}</a></p>
	    </div>
    </div>
</template>

<script>
	export default{
		name:'navigation',
		data(){
			return{
				apiList: {}
			}
		},
		mounted(){
			this.$http({
            url: "../src/api/navigation.json",
            method: 'GET'
	        })
	        .then(data => {
	            this.apiList = data.body.item;
	        })
		}
	}
</script>

<style>
.wrap{
	width: 800px;
    margin: 0px auto;
    border: 1px solid #d9d9d9;
    border-color: #e9e9e9;
    background: #fff;
    border-radius: 4px;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    -webkit-transition: all .3s;
    transition: all .3s;
	}
		
.navigation{
	height: 48px;
    line-height: 48px;
    border-bottom: 1px solid #e9e9e9;
    padding: 0 24px;
}

.wrap_body{
	    padding: 24px;
}

.animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
	}
	
.doclist {
    line-height: 40px;
}
</style>