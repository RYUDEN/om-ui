<script>
export default {
    name:'pageSwitch',data(){
        return {
            checked:false
        }
    }
}
</script>
<template>
    <div class="container">
        <p>switch:</p>
        <div class="switch">
        <span>当前状态：{{checked?"已打开":"已关闭"}}</span>
        <OMSwitch
        v-model="checked"
        ></OMSwitch></div>
    </div>
</template>
<style scoped>
.switch
{
    display: flex;
    justify-content: space-between;
}
.switch span {
    line-height: 100%;
    height: 100%;
    display: block;
}
</style>
