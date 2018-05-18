<template>
  <div class="shop-detail" v-if="shopData">
    <div class="head">
      <div class="head-first">
        <div class="backBtn" @click="routerBack()">
          <img width="21" height="16" src="../../assets/icons/back-arrow.png" />
        </div>
        <div class="title">{{shopData.name}}</div>
        <div class="add-favorite">
          <img width="21" height="21" src="../../assets/icons/fav_star.png" />
        </div>
      </div>
      <div class="head-later">
        <div class="icon">
          <img width="50" height="50" :src="getIcon" />
        </div>
        <div class="content">
          起送￥{{shopData.float_minimum_order_amount}}| 配送￥{{shopData.float_delivery_fee}}| 送达{{shopData.order_lead_time}}分钟
        </div>
      </div>
    </div>
    <div class="discount-alert">
      <p>代金券、满减、折扣等优惠仅在app中享用</p>
      <div class="discountBtn">立享优惠</div>
    </div>
      <div class="main">
        <div class="router-links">
          <div class="goods item-selected">
            商品
          </div>
          <div class="ratings">
            评价
          </div>
          <div class="shop-extends">
            商家
          </div>
        </div>
        <router-view :foodsList="shopData.foods_list"></router-view>
      </div>
    <div class="shop-cart">
      <div class="cart-detail">
        <div class="cart-icon">
          <img width="32" height="32" src="../../assets/icons/shop/shopcart.png" />
        </div>
        <div class="price-count">
          共<span class="rmb-sign">￥</span>0 元
        </div>
      </div>
      <div class="cart-submit">
        <span class="rmb-sign">差￥</span>0起送
      </div>
    </div>
  </div>
</template>

<script>
import ShopGoods from '@/components/shop-goods/shop-goods'
import {getShopDetail} from '../api/shop.js'

export default {
  name: 'shop-detail',
  data () {
    return {
      shopID: this.$route.params.id,
      shopData: null
    }
  },
  created () {
    this._noShopID()
    getShopDetail(this.shopID).then(res => {
      this.shopData = res.data
    })
  },
  components: {
    ShopGoods
  },
  methods: {
    routerBack () {
      this.$router.back()
    },
    _noShopID () {
      if (this.shopID === undefined) {
        this.$router.push('/')
      }
    }
  },
  computed: {
    getIcon () {
      let temp = this.shopData.image_path
      const path1 = temp.slice(0, 1)
      const path2 = temp.slice(1, 3)
      const imgSRC = temp.slice(3)
      const cdnURL = 'https://fuss10.elemecdn.com/'

      return cdnURL + path1 + '/' + path2 + '/' + imgSRC + '.png'
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../../static/css/common.less";
  .head{
    height: 116px;
    background: rgb(237, 129, 63);
    .head-first{
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      height: 30px;
      .backBtn{
        margin-left: 17px;
        padding: 10px 8px 0 0;
        width: 23px;
        height: 17px;
      }
      .title{
        max-width: 275px;
        line-height: 18px;
        font-size: 18px;
        font-weight: 400;
        color: #fff;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .add-favorite{
        margin-right: 10px;
        padding: 10px  0 0 10px;
        width: 21px;
        height: 21px;
      }
    }
    .head-later{
      margin-top: 15px;
      height: 80px;
      font-size: 0;
      .icon{
        display: inline-block;
        margin-left: 15px;
        width: 54px;
        height: 54px;
        background: #fff;
        border-radius: 50%;
        overflow: hidden;
        img{
          border: 2px;
          border-radius: 50%;
          margin: 2px 0 0 2px;
        }
      }
      .content{
        display: inline-block;
        vertical-align: top;
        padding: 6px 0 0 6px;
        line-height: 12px;
        font-size: 12px;
        font-family: Helvetica;
        color: #fff;
      }
    }
  }
  .discount-alert{
    position: relative;
    height: 43px;
    font-size: 0;
    background: #ffffe5;
    p{
      display: inline-block;
      margin-left: 15px;
      line-height: 43px;
      font-size: 13px;
      color: #666;
    }
    .discountBtn{
      display: inline-block;
      position: absolute;
      top: 6px;
      right: 15px;
      width: 80px;
      height: 30px;
      text-align: center;
      vertical-align: bottom;
      line-height: 30px;
      font-size: 14px;
      color: #fff;
      background: #ff2b4b;
      border-radius: 3px;
      overflow: hidden;
    }
  }
  .main{
    .router-links{
      display: flex;
      justify-content: center;
      width: 100%;
      height: 58px;
      background: #f9fdff;
      font-size: 0;
      color:#f9fdff;
      .border-1px(#d9e0ec);
      div{
        flex: 1 93px;
        margin-right: 12px;
        width: 93px;
        height: 57px;
        text-align: center;
        line-height: 58px;
        font-size: 18px;
        color: #4d4d4d;
        box-sizing: border-box;
      }
      .item-selected{
        color: #fe2947;
        border-bottom: 2px #fe2947 solid;
      }
      .goods{
        margin-left: 36px;
      }
      .ratings{

      }
      .shop-extends{
        margin-right: 36px;
      }
    }
  }
  .shop-cart{
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    .cart-detail{
      position: relative;
      flex: 1;
      width: 255px;
      background: #484d54;
      font-size: 0;
      display: flex;
      .cart-icon{
        position: relative;
        top: -8px;
        left: 6px;
        width: 50px;
        height: 50px;
        background: #3f4349;
        border-radius: 50%;
        overflow: hidden;
        img{
          padding: 9px 0 0 9px;
        }
      }
      .price-count{
        position: absolute;
        width: 255px;
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        color: #fff;
        text-align: center;
        vertical-align: middle;
      }
    }
    .cart-submit{
      flex: 0 120px;
      width:120px;
      line-height: 50px;
      font-size: 16px;
      color: #fff;
      text-align: center;
      vertical-align: middle;
      background: #555f71;
    }
  }
  .rmb-sign{
    letter-spacing: -4px;
  }
</style>
