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

//取消收藏
export const del_shoucang = data => get('api/user/cancel_collect', data)

//消息列表
export const mymsg = data => post('api/user/messages', data)

//添加地址
export const add_address = data => post('api/user/receiving_address', data)

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
export const addjiankang = data => post('api/jiankang/join', data)

// 购物车列表
export const cartList = data => post('api/cart/index', data)

//地址列表
export const shouhuodizhi = data => post('api/user/address_list', data)

//编辑地址
export const edit_address = data => get('api/user/edit_address', data)

//删除地址
export const del_address = data => get('api/user/del_address', data)

// 领优惠卷
export const get_coupon = data => post('api/user/get_coupon', data)

// 删除购物车
export const del_cart = data => post('api/cart/delete', data)

// 结算订单
export const submit_order = data => post('api/cart/settlement', data)

// 提交订单
// export const

//添加收藏
export const add_shoucang = data => get('api/user/add_collect', data)

//设置默认收货地址
export const set_default = data => get('api/user/set_default', data)

//优惠券列表
export const youhuiquan_list = data => get('api/user/coupon', data)
