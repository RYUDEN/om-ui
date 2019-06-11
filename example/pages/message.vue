<template>
    <div 
    class="container page-message"
    style="padding-top:'100px'">
        <OMButton full @click="showMsg()">普通通知</OMButton>
        <OMButton full  @click="showMsg('success')">成功通知</OMButton>
        <OMButton full  @click="showMsg('warn')">警告通知</OMButton>
        <OMButton full  @click="showMsg('error')">错误通知</OMButton>
    </div>
</template>
<script>
export default {
    name:'message',
    methods:{
        showMsg(type){
            this.$message({
                value:type,
                icon:'smile',
                type:type
            })
        },
    }
}
</script>
<style lang="stylus" scoped>
.page-message
    padding-top 50px
    height 200px
    display flex 
    flex-direction column
    justify-content space-between
</style>

