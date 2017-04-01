<template>
     <div class="right-view">
            <div class="right-main">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </div>
        </div>
</template>

<script>
export default {
   
}
</script>

<style scoped>
.h100 {
    height: 100%;
}

.content {
    max-width: 800px;
    margin: 0 auto;
}

.scroll {
    overflow: auto;
}
</style>