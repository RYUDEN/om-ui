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
        },
        clear:Boolean,
        title:{
            default:'',
            type:String
        },
        max:String
    },
    methods:{
        handleInput(e){
            if(e.target.value.length>parseInt(this.max)){
                e.target.value = this.value
                return 
            }
            this.value = e.target.value;
            this.$emit('input',e.target.value);
            this.$emit('require')
        },
        clearInput(){
            this.value = '',
            this.$emit('input','')
        },
        handleRequire(){
            this.$emit('require')
        }
    }
}
</script>
<template>
    <div class="om-input"
    >
        <div 
        class="om-input__title"
        :style="{color:error?'red':''}"
        v-if="title"
        >{{title}}</div>
        <div class="om-input--main">
            <div class="om-input--main__error">{{error}}</div>
            <input 
            class="om-input--main__main"
            :type="type" 
            :placeholder="error?'':placeholder"
            :value="value"
            @input="handleInput"
            @blur="handleRequire"
            >
            <div 
            class="om-input--main__clear" 
            v-if="clear"
            @click="clearInput"
            >
                <i class="iconfont icon-close-circle"></i>
            </div>
        </div>
        <div class="om-input__child" v-if="$slots.default">
            <slot></slot>
        </div>
    </div>
</template>