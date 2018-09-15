import axios from 'axios'
var baseURL = 'http://47.106.167.139:3000'
axios.defaults.baseURL = baseURL

axios.defaults.withCredentials = true

// export const  书写格式参考
// export const gethehe = () => {
//   return axios.get('/employee/employeeLogout').then(res => {
//     return res.data
//   })
// }
