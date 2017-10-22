import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts';

export const makeGetRequest = () => {
  return axios.get(url)
  .then((response) => {
    return response;
  })
  .catch((error) => {
    return error;
  });
};

export { makeGetRequest as default };
