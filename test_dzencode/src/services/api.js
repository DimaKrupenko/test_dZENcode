import axios from 'axios';

const API = {
  async get() {
    const url = 'http://localhost:3001/api/comments/';
    const response = await axios.get(url);
    // console.log(response.data.data.result);
    return response.data.data.result;
  },
};

export default API;
