<script>
export default {
    name:'rate',
    data(){
        return{
            val:3
        }
    }
}
</script>
<template>
    <div class="container">
        <p>RATE 星星评分：</p>
        <i>当前得分：{{val}}颗星</i>
        <Rate 
        size="large" 
        :max="10" 
        v-model="val"
        margin="5"
        
        ></Rate>
    </div>
</template>
