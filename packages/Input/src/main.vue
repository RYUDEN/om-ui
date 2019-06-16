<script>
export default {
    name:'OMInput',
    data(){
        return {
            value:''
        }
    },
    props:{
        placeholder:String,
        type:{
            default:'text',
            type:String
        },
        error:{
            default:'',
            type:String
        }
    },
    methods:{
        handleInput(e){
            this.value = e.target.value;
            this.$emit('input',e.target.value)
        }
    }
}
</script>
<template>
    <div class="om-input"
    >
        <div class="om-input__title"></div>
        <input 
        class="om-input__main"
        :type="type" 
        :placeholder="placeholder"
        :value="value"
        @input="handleInput"
        >

    </div>
</template>