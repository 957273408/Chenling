<template>
  <div class="box">
    <p>Button</p>
    <vButton round class="button" @click="$router.push({path:'/myset'})">8888</vButton>
    <p>Cell</p>
    <van-cell value="内容" icon="shop-o" is-link>
      <span class="custom-text">单元格</span>
      <van-tag type="danger">标签</van-tag>
    </van-cell>
    <van-cell title="单元格" icon="location-o" is-link />
    <van-cell title="单元格">
      <van-icon slot="right-icon" name="search" class="custom-icon" />
    </van-cell>
    <van-cell title="单元格" is-link value="内容" @click="$router.push({path:'/mymsg'})"/>
    <van-cell title="单元格" is-link arrow-direction="down" value="内容" @click="alert_"/>   <!--弹窗-->
    <van-icon name="chat" info="3" />
    <Swipe style="background:#f00;height:100pt" loop autoplay=2000>
      <SwipeItem style="background:#f00;">1</SwipeItem>
      <SwipeItem style="background:#f0f;">2</SwipeItem>
      <SwipeItem style="background:#0ff;">3</SwipeItem>
    </Swipe>
    <van-tag color="#ff0000" text-color="#ff0">自定义标签</van-tag>
  </div>
</template>
<script>
import{ Button, Cell, Icon, Tag, Toast} from "vant";
import { Swipe, SwipeItem } from 'vant';
export default {
  data () {
    return {

    }
  },
  components:{
    vButton:Button,
    "van-cell":Cell,
    "van-icon":Icon,
    "van-tag":Tag,
    Swipe,
    SwipeItem
  },
  watch: {

  },
  methods:{
    alert_(){
      var num=10
      var timer=setInterval(()=>{
        if(num==0) clearInterval(timer);
        Toast({
          duration: 1000,       // 持续展示 toast
          message: `倒计时,还有${num}秒`
        });
        num--;
      },1000)
    }
  }
}
</script>
<style lang="scss" scoped>
  .button{
    background-color: #f00 !important;
    color: #fff;
    width:80%;
    position: absolute; 
    left: 50%;
    transform: translateX(-50%);
  }
</style>