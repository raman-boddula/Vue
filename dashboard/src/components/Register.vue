<template>
    <div>
        <form @submit="onSubmit($event)" class="container">
            <input type="email" v-model="email" name="email" placeholder="please enter email address" />
            <input v-model='password' type="password" name="password" placeholder="please enter password"/>
            <input type="submit" class="btn"/>
        </form>
    </div>
</template>
<script>
export default {
    name: 'RegisterComp',
    date() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault();
            if (!this.email) {
                alert('Please enter a valid email');
                return;
            }
            if (!this.password) {
                alert('Please enter a valid password');
                return;
            }
            const user = {
                email: this.email,
                password:this.password
            }
            localStorage.setItem('auth', JSON.stringify(user));
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
