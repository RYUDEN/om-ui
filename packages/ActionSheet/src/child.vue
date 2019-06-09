<script>
export default {
    name:'ActionSheetItem',
    methods:{
        handleClick(e){
            this.$emit('click',e)
        }
    }
}
</script>
<template>
    <div v-if="$slots.default"
        class="om-action-sheet--item"
        @click="handleClick"
    >
        <slot></slot>
    </div>
</template>