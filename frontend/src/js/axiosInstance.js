import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://43.201.210.173:9000/',
});

export default instance;