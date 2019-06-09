<script>
export default {
    name:'Modal',
    data(){
        return{
            visible: true,
            title:'标题',
            content: 'officemate\r\n',
            onCancel: null,
            onConfirm:null,
            showCancel: true,
            closed: false,
            UseHTMLString: false,
        }
    },
    watch: {
      closed(newVal) {
        if (newVal) {
          this.visible = false;
        }
      }
    },
    methods:{
        handleAfterLeave(){
            this.$destroy(true);
            this.$el.parentNode.removeChild(this.$el);
        },
        close() {
            this.closed = true;
            if (typeof this.onCancel === 'function') {
                this.onCancel(this);
            }
        },
        confirm() {
            this.closed = true;
            if (typeof this.onConfirm === 'function') {
            this.onConfirm(this);
            }
        }
    }
}
</script>
<template >
    <transition name="fade" @after-leave="handleAfterLeave">  
        <div 
        class="em-modal"
        v-show="visible"
        >
            <div class="om-mask"></div>
            <div
            class="em-modal--container"
            >
                <div class="em-modal--header">
                    {{title}}
                </div>
                <div class="em-modal--body">
                    <slot>
                        <p v-if="!UseHTMLString">{{content}}</p>
                        <p v-else v-html="content"></p>
                    </slot>
                </div>
                <div class="em-modal--footer">
                    <div v-if="showCancel"
                     class="em-modal--footer__btn cancel"
                     @click="close"
                     >取消</div>
                    <div 
                     class="em-modal--footer__btn confirm"
                     @click="confirm">确定</div>
                </div>
            </div>
        </div>
    </transition>
</template>