<script>
export default {
    name:'Loading',
    props:{
        size:String,
        dark:Boolean
    }
}
</script>
<template>
    <div
    :class="[
        'om-loading',
        size?'om-loading--'+size:''
    ]"
    >
        <div 
        :class="[
        'om-loading__ring',
            size?'om-loading--'+size+'__ring':'',
            dark?'om-loading--light':'om-loading--dark'
        ]"
        ></div>
        <div 
        :class="[
        'om-loading__ring',
            size?'om-loading--'+size+'__ring':'',
            dark?'om-loading--light':'om-loading--dark'
        ]"
        ></div>
        <div 
        :class="[
        'om-loading__ring',
            size?'om-loading--'+size+'__ring':'',
            dark?'om-loading--light':'om-loading--dark'
        ]"
        ></div>
    </div>
</template>