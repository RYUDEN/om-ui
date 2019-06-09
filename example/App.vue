<template>
  <div id="app">
    <h1 class="ac lg"><Icon value='vue'/>om-ui</h1>
    <div class="container">
      <p>按钮：</p>
      <OMButton
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
        @click="curtainDisplay"
      >安全操作</OMButton>
      <OMButton
        type="warning"
      >警告提示warning</OMButton>
      <OMButton
        type="danger"
      >危险操作danger</OMButton>
    </div>
    <div>
      <p>curtain</p>
      <OMCurtain
      :show="Curtainshow"
      @close="curtainClose"
      ></OMCurtain>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      Curtainshow:false
    }
  },
  methods:{
    curtainClose(){
      this.Curtainshow = false
    },
    curtainDisplay(){
      this.Curtainshow = true
    }
  }
}
</script>


<style lang="stylus">
body
  margin 0 
  padding 0
.ac
  text-align center
  &.lg 
    font-size 50rem
.container
  padding 10rem
</style>
