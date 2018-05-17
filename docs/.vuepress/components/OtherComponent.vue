<template>
    <div>
        <div class="hello">{{ message }}</div>
        <el-button>默认按钮</el-button>
    </div>
</template>
<script>
export default {
    name: 'OtherComponent',
    data(){
        return {
            message: "search"
        }
    }
}
</script>
<style lang="stylus">
    div
        .hello
            color : red
     
</style>
