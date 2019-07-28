<template>
  <div class="contarin">
    <div class="cation">
      <img class="img"
           src=""
           alt="">
      <span class="titel">
        您好，欢迎光临亿长寿，请问有什
        么能帮到您的？
      </span>
    </div>
    <div class="user">

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.contarin {
  width: 100%;
  height: 100vh;
  background-color: #ccc;
  overflow: hidden;
}
.cation {
  display: flex;
  margin-top: 50px;
}
.img {
  width: 87px;
  height: 87px;
  background-color: red;
}
.titel {
  background-color: #fff;
  width: 480px;
  height: 77px;
  font-size: 32px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(48, 48, 48, 1);
  line-height: 45px;
}
</style>
<script>
export default {

}
</script>