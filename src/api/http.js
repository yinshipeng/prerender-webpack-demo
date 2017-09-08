/**
 * Created by yinshipeng on 2017/9/8.
 */
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:4000/api'

export default {
    get: function (url, body) {
        body = body || {}
        //这里可以做一些封装
        return axios.get(url, body)
    },
    post: function (url, body) {
        body = body || {}
        //这里可以做一些封装
        return axios.post(url, body)
    },
}