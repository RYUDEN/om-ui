<script>
export default {
    name:'Toast',
    data(){
        return{
            visible: true,
            closed:false,
            value:'',
            icon:'',
            duration:2000,
            mask:false
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
        },
        masktouch(e){
            console.log(e)
        }
    }
}
</script>
<template >
    <transition name="fade" @after-leave="handleAfterLeave">  
        <div 
        class="om-toast"
        v-show="visible"
        >
            <div 
             class="om-toast--mask"
             v-if="mask"
             @touchmove.prevent.stop="masktouch"
            ></div>
            <div class="om-toast--body">
                <div class="om-toast--img" v-if="icon">
                    <i :class="['iconfont',icon?'icon-'+icon:'']"></i>
                </div>
                <p class="om-toast--content">{{value}}</p>
            </div>
        </div>
    </transition>
</template>