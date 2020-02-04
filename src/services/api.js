import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
  baseUrl: 'http://localhost:3000/',
});

api.interceptors.request.use(config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  }
});

export default api;
