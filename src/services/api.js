import axios from 'axios';

const reqres = axios.create({
  baseURL: 'https://reqres.in/',
});

const github = axios.create({
  baseURL: 'https://api.github.com',
});

const api = {
  reqres,
  github,
};

export default api;
