<template>
  <div>
    <van-contact-card type="edit"
                      name="历史"
                      tel="currentContact.tel" />
  </div>
</template>

<script>
import { ContactCard } from 'vant';
export default {
  components: {
    'VanContactCard': ContactCard,
  },
  data() {
    return {  

    }
  }
}
</script>

<style lang="scss" scoped>
</style>
