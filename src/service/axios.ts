import axios from 'axios';
import getUrl from './url';
import Config from './config';

Config.baseURL = getUrl()
const ax = axios.create(Config);

ax.interceptors.request.use(
  (config: any) => {
    // 添加请求前处理
    config.headers['access_token'] = 'access_token'
    return config;
  },
  (error: any) => {
    // todo 请求前错误处理
    return Promise.reject(error);
  },
);

ax.interceptors.response.use(
  (respone: any) => {
    // todo  处理正常返回值处理
    return respone;
  },
  (error: any) => {
    // todo  处理接口错误处理
    return Promise.reject(error);
  },
);

export default ax;