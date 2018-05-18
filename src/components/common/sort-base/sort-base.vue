<template>
  <transition name="sort">
  <div class="sort-wrapper">
    <div class="head">
      <div class="back" @click="routerBack">
      </div>
      <div class="title">{{title}}</div>
      <div class="search">
        <div class="searchBtn">
        </div>
      </div>
    </div>
    <div class="content">
      <transition name="mask-lay">
        <div class="mask" v-show="maskFlag"></div>
      </transition>
        <div class="sort-setting">
          <div class="sort-by-custom sort-style" @click.stop="toggleSortTab($event)" id="sort-tab1">排序</div>
          <transition name="sorttabs">
            <div class="sort-tab" v-show="sortTabFlag1">
              <ul class="sort-tab-cont" @click="sortSelected($event)">
                <li class="sort-list-selected">默认排序</li>
                <li>按销量由高到低</li>
                <li>送餐速度由快到慢</li>
              </ul>
            </div>
          </transition>
          <div class="divider"></div>
          <div class="sort-by-spec sort-style" @click.stop="toggleSortTab($event)" id="sort-tab2" >福利</div>
          <transition name="sorttabs">
            <div class="sort-tab" v-show="sortTabFlag2">
              <ul class="sort-tab-cont">
                <li>全部餐厅</li>
                <li>新用户立减</li>
                <li>下单返券</li>
                <li>预定优惠</li>
                <li>特价商品</li>
                <li>进店领券</li>
                <li>满免配送费</li>
                <li>下单满赠</li>
                <li>资质证照</li>
                <li>支持代金券</li>
                <li>开发票</li>
                <li>在线支付</li>
                <li>百度转送</li>
                <li>有实体店</li>
              </ul>
            </div>
          </transition>
        </div>
      <div class="seller-detail">
        <seller-show :sellerData="restData"></seller-show>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
import SellerShow from '@/components/common/seller-show/seller-show'
import {getRestByAjax} from '../../api/restaurant'

export default {
  name: 'sort-base',
  created () {
    getRestByAjax(this.index).then((res) => {
      this.$nextTick(function () { this.restData = res.data.shop_info })
    })
  },
  mounted () {
    this.getTitle()
  },
  data () {
    return {
      sortTabFlag1: false,
      sortTabFlag2: false,
      maskFlag: false,
      restData: null,
      titleList: ['餐饮', '早餐', '下午茶', '夜宵', '百度专送', '超市购', '水果生鲜', '送药上门', '品牌馆', '新店特惠'],
      title: null,
      index: this.$route.params.index
    }
  },
  methods: {
    toggleSortTab (event) {
      if (event.target.id === 'sort-tab1' && this.sortTabFlag1 === false) {
        this.sortTabFlag2 = false
        this.sortTabFlag1 = true
        this.maskFlag = true
      } else if (event.target.id === 'sort-tab2' && this.sortTabFlag2 === false) {
        this.sortTabFlag1 = false
        this.sortTabFlag2 = true
        this.maskFlag = true
      } else {
        this.sortTabFlag1 = false
        this.sortTabFlag2 = false
        this.maskFlag = false
      }
    },
    routerBack () {
      this.$router.back()
    },
    getTitle () {
      this.title = this.titleList[this.index]
      return this.title
    }
  },
  components: {
    SellerShow
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../../../static/css/common.less";
  .sort-enter-active, .sort-leave-active{
    transition: all 0.15s;
  }

  .sort-enter, .sort-leave-to{
    transform: translate3d(100%, 0, 0);
  }

  .head{
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    background: rgb(255, 46, 75);
    z-index: 10;
  }
  .back{
    margin-left: 19px;
    width: 10px;
    height: 18px;
    background: url("../../../assets/icons/back_arrow.jpg") no-repeat;
  }
  .title{
    font-size: 18px;
    color: #fff;
  }
  .searchBtn{
    margin-right: 15px;
    width: 21px;
    height: 21px;
    background: url("../../../assets/icons/search.jpg") no-repeat;
  }

  .content{
    position: relative;
    z-index: 6;
  }

  .mask-lay-enter-active, .mask-lay-leave-active{
    transition: all 0.2s linear;
  }

  .mask-lay-enter, .mask-lay-leave-to{
    opacity: 0;
  }

  .mask{
    z-index: 5;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }

  .sorttabs-enter-active, .sorttabs-leave-active{
    transition: all 0.2s;
  }

  .sorttabs-enter{
    transform: translate3d(0, -100%, 0);
  }

  .sort-setting{
    z-index: 10;
    display: flex;
    width: 100%;
    height: 40px;
    .border-1px(#eeeeee);
    background: #fff;
  }
  .sort-by-custom{
    width: 50%;
  }
  .sort-by-spec{
    width: 50% - 1px;
  }
  .sort-style{
    position: relative;
    height: 40px;
    background: url("../../../assets/icons/expand_arrow.jpg") 106px 18px no-repeat;
    font-size: 13px;
    text-indent: 72px;
    line-height: 40px;
    color: #4d4d4d;
  }
  .divider{
    width: 1px;
    height: 40px;
    background: url("../../../assets/icons/divider.jpg") 0 12px no-repeat;
  }
  .sort-tab{
    position: absolute;
    top: 40px;
    width: 100%;
    background: #fff;
    z-index: 6;
  }
  .sort-tab-cont{
    li{
        margin:0 auto;
        width: 92%;
        height: 45px;
        .border-1px(#efefef);
        font-size: 14px;
        line-height: 45px;
        color: #4d4d4d;
        &:last-child{
          border: none;
        }
    }
  }

  .sort-list-selected{
    color: #fe2947;
    background: url("../../../assets/icons/checked.jpg") 327px 17px no-repeat;
  }
</style>
