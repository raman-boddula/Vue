<template>
  <NavbarVue :isLogin="isLogin" />
  <router-view></router-view>
</template>

<script>
import NavbarVue from './components/Navbar.vue';
export default {
  name: 'App',
  data() {
    return {
      isLogin:false  
    }
  },
  components: {
    NavbarVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.mr-5{
  margin-right: 5px;
}
.dis-flex{
  display:flex;
}
.space-between{
  justify-content:space-between;
}
.vertical-align{
  justify-content: center;
  align-items: center;
}
a{
  color: inherit;
  text-decoration: none;
}
button{
  cursor:pointer;
}
</style>
