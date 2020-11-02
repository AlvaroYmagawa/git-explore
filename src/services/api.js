import axios from 'axios';
import { showError } from '~/utils/api';

const server = axios.create({
  baseURL: 'http://localhost:3333',
});

const github = axios.create({
  baseURL: 'https://api.github.com',
});

const api = {
  server,
  github,
};

server.interceptors.response.use(
  response => response,
  error => {
    showError(error);
    return Promise.reject(error);
  }
);

export default api;
