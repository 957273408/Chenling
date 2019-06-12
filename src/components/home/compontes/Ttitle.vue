<template>
  <div class="top">
    <p class="left"><span>{{first}}</span>{{last}}</p>
    <slot name='right'></slot>
  </div>
</template>


<script>
export default {
  props: {
    title: {
      type: String,
    }
  },
  data () {
    return {
      first: this.title.substr(0, 2),
      last: this.title.substr(2)
    }
  },
}
</script>

<style lang="scss" scoped>
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  .left {
    font-size: 34px;
    font-weight: bold;
    span {
      color: rgba(75, 157, 243, 1);
    }
  }
}
</style>
