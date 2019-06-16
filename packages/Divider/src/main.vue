<script>
export default {
    name:'OMDivider',
    props:{
        content:{
            default:'分割线',
            type:String
        },
        fontColor:String,
        lineColor:String 
    }
}
</script>
<template>
    <div class="om-divider">
        <div class="om-divider__content"
        :style="{color:fontColor}"
        >
        <template v-if="$slots.default">
            <slot></slot>    
        </template>    
        <template v-else>
        {{content}}
        </template>    
        </div>
        <div class="om-divider__line"
        :style="{backgroundColor:lineColor}"
        ></div>
    </div>
</template>