import axios from 'axios';
import config from '../config/default';

// Add a request interceptor
axios.interceptors.request.use(conf => {
  // Do something before request is sent
  const confRet = conf;
  const CHALLENGES_API_PATH = `${config.challenges.url}${config.challenges.apiRootPath}`;
  if (confRet.url.indexOf(`${CHALLENGES_API_PATH}/`) > -1) { // if challenges API path
    confRet.headers.Authorization = config.challenges.authorization;
  }

  return confRet;
}, error =>
  // Do something with request error
  Promise.reject(error)
);

// Add a response interceptor
/* axios.interceptors.response.use(response =>
  // Do something with response data
  response, error =>
  // Do something with response error
  Promise.reject(error)
); */
