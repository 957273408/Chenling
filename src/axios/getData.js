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
export const addjiankang = data=>post('api/jiankang/join',data)



// 购物车列表
export const cartList = data => post('api/cart/index',data)

//地址列表
export const shouhuodizhi = data => post('api/user/address_list', data)

//编辑地址
export const edit_address = data => get('api/user/edit_address', data)

//删除地址   
export const del_address = data => get('api/user/del_address', data)

//添加收藏
export const add_shoucang = data => get('api/user/add_collect', data)

//设置默认收货地址
export const set_default = data => get('api/user/set_default', data)

//优惠券列表
export const youhuiquan_list = data => get('api/user/coupon', data)

//用户资料
export const xiugaiziliao = data => post('api/user/xiugai_ziliao', data)

//修改用户资料
export const userinfo = data => post('api/user/userinfo', data)

//添加银行卡
export const bankadd = data => get('api/user/bankadd', data)

//修改银行卡
export const bankedit = data => post('api/user/bankedit', data)

//银行卡列表
export const bankList = data => get('api/user/bankList', data)

//删除银行卡
export const delBank = data => post('api/user/delBank', data)

//帮助列表
export const helper = data => get('api/user/helper', data)

//帮助中心详情
export const helper_info = data => post('api/user/helper_info', data)

//上传图片
export const upload = data => get('api/upload/uploadImg', data)

//签到规则
export const qiandao_guize = data => post('api/user/sign_rules', data)

//马上签到规则
export const user_sign = data => post('api/user/user_sign', data)

//签到总积分api/order/order_list
export const sign_total = data => post('api/user/sign_total', data)

//订单列表
export const order_list = data => post('api/order/order_list', data)

//物流查询
export const express = data => get('api/user/express', data)
