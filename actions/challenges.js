import axios from 'axios';
import config from '../config/default';

export const CREATE_CHALLENGE = 'CREATE_CHALLENGE';
export const UPDATE_CHALLENGE = 'UPDATE_CHALLENGE';
export const GET_CHALLENGES = 'GET_CHALLENGES';

const CHALLENGES_API_PATH = `${config.challenges.url}${config.challenges.apiRootPath}`;

export const updateChallenge = challenge => ({
  type: UPDATE_CHALLENGE,
  status: 'success',
  title: challenge.title,
  description: challenge.description,
});

export const createChalllenge = props => {
  const request = axios({
    method: 'post',
    data: props,
    url: `${CHALLENGES_API_PATH}/stepChallenges`,
  });
  return {
    type: CREATE_CHALLENGE,
    payload: request,
  };
};

export const getChallenges = dispatch => {
  const reqConfig = {
    url: `${CHALLENGES_API_PATH}/stepChallenges`,
  };

  axios.request(reqConfig)
    .then((response) => {
      dispatch({
        type: GET_CHALLENGES,
        challenges: response.data.items,
      });
    });
};
