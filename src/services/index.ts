import axios from 'axios';
import {URL} from 'utils/Constants';

export const api = axios.create({
  baseURL: URL.auth,
});

export const apiArt = axios.create({
  baseURL: URL.arts,
});
