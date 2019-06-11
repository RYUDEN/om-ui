<template>
  <div id="app">
    <h1 class="ac lg">om-ui</h1>
    <div class="container index-container">
      <p class="title">基础组件:</p>
      <router-link to='button' class="link">按钮</router-link>
    </div>
    <div class="container index-container">
      <p class="title">视图组件:</p>
      <router-link to='badge' class="link">徽标</router-link>
      <router-link to='loadmore' class="link">加载更多</router-link>
      <router-link to='curtain' class="link">幕帘</router-link>
      <router-link to='tag' class="link">标签</router-link>
    </div>
    <div class="container index-container">
      <p class="title">操作反馈:</p>
      <router-link to='action' class="link">动作面板</router-link>
      <router-link to='modal' class="link">模态框</router-link>
      <router-link to='toast' class="link">轻提示</router-link>
      <router-link to='message' class="link">消息提示</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'index',
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
<style lang="stylus">
.index-container
  font-size .3rem
  .title,.link
    font-size .3rem
</style>
