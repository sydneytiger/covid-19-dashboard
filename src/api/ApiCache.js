export default class ApiCache {
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
};