/*包含n个接口请求函数的模块,函数的返回值为promise对象*/

import ajax from './ajax'

/*接口列表*/
// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)
export const reqAddress=(geohash)=>ajax(`/position/$(geohash)`)           //因为经纬度是一个动态值，所以采用$(geohash)

// [2、获取食品分类列表](#2获取食品分类列表)
export const reqFoodTypes=()=>ajax('/index_category')

// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)
export const reShops=(longitude,latitude)=>ajax('/shops',{longitude,latitude})        //data中的参数名必须与文档中的一致

// [4、根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)
export const

// [5、获取一次性验证码](#5获取一次性验证码)
export const

// [6、用户名密码登陆](#6用户名密码登陆)
export const

// [7、发送短信验证码](#7发送短信验证码)
export const

// [8、手机号验证码登陆](#8手机号验证码登陆)
export const

// [9、根据会话获取用户信息](#9根据会话获取用户信息)
export const

// [10、用户登出](#10用户登出)
export const


