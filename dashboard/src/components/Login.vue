<template>
    <div>
        <form @submit="onLogin($event)" class='container'>
            <input placeholder="please enter a valid email" type="email" v-model='email' name='email'/>
            <input placeholder="please enter a valid password" type="password" v-model='password' name='password'/>
            <input type="submit" placeholder="Login"/>
        </form>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'loginComp',
    data() {
        return {
            email: '',
            password:''
        }
    },
    methods: {
        onLogin(e) {
            e.preventDefault();
            if (!this.email && !this.password) {
                alert('Please enter a valid email and password');
                return;
            }
            const payload = {
                email: this.email,
                password: this.password
            }
            axios.post('https://reqres.in/api/login', payload).then(res => {
                localStorage.setItem('auth', JSON.stringify(res.data))
                this.$router.push('/')
            })
        }
    }
}
</script>
<style scoped>
.container{
    background-image: linear-gradient(to right, white, cyan,white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 1px solid lightblue; */
}
.btn{
    background: black;
    padding:5px;
    border-color: none;
    border-radius: 4px;
    color: white;
}
input{
    height:30px;
    margin:5px
}
</style>
