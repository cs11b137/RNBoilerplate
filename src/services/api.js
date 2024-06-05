import axios from 'axios';

const API_BASE_URL = 'https://api.example.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

api.interceptors.response.use(
  response => response.data,
  error => {
    console.error('API Error:', error);
    throw error;
  },
);

export default api;
