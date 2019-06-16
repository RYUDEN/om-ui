<script>
export default {
    name:'divider'
}
</script>
<template>
    <div class="divider container">
        <h1>divider分割线:</h1>
        <p>默认：</p>
        <OMDivider
        ></OMDivider> 
        <p>自定义文字：</p>
        <OMDivider
        content="文章底部"
        fontColor="#ffcc00"
        lineColor="#ff0077"
        ></OMDivider>  
        <p>自定义内容：</p>  
        <OMDivider
        >
            <router-link to='/' class="link"><Icon value="copyright"/>Copyright ryu</router-link>
        </OMDivider>
    </div>
</template>

