<template>
  <div>
    <img src="@/assets/images/test.png" alt="">
  </div>
</template>

<script>
export default {
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.$post('user/erweima', {}).then((res) => {
        
      })
    }
  }
}
</script>

<style scoped lang="scss">
img {
  width: 100%;
}
</style>