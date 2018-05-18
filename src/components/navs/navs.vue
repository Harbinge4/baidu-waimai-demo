<template>
  <div class="nav-wrapper">
    <div class="nav-links">
      <ul id="nav-list">
        <li v-for="(item, index) in navKey" :key="'nav'+ index" @click="_sortShow($event, index)">
          <img :src="item.icon" />
          <i>{{item.type}}</i>
        </li>
      </ul>
    </div>
    <div class="ads">
      <a href="javascript:;"><img src="../../assets/ad.jpg" /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navs',
  data () {
    return {
      navKey: [
        {'type': '餐饮', 'icon': require('../../assets/icons/nav/nav_1.png')},
        {'type': '早餐', 'icon': require('../../assets/icons/nav/nav_2.png')},
        {'type': '下午茶', 'icon': require('../../assets/icons/nav/nav_3.png')},
        {'type': '夜宵', 'icon': require('../../assets/icons/nav/nav_4.png')},
        {'type': '百度专送', 'icon': require('../../assets/icons/nav/nav_5.png')},
        {'type': '超市购', 'icon': require('../../assets/icons/nav/nav_6.png')},
        {'type': '水果生鲜', 'icon': require('../../assets/icons/nav/nav_7.png')},
        {'type': '送药上门', 'icon': require('../../assets/icons/nav/nav_8.png')},
        {'type': '品牌馆', 'icon': require('../../assets/icons/nav/nav_9.png')},
        {'type': '新店特惠', 'icon': require('../../assets/icons/nav/nav_10.png')}
      ]
    }
  },
  methods: {
    _sortShow (event, index) {
      this.$router.push(`/sortdetail/${index}`)
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .nav-wrapper{
    width: 100%;
    height: 338px;
  }

  #nav-list{
    display: flex;
    margin-bottom: 26px;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    li{
      width: 20%;
      height: 80px;
      text-align: center;
      img{
        margin-top: 20px;
        width: 40px;
        height: 40px;
      }
      i{
        display: block;
        margin-top: 7px;
        font-size: 12px;
        font-style: normal;
        color: #4d4d4d;
      }
    }
  }

  .ads{
    margin: 0 auto;
    width: 355px;
    height: 130px;
    a{
      display: block;
      img{
        width: 355px;
        height: 130px;
      }
    }
  }
</style>
