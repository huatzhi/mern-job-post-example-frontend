import axios from 'axios';
import config from '../config';
import store from "../store/store";

function getToken() {
  const state = store.getState();
  return state.auth.token;
}

const requests = {
  get: async (path, query = {}) => {
    const token = getToken();

    let axiosConfig = { params: query };
    if (token) {
      axiosConfig.headers = { Authorization: token };
    }

    const res = await axios.get(`${config.api_uri}${path}`, axiosConfig);
    return res;
  },
  post: async (path, body = {}) => {
    const token = getToken();

    let axiosConfig = {};
    if (token) {
      axiosConfig.headers = { Authorization: token };
    }

    const res = await axios.post(`${config.api_uri}${path}`, body, axiosConfig);
    return res;
  },
}

export default requests;