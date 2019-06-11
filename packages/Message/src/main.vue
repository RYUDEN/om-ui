<script>
export default {
    name:'Message',
    data(){
        return{
            visible: true,
            closed:false,
            type:'',
            value:'',
            icon:'',
            duration:2000
        }
    },
    watch: {
      closed(newVal) {
        if (newVal) {
          this.visible = false;
        }
      }
    },
    mounted(){
        setTimeout(()=>{
            this.close()
        },this.duration)
    },
    methods:{
        handleAfterLeave(){
            this.$destroy(true);
            this.$el.parentNode.removeChild(this.$el);
        },
        close(){
            this.closed = true 
        }
    }
}
</script>
<template >
    <transition name="Slide-down" @after-leave="handleAfterLeave">  
        <div 
        :class="['om-message',type?'om-message__'+type:'']"
        v-show="visible"
        >
            <i v-if="icon" :class="['iconfont',icon?'icon-'+icon:'']"></i>
            <span>{{value}}</span>
        </div>
    </transition>
</template>