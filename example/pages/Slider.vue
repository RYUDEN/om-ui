<script>
export default {
    name:'slider',
    data(){
        return {
            value:0,
            value2:100
        }
    },
    methods:{
        Print(){
            console.log(this.value)
        },
        Print2(){
            console.log(this.value2)
        }
    }
}
</script>
<template>
    <div class="container">
        <h1>slider</h1>
        <OMSlider
        v-model="value"
        ></OMSlider>
        <OMButton
        style="margin-top:10px"
        @click="Print"
        >
        数值
        </OMButton>
        <p>规定了每一步大小10，最大值200</p>
        <OMSlider
        v-model="value2"
        :max="200"
        :min="100"
        :step="10"
        :content="value2"
        ></OMSlider>
        <OMButton
        style="margin-top:10px"
        @click="Print2"
        >
        数值
        </OMButton>
    </div>
</template>

