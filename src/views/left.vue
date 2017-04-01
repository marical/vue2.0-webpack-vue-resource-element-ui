<template>
    <div class="sidebar">
        <div class="logo" @click="clickFn"><img src="../assets/images/logo.png" alt="" /></div>
        <div class="api-list">
            <el-row class="tac">
                <el-col :span="24">
                    <el-menu class="el-menu-vertical-demo" theme="dark" :router="true" :uniqueOpened="true">
                    	<el-submenu index="1">
                    		<template slot="title"><i class="el-icon-message"></i>导航一</template>
                    		<el-menu-item index="table">表格</el-menu-item>
                    		<el-menu-item index="form">表单</el-menu-item>
                    		<el-menu-item index="chart">图表</el-menu-item>
                    		<el-menu-item index="calendars">日历</el-menu-item>
                    	</el-submenu>
                    	<el-submenu index="2">
                    		<template slot="title"><i class="el-icon-menu"></i>导航二</template>
                    		<el-menu-item index="navigation">导航</el-menu-item>
                    		<el-menu-item index="follow">关注</el-menu-item>
                    	</el-submenu>
                        <!--<el-submenu :index="key" v-for="(value, key) in apiList">
                            <template slot="title"><i class="el-icon-document"></i>{{ key }}</template>
                            <el-menu-item :index="'/api/' + item.value" v-for="item in value">{{ item.label }}</el-menu-item>
                        </el-submenu>-->
                    </el-menu>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
        }
    },
   	methods:{
   		clickFn () {
    		this.$router.push({path:'/view'})
    	}
   }
}
</script>

<style scoped>
.sidebar {
    width: 260px;
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: #324057;
    box-shadow: 5px 0 5px #ccc;
    z-index: 102;
    overflow-x: hidden;
}

.logo {
    height: 120px;
}
.logo img{
	height: 100%;
	background-size: 100%;
	margin-left: 25%;
}
.logo:hover {
    cursor: pointer;
}
</style>