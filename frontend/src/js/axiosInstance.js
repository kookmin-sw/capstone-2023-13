import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://13.209.3.116:8080/',
});

export default instance;