import axios from 'axios';
import config from '../config';

// todo :: add bearer token if login

const requests = {
  get: async (path, query = {}) => {
    const res = await axios.get(`${config.api_uri}${path}`, { params: query });
    return res;
  },
  post: async (path, body = {}) => {
    console.log('config.api_uri', config.api_uri)
    console.log('path', path)
    const res = await axios.post(`${config.api_uri}${path}`, body);
    return res;
  },
}

export default requests;