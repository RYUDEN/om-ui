<template>
  <div id="app">
    <h1 class="ac lg"><Icon value='vue'/>om-ui</h1>
    <div class="container">
      <p>按钮：</p>
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
    </div>
    <div class="container">
      <p>curtain</p>
      <OMButton
        type="success"
        @click="curtainDisplay"
      >打开Curtain</OMButton>
      <OMCurtain
      :show="Curtainshow"
      @close="curtainClose"
      >
        <span>curtain</span>
      </OMCurtain>
    </div>
    <div class="container">
      <p>badge</p>
      <OMbadge value="99" max="999" >
        <OMButton
      >默认</OMButton>
      </OMbadge>
      <OMbadge value="9999" max="9999999" isdot>
        <OMButton
      >isdot</OMButton>
      </OMbadge>
    </div>
    <div class="container">
      <p>loadmore 加载更多</p>
      <OMLoadmore
       @click="loadMore"
       :status="LoadMoreStatus"
       :value="LoadMoreValues"
      ></OMLoadmore>
    </div>
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
    <div class="container">
      <p>modal模态框</p>
      <OMButton
      @click="Modalon"
      >打开模态框吧</OMButton>
    </div>
    <div class="container">
      <p>toast提示</p>
      <OMButton
      @click="Toaston"
      >打开toast提示吧</OMButton>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>

<script>

export default {
  name: 'App',
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
        icon:'smile'
      })
    }
  }
}
</script>


<style lang="stylus">
body
  margin 0 
  padding 0
.demo 
  height 5px 
  width 750rem 
  background-color #000
.ac
  text-align center
  &.lg 
    font-size 50rem
.container
  padding 10rem
</style>
