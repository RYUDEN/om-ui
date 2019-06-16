<template>
  <div>
    <h1 class="ac lg">om-ui</h1>
    <div class="container">
      <p>badge徽标</p>
      <OMbadge value="99" max="999" class="margin-right" >
        <OMButton
      >默认</OMButton>
      </OMbadge>
      <OMbadge value="9999" max="999" class="margin-right" >
        <OMButton
      >overflow</OMButton>
      </OMbadge>
      <OMbadge value="9999" max="9999999" class="margin-right" isdot>
        <OMButton
      >isdot</OMButton>
      </OMbadge>
      <OMbadge value="new" class="margin-right">
        <OMButton
      >自定义文字</OMButton>
      </OMbadge>
    </div>
  </div>
</template>

<script>

export default {
  name: 'badge'
}
</script>

<style lang="stylus" scoped>
.margin-right
  margin-right .5rem
</style>
