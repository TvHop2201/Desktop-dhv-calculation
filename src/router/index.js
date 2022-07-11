import Vue from "vue";
import Router from 'vue-router'

import App from '../App.vue'
import Dashboard from '../components/Dashboard.vue'
import Calculation from '../components/calculation/CalculationView.vue'
import NF404 from '../components/NF404.vue'


Vue.use(Router)
const router = new Router({
    routes: [
        {
            path: '/',
            component: Dashboard,
        },
        {
            path: '/calculation',
            component: Calculation
        },
        {
            path: '/weather',
            component: Calculation
        },
        {
            path: '/information',
            component: Calculation
        },
        {
            path: '*',
            component: NF404
        }

    ],
    mode: 'history'
})
export default router