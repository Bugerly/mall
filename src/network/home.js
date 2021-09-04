import {request} from './request'

export function getHomeMultaDate(){
    return request({
        url:'/home/multidata'
    }) 
}