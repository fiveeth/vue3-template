import axios from '@/utils/axios'

export const getUserInfo = () => {
  return axios.request({
    url: '/users/yyx990803',
    method: 'get'
  })
}
