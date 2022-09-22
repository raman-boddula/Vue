const app = Vue.createApp({
    data() {
        return {
            firstName: 'Raman',
            lastName: 'Chinna',
            email: 'raman2631999@gmail.com',
            mobile: 8106428106,
            gender: 'male',
            imgUrl: 'https://randomuser.me/api/portraits/men/51.jpg'
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api');
            const { results } = await res.json();
            console.log(results);
            this.firstName = results[0].name.first;
            this.lastName = results[0].name.last;
            this.email = results[0].email;
            this.gender = results[0].gender
            this.imgUrl = results[0].picture.large
            this.mobile = results[0].phone
        }
    }
}
)
app.mount('#app')