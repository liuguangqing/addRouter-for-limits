import ax from './axios';
import qs from 'qs';

let access_token: any = window.localStorage.getItem('access_token') || 'default_token'

const service = (config: any, data: any = '') => {
  const cfg = Object.assign({ method: 'post', url: 'service/url?' }, config);
  cfg.data = qs.stringify(data);
  return new Promise((resolve, reject) => {
    ax(cfg)
      .then((res: any) => {
        const data = res.data;
        if ((data.status === 'error' || data.status === 0) && data.msg){ // TODO 错误提示需要抽出来
          console.error(res)
        }
        resolve(data);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
};

export default service;
