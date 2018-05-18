<template>
  <div class="shop-goods" v-if="foodsList">
    <div class="goods-menu">
      <ul class="menu-list">
        <li v-for="item in foodsList" :key="item.id">{{item.name}}</li>
      </ul>
    </div>
    <div class="goods-list">
      <ul class="goods-list-group" v-for="item in foodsList" :key="item.item_id">
        <li v-for="food in item.foods" :key="food.virtual_food_id">
          <div class="goods-pic">
            <img width="50" height="50" :src="getFoodIcon(food.image_path)">
          </div>
          <div class="goods-content">
            <h4 class="good-name">{{food.name}}</h4>.
            <p class="sold-count">已售{{food.month_sales}}份</p>
            <p class="good-price"><span class="rmb-sign">￥</span>{{food.specfoods[0].price}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shop-goods',
  props: {
    foodsList: {
      type: Array,
      default: null
    }
  },
  methods: {
    getFoodIcon (path) {
      let imgPath = '' + path
      const path1 = imgPath.slice(0, 1)
      const path2 = imgPath.slice(1, 3)
      const imgSRC = imgPath.slice(3)
      const cdnURL = 'https://fuss10.elemecdn.com/'

      return cdnURL + path1 + '/' + path2 + '/' + imgSRC + '.jpeg'
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../../static/css/common.less";
  .shop-goods{
    display: flex;
    margin-top: 2px;
    .goods-menu{
      flex: 0 0 94px;
      .menu-list{
        width: 94px;
        background: #ebedf0;
        li{
          width: 94px;
          height: 46px;
          line-height: 46px;
          font-size: 13px;
          font-weight: 500;
          text-align: center;
          white-space: nowrap;
          overflow: hidden;
          color: #4d4d4d;
        }
      }
    }
    .goods-list{
      flex: 1;
      .goods-list-group{
        display: block;
        li{
          display: flex;
          align-items: center;
          margin-left: 10px;
          padding-left: 10px;
          min-width: 261px;
          width: 100%;
          height: 69px;
          font-size: 0;
          .border-1px(#eeeeee);
        }
        .goods-pic{
          vertical-align: top;
        }
        .goods-content{
          margin: 2px 0 0 10px;
          .good-name{
            margin-bottom: 3px;
            line-height: 16px;
            font-size: 16px;
            color: #4d4d4d;
          }
          .sold-count{
            margin-bottom: 3px;
            line-height: 12px;
            font-size: 12px;
            color: #999999;
          }
          .good-price{
            line-height: 15px;
            font-size: 15px;
            font-weight: 700;
            color: #ff2e4b;
          }
        }
      }
    }
  }
  .rmb-sign{
    letter-spacing: -4px;
    font-weight: 600;
  }

</style>
