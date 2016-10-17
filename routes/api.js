import express from 'express';
import config from 'config';
import axios from 'axios';
import _ from 'lodash';

const router = express.Router();
const gemini = config.get('gemini');

axios.defaults.baseURL = gemini;

router.all('*', (req, res, next) => {
  // Before making API calls, we check if the user has cookie information
  const userId = _.get(req, 'cookies.userId');
  const accessToken = _.get(req, 'cookies.access_token');
  const logString = `${(new Date()).toISOString()} ${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`;

  // TODO: Implement h2logger
  console.log(logString);

  if (!userId || !accessToken) return res.status(401).send('Unauthorized. Please sign in.');

  return next();
});

router.get('/users', (req, res) => {
  const accessToken = _.get(req, 'cookies.access_token');

  const reqConfig = {
    url: '/api/users',
    headers: req.headers,
    params: {
      access_token: accessToken,
    },
  };

  axios.request(reqConfig)
    .then((response) =>
      res.status(response.status).send(response.data)
    ).catch(e => {
      console.log(`Got error: ${e.message}`);
      return res.status(401).send('Unauthorized. Please sign in.');
    });
});

export default router;
