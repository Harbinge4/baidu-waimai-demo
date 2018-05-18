import jsonp from './jsonp.js'
import axios from 'axios'

export default function getRestaurant () {
  const url = 'http://waimai.baidu.com/mobile/waimai'

  const options = {
    param: 'jsonpCallback'
  }

  const querys = {
    qt: 'shoplist',
    address: '拱墅区人民政府',
    lat: 3523730.48,
    lng: 13374944.12,
    page: 2,
    count: 20,
    display: 'json'
  }

  return jsonp(url, querys, options)
}

export function getRestByAjax (index) {
  let url = '/api/shopinfo'

  url += '?pg=' + index

  return axios.get(url).then((response) => {
    return Promise.resolve(response.data)
  })
}
