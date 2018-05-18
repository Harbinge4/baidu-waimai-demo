<template>
  <div>
    <index-head></index-head>
    <navs></navs>
    <recently-order :sellerData="restData"></recently-order>
  </div>

</template>

<script>
import IndexHead from '@/components/index-head/index-head'
import Navs from '@/components/navs/navs'
import RecentlyOrder from '@/components/recently-order/recently-order'
import {getRestByAjax} from '../api/restaurant.js'

export default {
  name: 'front-page',
  created () {
    getRestByAjax(11).then((res) => {
      this.$nextTick(function () { this.restData = res.data.shop_info })
    })
  },
  data () {
    return {
      restData: null
    }
  },
  components: {
    IndexHead,
    Navs,
    RecentlyOrder
  },
  methods: {
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>

</style>
