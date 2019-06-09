<script>
export default {
    name:'OMButton',
    props:{
      type:{
        type:String,
        default:'primary'
      },
      outline:Boolean,
      size:String,
      circle:Boolean,
      full:Boolean,
      loading:Boolean,
      disabled:Boolean
    },
    methods:{
      handleClick(evt){
         this.$emit('click', evt);
      }
    }
}
</script>
<template>
    <button
      class="om-button"
      @click="handleClick"
      :disabled="disabled||loading"
      :class="[
       type? 'om-button--'+type:'',
       size?'om-button--'+size:'',
       {
         'is-disabled':disabled,
         'is-loading':loading,
         'is-circle': circle,
         'is-full':full,
         'outline':outline
       }
      ]"
    >
      
        <span  class="loading-ico iconfont icon-sync"  v-if="loading">
          
        </span>
      <!-- <img src="spinnerr.svg" alt=""> -->
      <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>
