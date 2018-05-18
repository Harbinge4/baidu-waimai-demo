<template>
  <div class="order-wrapper">
    <div class="title">
      常用商家
    </div>
    <div class="list-wrapper">
      <seller-show :sellerData="sellerData"></seller-show>
    </div>
  </div>
</template>

<script>
import SellerShow from '@/components/common/seller-show/seller-show'
export default {
  name: 'recently-order',
  props: {
    sellerData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    SellerShow
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "../../../static/css/common.less";
.order-wrapper{

}
.title {
  box-shadow: 0 2px 1px #ededed inset;
  padding-left: 10px;
  padding-top: 2px;
  width: 100%;
  height: 41px;
  box-sizing: border-box;
  background: rgb(245, 245, 245);
  line-height: 40px;
  font-size: 14px;
  color: #9c9c9c;
  .border-1px(#e6e6e6);
}
</style>
