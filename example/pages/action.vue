<template>
  <div>
    <h1 class="ac lg">om-ui</h1>
  
    <div class="container">
      <p>actionsheet动作面板</p>
      <OMButton
      @click="ActionSheetOn"
      >打开动作面吧</OMButton>
      <ActionSheet
      @close="ActionSheetOff"
      :status="ActionSheetStatus"
      :title="ActionSheetTitle"
      >
        <ActionSheetItem @click="ActionSheetClick">选项一</ActionSheetItem> 
        <ActionSheetItem @click="ActionSheetClick">选项二</ActionSheetItem> 
        <ActionSheetItem @click="ActionSheetClick">选项三</ActionSheetItem> 
      </ActionSheet>
    </div>
  </div>
</template>

<script>

export default {
  name: 'action',
  data(){
    return{
      Curtainshow:false,
      LoadMoreStatus:'more',
      LoadMoreValues:[
        '查看更多详情',
        '正在加载，请稍等...',
        '抱歉，没有找到资源'
      ],
      ActionSheetStatus:false,
      ActionSheetTitle:'actionsheet动作组件'
    }
  },
  methods:{
    curtainClose(){
      this.Curtainshow = false
    },
    curtainDisplay(){
      this.Curtainshow = true
    },
    loadMore(){
      this.LoadMoreStatus = 'loading',
      setTimeout(()=>{
        this.LoadMoreStatus = 'nomore'
      },1500)
    },
    ActionSheetOn(){
      this.ActionSheetStatus = true
    },
    ActionSheetOff(){
      this.ActionSheetStatus = false
    },
    ActionSheetClick(){
      console.log('ActionSheetClick')
    },
    Modalon(){
      this.$modal({
        title:'标题',
        content: '<h1>这里使用了HTML片段<h1><h2>这里使用了HTML片段<h2>',
        UseHTMLString:true,
        onCancel:()=>{console.log('取消了')},
        onConfirm:()=>{console.log('确认了')}
      })
    },
    Toaston(){
      this.$toast({
        value:'toast轻提示',
        icon:'smile',
        mask:true
      })
    }
  }
}
</script>