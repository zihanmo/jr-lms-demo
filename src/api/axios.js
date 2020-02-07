import axios from 'axios';

axios.defaults.baseURL = 'https://jr-cms.herokuapp.com/v1';

export const get = (url, config = {}) =>
    axios.get(url, config);

export const post = (url, data, config = {}) =>
    axios.post(url, data, config);

export const put = (url, data, config = {}) =>
    axios.put(url, data, config);

export const del = (url, config = {}) =>
    axios.delete(url, config);
