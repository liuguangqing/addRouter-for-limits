import as from './axios';
import qs from 'qs';

const service = (config: any, data: any = '') => {
  const cfg = Object.assign({ method: 'post'}, config);
  cfg.data = qs.stringify(data);
  return new Promise((resolve, reject) => {
    as(cfg)
      .then((res: any) => {
        const data = res.data;
        if ((data.status === 'error' || data.status === 0) && data.msg){
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
