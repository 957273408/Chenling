<template>
  <div class="classify">
    <div class="search">
      <img src="@/assets/icon/图层599拷贝@2x.png"
           alt>
      <input type="text"
             placeholder="请输入搜索关键词"
             @focus="$router.push({path: '/search'})">
    </div>
    <div class="con flex">
      <ul class="left">
        <li :class="active == index ? 'active' : ''"
            @click="select(index)"
            v-for="(item, index) in tabList"
            :key="index">{{item.title}}</li>
      </ul>
      <div class="right">
        <div class="list">
          <img src="@/assets/icon/图层599拷贝@2x.png"
               alt
               class="banner">
          <router-link :to="'/details?id=' + item.goods_id"
                       class="item flex-center-y"
                       v-for="(item, index) in tabList[active].list"                                                                                                                                                                                                                                                                                                                                                                0
                       :key="index">
            <img :src="item.original_img"
                 alt>
            <div class="info flex_1">
              <p class="title ellipsis">{{item.goods_name}}</p>
              <p class="text ellipsis">{{item.goods_remark}}</p>
              <p class="price">￥{{item.shop_price?item.shop_price:0}}</p>
            </div>
            <van-icon name="arrow"
                      class="arrow" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "vant";
export default {
  components: {
    "van-icon": Icon
  },
  data() {
    return {
      tabList: [
        {
          title: "全部",
          finished: false,
          page: 1,
          id: "",
          list: []
        }
      ],
      active: 0,
      keyword: ""
    };
  },
  created() {
    this.getData("first", this.$route.query.id)
  },
  methods: {
    getData(e, id) {
      let index = this.active
      if (this.tabList[index].finished) return false
      let data = {
        id: id || this.tabList[index].id
      };
      this.keyword ? (data["keyword"] = this.keyword) : ""
      this.$post("goods/index", data).then(res => {
        if (e === "first") {
          res.data.cateArr.forEach((val, key) => {
            this.tabList.push({
              title: val.name,
              page: 1,
              finished: false,
              list: [],
              id: val.id
            })
          })
        }
        if (id) {
          for (let k in this.tabList) {
            if (this.tabList[k].id == id) {
              this.active = k
              break
            }
          }
        }
        var active = this.active,
          tabList = this.tabList[active]
        tabList.list = tabList.list.concat(res.data.goods_list)
        tabList.loading = false
        if (res.data.goods_list.length < 10) tabList.finished = true
        tabList.page = ++tabList.page
      });
    },
    select(index) {
      this.active = index;
      this.getData();
    }
  }
};
</script>

<style scoped lang="scss">
.classify {
  height: 100vh;
  box-sizing: border-box;
  padding-top: 130px;
  padding-bottom: 110px;
}
.search {
  padding: 25px;
  background: #fff;
  position: fixed;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  top: 0;
  width: 100%;
  left: 0;
  input {
    width: 100%;
    height: 80px;
    background: #f2f2f2;
    border-radius: 60px;
    box-sizing: border-box;
    padding-left: 90px;
    padding-right: 20px;
  }
  img {
    position: absolute;
    left: 55px;
    width: 44px;
    top: 42px;
  }
}
.con {
  height: 100%;
  overflow: hidden;
  .left {
    min-height: 100%;
    width: 190px;
    background: #f7f7f7;
    font-size: 32px;
    border-right: 2px solid #eee;
    overflow-y: auto;
    overflow-x: hidden;
    li {
      cursor: pointer;
      height: 90px;
      line-height: 90px;
      text-align: center;
      border-bottom: 2px solid #eee;
      &.active {
        color: #2277e2;
        border-left: 6px solid #2277e2;
        background: #fff;
        border-bottom: 0;
        position: relative;
        left: 1px;
        top: 1px;
      }
    }
  }
  .right {
    min-height: 100%;
    flex: 1;
    background: #fff;
    padding: 20px 25px 0 25px;
    overflow-x: hidden;
    .banner {
      width: 100%;
    }
    .list {
      padding-bottom: 30px;
    }
    .item {
      padding: 25px 0;
      border-bottom: 1px solid #e5e5e5;
      img {
        width: 130px;
        height: 130px;
        border-radius: 10px;
      }
      .info {
        padding: 0 20px;
        overflow: hidden;
        .title {
          color: #454545;
          font-size: 32px;
        }
        .text {
          color: #454545;
          font-size: 28px;
          margin: 6px 0;
        }
        .price {
          color: #dc2121;
        }
      }
      .arrow {
        font-size: 40px;
        color: #c6c6c6;
      }
    }
  }
}
</style>