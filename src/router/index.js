/**
 * Created by yinshipeng on 2017/9/8.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeRouter from './home.router'
import AboutRouter from './about.router'
import ContactRouter from './contact.router'
Vue.use(VueRouter)
const routes = [
    ...HomeRouter,
    ...AboutRouter,
    ...ContactRouter,
]
const router = new VueRouter({
    mode: 'history',
    routes
})
export default router