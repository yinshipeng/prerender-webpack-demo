/**
 * Created by yinshipeng on 2017/9/8.
 */
import http from './http'

export const getAbout = function () {
    const url = '/news'
    return http.get(url)
}