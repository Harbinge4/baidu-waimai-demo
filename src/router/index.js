import Vue from 'vue'
import Router from 'vue-router'
import FrontPage from '@/components/front-page/front-page'
import SortBase from '@/components/common/sort-base/sort-base'
import ShopDetail from '@/components/shop-detail/shop-detail'
import ShopGoods from '@/components/shop-goods/shop-goods'
import Search from '@/components/search/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'front-page',
      component: FrontPage
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/sortdetail/:index',
      component: SortBase
    },
    {
      path: '/sortdetail',
      redirect: '/'
    },
    {
      path: '/shopdetail/:id',
      component: ShopDetail,
      children: [
        {
          name: 'foods',
          path: '',
          component: ShopGoods
        }
      ]
    }
  ]
})
