import Vue from 'vue'
import Router from 'vue-router'
import Home from './Home.vue'
import Donate from './Donate.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/donate',
            name: 'donate',
            component: Donate
        }
    ]
})