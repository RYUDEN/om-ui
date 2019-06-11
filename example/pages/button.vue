<template>
  <div >
    <h1 class="ac lg">om-ui</h1>
    <div class="container">
      <p>按钮样式：</p>
      <OMButton
      loading
      >默认</OMButton>
      <OMButton
        circle
      >圆角</OMButton>
      <OMButton
        outline
        size="small"
      >按钮</OMButton>
      <OMButton
        loading
        outline
        size="large"
      >加载中</OMButton>
      <OMButton
        disabled
      >不可用</OMButton>
      <br>
      <p></p>
      <OMButton
        full
        @click="showMsg"
      >block展示</OMButton>
      <p></p>
      <OMButton
        type="success"
      >安全操作</OMButton>
      <OMButton
        type="warning"
      >警告提示warning</OMButton>
      <OMButton
        type="danger"
      >危险操作danger</OMButton>
      <p>
        props:{ <br>
          type:['primary','success','warning','danger'],<br>
          outline:[true,false],<br>
          size:['large','small']<br>
          circle:[true,false] <br>
          full:[true,false]  <br>
          loading:[true,false] <br>
          disabled:[true,false] <br>
        }<br>
        events: <br>
        click
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Button',
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
    showMsg(){
      this.$message({
        value:'message',
        icon:'smile'
      })
    },
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