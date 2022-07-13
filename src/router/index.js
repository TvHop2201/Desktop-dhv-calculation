import Vue from "vue";
import Router from 'vue-router'

import App from '../App.vue'
import Dashboard from '../components/Dashboard.vue'
import Calculation from '../components/calculation/CalculationView.vue'
import information from '../components/Information.vue'
import Weather from '../components/Weather.vue'
import Setting from '../components/Setting.vue'
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
            component: Weather
        },
        {
            path: '/information',
            component: information
        },
        {
            path: '/setting',
            component: Setting
        },
        {
            path: '*',
            component: NF404
        }

    ],
    mode: 'history'
})
export default router