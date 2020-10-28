import axios from 'axios';

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

export default api;
