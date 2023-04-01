import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://3.34.124.135:8080/',
});

export default instance;