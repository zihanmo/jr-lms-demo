import axios from 'axios';
import { getToken } from '../auth';

axios.defaults.baseURL = 'https://jr-cms.herokuapp.com/v1';

export const post = (url, data, config = {}) => {
    const jwtToken = getToken();
    const Authorization = jwtToken && `Bearer ${jwtToken}`;
    return axios.post(url, data, { ...config, headers: { Authorization, ...config.header } });
}