import axios from 'axios'

export function getShopDetail (id) {
  let url = '/api/restaurant'

  url += '?restid=' + id

  return axios.get(url).then(res => {
    return Promise.resolve(res.data)
  })
}
