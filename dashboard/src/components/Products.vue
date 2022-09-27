<template>
    <div>
        <img :src="product.src.large" :alt="product.alt"/> 
        <p>{{product.photographer}}</p>
    </div>
</template>
<script>
export default {
    name: 'ProductItem',
    props: {
            product:Object
        }
    }
</script>
<style scoped>
img{
    width:400px;
    height: 500px;
    border: 5px solid black;
}
img:hover{
    cursor: pointer;
    transform: scaleX(1.1);
    transition: all 0.5s;
}
</style>