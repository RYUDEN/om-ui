<script>
export default {
    name:'OMTabpane',
    props:{
        value:String
    }
}
</script>
<template>
    <div class="om-tab-pane">
        <slot></slot>
    </div>
</template>