import axios from 'axios';
import utils from '../utils';

const api = axios.create({
  baseURL: utils.api.baseURL,
  params: utils.api.params
});

export default api;