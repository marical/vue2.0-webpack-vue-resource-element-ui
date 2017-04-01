<template>
    <div class="main">
        <left></left>
       	<right></right>
    </div>
</template>

<script>
import left from './left.vue'
import right from './right.vue'

export default {
    data () {
        return {
           
        }
    },
    methods: {
       
    },
    components: {
        left,
        right
    }
}
</script>

<style>
.right-view {
    width: auto;
    position: absolute !important;
    top: 0;
    left: 260px;
    bottom: 0;
    right: 0;
    overflow: hidden;
    overflow-y: auto;
    background-color: #f5f5f5;
}

.right-main {
    width: auto;
    position: absolute;
    top: -10px;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 20px;
    overflow: hidden;
    overflow-y: auto;
    background-color: #f5f5f5;
}

.el-loading-mask {
    background-color: rgba(0, 0, 0, 0.28) !important;
}
</style>