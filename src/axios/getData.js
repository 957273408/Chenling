import { get, post } from './index'

/**
 * 首页
 */
export const gethome = () => get('api/index/index')

// 登录
export const login = ()=> get('api/login/index')

// ajax商品评论
export const ajaxComment = data => post('api/goods/ajaxComment', data)

//大药房
export const bighoues = data => post('api/goods/index', data)

//大药房上拉刷新
export const uploading = data => post('api/goods/goods_list', data)

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
// export const mymsg = data => post('api/user/messages', data)
export const mymsg = data => post('api/user/message_notice_detail', data)


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

// 留言
export const meMessage = data => post('api/jiankang/message', data)

// 发表评论
export const mefabiao = data => post('api/jiankang/fabiao', data)

// 评论列表
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
export const addOrder = data => post('api/cart/addOrder',data)

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

//设置中心
export const user_setting = data => post('api/user/setting', data)

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

// 更改购物车数量
export const changeCartNum = data =>post('api/cart/changeNum',data)

// 搜索列表
export const searchlist =data=> get('api/goods/searchlist',data)

//大药房商品分类
export const goods_category= data=>post('api/goods/category',data)

//大药房商品分类上拉刷新
export const goods_category_list= data=>post('api/goods/category_list',data)

// 搜索关键字
export const searchWord= data=>post('api/goods/keyword',data)

//我的朋友
export const myfirends = data => get('api/user/lower_list', data)

//积分商城
export const jifen_store = data => post('api/user/integral_mall', data)

//商品兑换提交
export const shangpin_duihuan = data => post('api/user/integral_info', data)

//商品兑换记录api/user/intergral_xq
export const duihuan_jilu = data => post('api/user/integral_list', data)

//商品兑换详情
export const duihuan_xq = data => get('api/user/intergral_xq', data)

//乐拼首页
export const le_index = data => get('api/Group/index', data)

//合伙人中心(个人中心页面)
export const hehuoren_1 = data => get('api/Agent/index', data)

//申请合伙人
export const shenqing_hhr = data => get('api/Agent/addAgent', data)

//更换手机号码
export const smsSend = data => post('api/user/smsSend', data)

//绑定手机号码
export const bandmobile = data => post('api/user/bandmobile', data)

//实名认证
export const shiming = data => post('api/user/RealnameAuthentication', data)

//抽奖列表
export const choujiang = data => get('api/index/luck_turntable', data)

//开始抽奖
export const luck_draw = data => get('api/index/luck_draw', data)

//数据中心
export const shuju = data => post('api/agent/settlement', data)

//数据中心
export const erweima = data => post('api/user/erweima', data)

//我的朋友总数
export const count_ = data => post('api/user/get_team_num', data)

//
export const up_my_order = data => post('api/cart/wxPay', data)

//未发货之前删除订单
export const del_order = data => post('api/order/cancel_order', data)

//未发货之前删除订单
export const up_myorder = data => post('api/cart/wxPay', data)

