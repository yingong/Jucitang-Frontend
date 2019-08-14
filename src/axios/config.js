import axios from 'axios';
const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/apis/',
  timeout: 2000,
  // headers: { 'Access-Control-Allow-Origin': 'foobar' },
});

export default instance;
