import { get, post } from './index'

/**
 * 首页
 */
export const gethome = () => get('api/index/index')

// ajax商品评论
export const ajaxComment = data => post('api/goods/ajaxComment', data)

//大药房
export const bighoues = data => post('api/goods/index', data)

// 优惠券列表
export const couponList = () => get('api/user/coupon_list')

// 加入购物车
export const addToCart = data => post('api/cart/add', data)

// 商品详情
export const goodsinfo = data => post('api/goods/goodsinfo', data)

// 健康百科
export const getHealthy = data => post('api/healthy/index', data)

//健康百科文章
export const getHealthyinfo = data => post('api/healthy/healthInfo', data)

// 加入会员
export const addmember = data => get('api/member/index', data)

// 社群展示
export const jiankangInfo = data => post('api/jiankang/index', data)

//点赞
export const clickzan = data => post('api/jiankang/zan', data)

// 我要留言
export const meMessage = data => post('api/jiankang/message', data)

// 留言详情
export const messageInfo = data => post('api/jiankang/info', data)

// 加入社群
export const addjiankang = data=>post('api/jiankang/join',data)



// 购物车列表
export const cartList = data => post('api/cart/index',data)