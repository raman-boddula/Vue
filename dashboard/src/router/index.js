import { createRouter, createWebHistory } from 'vue-router';
import LoginComponent from '../components/Login.vue';
import RegisterComponent from '../components/Register.vue';
import HomePage from '../components/Home.vue';
import AboutComponent from '../components/About.vue';
import ContactComponent from '../components/Contact.vue';
const routes = [
    {
        path: '/login',
        name: 'Login',
        component: LoginComponent
    }, {
        path: '/register',
        name: 'Register',
        component: RegisterComponent
    }, {
        path: '/',
        name: 'Home',
        component: HomePage
    }, {
        path: '/about',
        name: 'About',
        component: AboutComponent
    }, {
        path: '/contact',
        name: 'Contact',
        component: ContactComponent
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes
})
router.beforeEach(async (to) => {
    const user = JSON.parse(localStorage.getItem('auth'));
    if (!user && to.name !== 'Login') {
        return {
            name: 'Login',
        }
    }
})
export default router;