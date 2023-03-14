import axios from 'axios';

const API = {
  async get() {
    const url = 'http://localhost:3001/api/comments/';
    const response = await axios.get(url);
    return response.data.data.result;
  },
};

export default API;
