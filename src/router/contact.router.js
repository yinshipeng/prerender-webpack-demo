/**
 * Created by yinshipeng on 2017/9/8.
 */
const Contact = resolve => require(['../views/contact/contact.vue'], resolve)
export default [
    {
        path: '/contact',
        component: Contact,
    }
]