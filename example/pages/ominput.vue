<script>
export default {
    name:'ominput',
    data(){
        return {
            value:''
        }
    },
    methods:{
        print(){
            console.log(this.value)
        }
    }
}
</script>
<template>
    <div class="container">
        <OMInput placeholder="OM输入框" v-model="value"/> 
        <OMButton @click="print">打印输入框内容</OMButton>    
    </div>
</template>

