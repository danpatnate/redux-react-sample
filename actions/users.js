import axios from 'axios';

export const GET_USERS = 'GET_USERS';

export const getUsers = (dispatch) => {
  const reqConfig = {
    url: '/api/users',
  };

  axios.request(reqConfig)
    .then((response) => {
      dispatch({
        type: 'GET_USERS',
        users: response.data,
      });
    });
};
