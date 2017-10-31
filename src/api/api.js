import axios from 'axios';
let base = 'http://dingzhi.diyuapp.com/freeweb';
export const requestLogin = params => {
     return axios.post(`${base}/login`, params).then(res => res.data);
     };
     
export const yzimage = params => {
     return axios.get(`${base}/api/yzimage?uuid=NyM66J3xB5qGY7HQ&m=0.019600493055879742`, params).then(res => res.data);
     };