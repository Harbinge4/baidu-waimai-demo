<template>
  <div id="head-wrapper">
    <div class="searchBtn" @click="toSearch"></div>
    <div class="location"><a href="javascript:void(0);">杭州市拱墅区<i></i></a></div>
    <div class="userCenterBtn"></div>
  </div>
</template>

<script>
export default {
  name: 'index-head',
  methods: {
    toSearch () {
      this.$router.push('/search')
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  #head-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color:rgba(255, 46, 75, 1);
  }

  .searchBtn{
    margin-left: 9px;
    width: 21px;
    height: 21px;
    background: url("../../assets/icons/search.jpg") no-repeat;
  }

  .userCenterBtn{
    margin-top: 2px;
    margin-right: 15px;
    width: 30px;
    height: 30px;
    background: url("../../assets/icons/userCenter.jpg") no-repeat;
  }

  .location {
    a{
      font-size: 18px;
      color: #fff;
      i {
        position: relative;
        top: 17px;
        left: 5px;
        width: 0;
        height: 0;
        overflow: hidden;
        border-top: 8px solid #fff;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: 8px solid transparent;
      }
    }

  }

</style>
