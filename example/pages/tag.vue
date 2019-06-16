<template>
    <div class="container">
        <p>tags标签</p>
        <EmTag
        class="tags"
        v-for="(i,k) in tags"
        :key="`outline_${k}`"
        :checked="i.checked"
        :value="i.value"
        @click="handleClick(k)"
        />
        <p>tags标签 cicle</p>
        <EmTag
        class="tags"
        v-for="(i,k) in tags"
        :key="`cycle_${k}`"
        :checked="i.checked"
        :value="i.value"
        cycle
        @click="handleClick(k)"
        />
        <p>tags标签 primary</p>
        <EmTag
        class="tags"
        v-for="(i,k) in tags"
        :key="`primary_${k}`"
        :checked="i.checked"
        :value="i.value"
        primary
        @click="handleClick(k)"
        />
    </div>
    
</template>
<script>
export default {
    name:'Tag',
    data(){
        return {
            tags:[
                {checked:false,value:'VUEJS'},
                {checked:false,value:'JAVASCRIPT'},
                {checked:false,value:'TYPESCRIPT'},
                {checked:false,value:'NODEJS'},
                {checked:false,value:'ANGULAR'}
            ]
        }
    },
    methods:{
        handleClick(k){
            this.tags[k].checked = !this.tags[k].checked
        }
    }
}
</script>
<style scoped>
.tags
{
    margin: 5px;
}
</style>

