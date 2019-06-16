<template>
  <div class="news">
    <header>
      <div class="title">亲吻孩子竟会导致传染病</div>
      <div class="time">
        发布时间：2019-04-24 阅读：2548412
      </div>
    </header>
    <div class="contaner"
         v-html="html"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/css/mixin.scss";
.news {
  padding: 0 30px;
}
header {
  padding: 26px 0;
  border-bottom: 2px solid #e5e5e5;
  .title {
    @include sc(36px, #232323);
    line-height: 38px;
    margin-top: 25px;
  }
  .time {
    @include sc(26px, #676767);
    line-height: 38px;
    margin-top: 25px;
  }
}
</style>

<script>
export default {

}
</script>


