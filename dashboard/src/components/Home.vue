<template>
    <div v-if="!isLoading">
        <div class="header-container">
            <button :disabled="checkPage" class="btn" @click="changePage(-1)"> PREV </button>
            <h1>Homepage</h1>
            <button @click="changePage(1)" class="btn" >NEXT  </button>
        </div>
            <div class="product-container">
                <div :key="data.id" v-for="data in dataList">
                   <ProductItem :product="data" />
                </div>
            </div>
    </div>
    <div v-else>
        <h1>Content Loading....!</h1>
    </div>
</template>
<script>
import ProductItem from './Products.vue';
export default {
    name: 'HomePage',
    components: {
        ProductItem
    },
    computed: {
        checkPage() {
            return this.page>=1?false: true;
        },
    },
    data() {
        return {
            dataList: [],
            page: 1,
            isLoading:false
        }
    },
     watch: {
    // whenever page changes, this function will run
        page() {
            this.getData()
        }
  },
    methods: {
        changePage(value) {
            this.page = this.page + value;
        },
        async getData() {
            this.isLoading = true;
            let data = await fetch(`https://api.pexels.com/v1/search?query=bikes&page=${this.page}&per_page=9`, {
                method: "GET",
                headers: {
                    Authorization: "563492ad6f9170000100000153773b5c95d14d0291140d39b7064f0e"
                }
            });
            let res = await data.json();
            this.dataList = res.photos;
            this.isLoading = false;
        }
    },
    async created() {
        await this.getData();
    }
    }
</script>
<style scoped>
.header-container{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.product-container{
    display: grid;
    grid-template-columns: repeat(3,32%);
    grid-gap: 1%;
}
.btn{
    background: black;
    padding:5px;
    border-color: none;
    border-radius: 4px;
    color: white;
}
</style>