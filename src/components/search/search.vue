<template>
  <div class="search">
    <div class="head">
      <div class="backBtn" @click="routerBack">
        <img src="../../assets/icons/search-back.png" />
      </div>
      <div class="title">搜索周边商户</div>
    </div>
    <div class="search-bar">
      <div class="search-text">
        <img width="21px" height="21px" src="../../assets/icons/searchicon.png" />
        <input type="text" placeholder="输入商户名称"/>
      </div>
      <div class="searchBtn">搜索</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  methods: {
    routerBack () {
      this.$router.back()
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import '../../../static/css/common.less';
  .head{
    position: relative;
    height: 50px;
    background: #f9fdff;
    .border-1px(#d9e0ec);
    .backBtn{
      position: absolute;
      left: 19px;
      top: 18px;
      width: 10px;
      height: 18px;
    }
    .title{
      text-align: center;
      font-size: 18px;
      color: #4d4d4d;
      line-height: 50px;
    }
  }
  .search-bar{
    position: relative;
    height: 48px;
    .border-1px(#d9e0ec);
    .search-text{
      display: flex;
      align-items: center;
      position: absolute;
      left: 15px;
      top: 7px;
      width: 77%;
      border-radius: 3px;
      background: #f6f6f6;
      img{
        margin: 0 7px 0 4px;
      }
      input{
        flex: 1;
        width: 100%;
        height: 34px;
        background: #f6f6f6;
        outline: none;
        font-size: 15px;
      }
    }
    .searchBtn{
      position: absolute;
      top: 7px;
      right:15px;
      width: 50px;
      height: 34px;
      border-radius: 3px;
      text-align: center;
      line-height: 34px;
      font-size: 14px;
      background: #fe2947;
      color: #fff;

    }
  }
</style>
