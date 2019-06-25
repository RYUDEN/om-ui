<script>
export default {
    name:'ominput',
    data(){
        return {
            value:'',
            error:''
        }
    },
    methods:{
        print(){
            console.log(this.value)
        },
        handleRequire(){
            if(!this.value){
                this.error = '请填写'
            }else{
                this.error = ''
            }
        }
    }
}
</script>
<template>
    <div class="container">
        <OMInput
        placeholder="OM输入框" 
        v-model="value"
        title="姓名"
        :error="error"
        max="10"
        clear
        @require="handleRequire"
        >
        <OMButton size="small" outline><Icon value="send"/>发送</OMButton>
        </OMInput> 
        <OMButton
        style="margin-top:20px;"
        @click="print">打印输入框内容</OMButton>
    </div>
</template>

