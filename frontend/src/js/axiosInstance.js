import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://52.79.164.196:9000/',
});

export default instance;