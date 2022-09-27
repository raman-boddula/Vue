<template>
    <div class="dis-flex space-between container">
        <div @click="redirectHome" class="image-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGPmtpRrYKhPK6cZMXJxVVgLNw2BOc4flIg&usqp=CAU" alt="logo"/>
        </div>
        <div class="dis-flex vertical-align">
            <!-- <p>{{localStorage.getItem(auth)?.token}}</p> -->
            <router-link to="/about" class="mr-5 btn">About</router-link>
            <router-link to="/contact" class="btn mr-5">Contact Us</router-link>
            <button  @click="onLogout" class="mr-5 logout">Logout</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'NavbarVue',
    methods: {
        redirectHome() {
            this.$router.push('/')
        },
        onLogout() {
            localStorage.removeItem('auth');
            this.$router.push('/login')
        }
    }
}
</script>
<style scoped>
    .image-container{
        width: 50px;
        height: 50px;
    }
    .image-container img{
        width: 50px;
        height: 50px;
    }
    .container{
        background-image: linear-gradient(to right,white,cyan);
    }
    .logout{
        background: red;
        border: none;
        box-shadow: none;
        padding: 4px;
        border-radius: 4px;
        color: white;
        font-weight: bold;
    }
    .btn{
        cursor: pointer;
        border: none;
        background:inherit;
        font-weight: bold;
    }
</style>