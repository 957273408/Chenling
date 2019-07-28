<template>
  <div>
    <div id="top">
            <router-link to="/search">
        <van-search shape='round'
                    background='none'
                    placeholder="搜索亿长寿精选好物" v-model="value"/>
      </router-link>
      <div @click="$router.push({path:'/search_list',query:{keyword:value}})">搜索</div>
    </div>
    <div class="hotsearch">
      <div class="host">历史搜索</div>
        <div class="list">
          <div v-for="(item,index) in keyname" :key="index" class="ellipsis" @click="$router.push({path:'/search_list',query:{keyword:item.key_name}})">
            {{item.key_name}}
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Search, } from 'vant';
import { searchWord,searchlist } from '@/axios/getData.js'
export default {
  components: {
    'van-swipe': Swipe,
    'van-swipe-item': SwipeItem,
    'van-search': Search,
  },
  data() {
    return {
      value: '',
      keyname: []
    }
  },
  methods: {
    async getlist() {
      let res = await searchWord({ user_id: this.$store.state.userInfo.user_id });
      this.keyname = res.data.keyname
      console.log(res,5464654);
    },
    search() {
      this.$router.push('/search_list')
    },
    async getdata(){
      var res = await searchlist();
      console.log(res.data,464)
    }
  },
  created() {
    this.getlist();
    this.getdata();
  }
}
</script>

<style lang="scss" scoped>
.van-search .van-cell {
  // background-color: #f2f2f2;
  height: 80px;
  align-items: center;
}
#top{
  margin-top:20pt;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height:40pt;
  &>div{
    width:20%;
    background: linear-gradient(to right,#FE5900,#FF8500);
    line-height: 22pt;
    text-align: center;
    color:#fff;
    border-radius: 11pt;;
  }
}
.hotsearch{
  margin:0 20pt;
  .host{
    margin:20pt 0;
    font-weight: bold;
    font-size: 12pt;

  }
  .list{
    margin:20pt 0;
    font-weight: bold;
    font-size: 12pt;
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;
    &>div{
      width:30%;
      margin-right:4.9%; 
      background: #f2f2f2;
      border-radius: 15pt;
      text-align: center;
      height:30pt;
      line-height: 30pt;
    }
    &>div:nth-child(3){
      margin-right:0%; 
    }
  }
}
</style>
