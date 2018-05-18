<template>
  <div class="seller-list-wrapper">
    <ul id="seller-list">
      <li v-for="item in sellerData" :key="item.shop_id" @click="enterShop(item.shop_id)">
        <div class="logo-wrapper">
          <img :src="item.logo_url" />
        </div>
        <div class="seller-detail">
          <h1>{{item.shop_name}}</h1>
          <h2>月售{{item.saled_month}}份</h2>
          <p>
            <span>起送费 ￥{{item.takeout_price}}</span> |
            <span>配送费 ￥{{item.takeout_cost}}</span> |
            <span class="deliver-time">{{item.delivery_time}}分钟</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'seller-show',
  props: {
    sellerData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    enterShop (id) {
      this.$router.push({path: `/shopdetail/${id}`})
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../../../static/css/common.less";
#seller-list {
  margin-left: 9px;
  li{
    display: flex;
    align-items: center;
    width: 100%;
    height: 88px;
    .border-1px(#f2f2f2);
    .logo-wrapper{
      width: 100px;
      height: 64px;
      border: 1px solid #eeeeee;
      img{
        width: 100px;
        height: 64px;
      }
    }
    .seller-detail{
      margin-left: 9px;
      height:64px;
      h1{
        margin-bottom: 10px;
        width: 230px;
        font-size: 18px;
        line-height: 18px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        color: #4d4d4d;
      }
      h2{
        font-size: 12px;
        line-height: 16px;
        color: #999;
      }
      p{
        font-size: 10px;
        line-height: 12px;
        color: #999;
        span{
          font-size: 12px;
          line-height: 16px;
        }
      }
    }
  }
}
.deliver-time{
  padding-left: 2px;
  color: #ff455f;
}
</style>
