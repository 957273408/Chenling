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
export const getHealthy = data => get('api/healthy/index', data)

//收藏列表
export const getshoucang = data => get('api/user/collect_list', data)

//消息列表
export const mymsg = data => post('api/user/messages', data)

//地址列表
export const address = data => post('api/user/address_list', data)

