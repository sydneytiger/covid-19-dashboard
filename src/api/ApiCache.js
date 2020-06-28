export default class ApiCache {
  constructor() {
    this.defaultStorage = 'sessionStorage';

    window.onbeforeunload = () => {
      this.mapStorage();
    }
  }

  hasCache(key) {
    return !!window.localStorage.getItem(key)
  }

  getCache(key) {
    const data = window.localStorage.getItem(key);
    return JSON.parse(data);
  }

  setCache(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  clearCache(key) {
    window.localStorage.removeItem(key);
  }

  mapStorage() {
    // let length = window.localStorage.length;
    
    // for(let i = 0; i < length; i++){
    //   const key = window.localStorage.key(i);

    //   if(key.includes='')
    // }
  }

};