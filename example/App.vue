<template>
  <div id="app">
    <router-view class="router"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>


<style lang="stylus">
body
  margin 0 
  padding 0
.demo 
  height 5px 
  width 7.50rem 
  background-color #000
.ac
  text-align center
  &.lg 
    font-size .50rem
.container
  padding .10rem
</style>
