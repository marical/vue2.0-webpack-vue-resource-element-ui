<template>
    <el-card class="box-card h100">
        <div slot="header" class="clearfix">
            <span style="line-height: 36px;">首页</span>
        </div>
        <div class="text item h100">
            <div class="content">
                <p>♪♫ 欢迎使用API接口管理系统 ♬♪</p>
                <div>
                    本系统使用markdown语法进行API文档编写，详细语法请访问：<a href="http://wowubuntu.com/markdown/" target="_blank">链接</a>。
                    常用语法如下：
                </div>
                <table class="table-box">
                    <thead>
                        <tr>
                            <th>Markdown</th>
                            <th>结果</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td># 标题</td>
                            <td>H1</td>
                        </tr>
                        <tr>
                            <td>## 标题</td>
                            <td>H2</td>
                        </tr>
                        <tr>
                            <td>### 标题</td>
                            <td>H3</td>
                        </tr>
                        <tr>
                            <td>**文本**</td>
                            <td>粗体</td>
                        </tr>
                        <tr>
                            <td>[描述](http://)</td>
                            <td>链接</td>
                        </tr>
                        <tr>
                            <td>`code`</td>
                            <td>Inline Code</td>
                        </tr>
                        <tr>
                            <td>```code```</td>
                            <td>Code</td>
                        </tr>
                        <tr>
                            <td>![alt](http://)</td>
                            <td>图片</td>
                        </tr>
                        <tr>
                            <td>* item</td>
                            <td>列表</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </el-card>
</template>

<script>
    
</script>

<style scoped>
.h100 {
    height: 100%;
}

.content {
    max-width: 800px;
    margin: 0 auto;
    padding-top: 50px;
    text-align: center;
}

.content p {
    font-size: 24px;
}

.table-box {
    margin-top: 40px;
}
</style>