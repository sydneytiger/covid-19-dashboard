import axios from 'axios';
import ApiCache from './ApiCache';
import {base_url} from '../constaints';

const apiCache = new ApiCache();
const default_expire = 60 * 60 * 1000; // cache one hour

const requestInterceptor = config => {
  if(config.method.toUpperCase() === 'GET'){
    let { url, data, params} = config;
    const key = getKey(url, data, params);
  
    if (apiCache.hasCache(key)) {
      const cacheObj = apiCache.getCache(key);
      const currentTime = new Date().getTime();
      
      if(currentTime < cacheObj.expire){
        console.log('serving cached data');
        config.headers.cached = true;
        config.data = apiCache.getCache(key).result;
        return Promise.reject(config);
      } else {
        apiCache.clearCache(key);
      }
    }
  }

  return config;
}

const responseInterceptor = response => {
  if(response.config.method.toUpperCase() === 'GET'){
    if(response.status !== 200) return response.data;

    let { url, data, params} = response.config;
    const currentTime = new Date().getTime();
    const cacheObj = {
      expire: currentTime + default_expire,
      params,
      data,
      result: response.data
    }
    const key = getKey(url, data, params);;
    apiCache.setCache(key, cacheObj);
  }

  return response;
}

const errorInterceptor = error => {
  if (error.headers.cached === true) {
    console.log('got cached data in response, serving it directly');
    return Promise.resolve(error);
  }
  return Promise.reject(error);
}

const getKey = (url, data, params) => {
  return data ? `${url}?cacheParams=${data}` : `${url}?cacheParams=${params}`;
}

const api = axios.create({
  baseURL: base_url
});

api.interceptors.request.use(
  config => requestInterceptor(config)
);

api.interceptors.response.use(
  response => responseInterceptor(response),
  error => errorInterceptor(error)
);

export default api;