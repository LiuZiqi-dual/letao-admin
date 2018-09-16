import axios from 'axios'
var baseURL = 'http://47.106.167.139:3000'
axios.defaults.baseURL = baseURL

axios.defaults.withCredentials = true

// 登陆验证请求
export const getLoginData = (params) => {
  return axios.post('/employee/employeeLogin', params).then(res => {
    return res.data
  })
}
