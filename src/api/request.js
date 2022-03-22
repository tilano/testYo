import axios from 'axios';
import  {url}  from './../constants/constants'
export const Request = {
  async getMethod(params) {
    return await axios({
      method: 'get',
      url: `${url}/${params.url}`,
      timeout: 30000,
      headers: {
        'Content-Type':
          'application/json',
        Accept: 'application/json',
      },
    }).then(function(response) {
      return response;
    }).catch((err) => {
      console.log(err);
    });
  },

  async postMethod(params) {
    return await axios({
      method: 'post',
      url: `${url}/${params.url}`,
      timeout: 30000,
      headers: {
        'Content-Type':
          'application/x-www-form-urlencoded; charset=UTF-8; multipart/form-data; application/json',
        Accept: 'application/json',
      },
      params: params.body,
    }).then(function(response) {
      return response;
    });
  },
};
