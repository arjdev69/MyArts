import axios from 'axios';
import {URL} from 'utils/Constants';

const api = axios.create({
  baseURL: URL.auth,
});

export default api;
