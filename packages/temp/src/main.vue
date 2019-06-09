<script>
export default {
    name:'Icon',
    props:{
        value:String
    }
}
</script>
<template>
    <span :class="['iconfont',`icon-${value}`]"></span>
</template>