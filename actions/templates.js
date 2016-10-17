import axios from 'axios';
import config from '../config/default';

export const CREATE_TEMPLATE = 'CREATE_TEMPLATE';
export const UPDATE_TEMPLATE = 'UPDATE_TEMPLATE';
export const GET_TEMPLATES = 'GET_TEMPLATES';
export const GET_TEMPLATE_BY_ID = 'GET_TEMPLATE_BY_ID';
export const DELETE_TEMPLATE = 'DELETE_TEMPLATE';
export const GET_TEMPLATES_ERROR = 'GET_TEMPLATES_ERROR';
export const UPDATE_TEMPLATE_ERROR = 'UPDATE_TEMPLATE_ERROR';
export const CREATE_TEMPLATES_ERROR = 'CREATE_TEMPLATES_ERROR';

const CHALLENGES_API_PATH = `${config.challenges.url}${config.challenges.apiRootPath}`;

export const createTemplate = (dispatch) => {
  const reqConfig = {
    url: `${CHALLENGES_API_PATH}/templates`,
    method: 'post',
  };

  axios.request(reqConfig)
    .then((response) => {
      dispatch({
        type: CREATE_TEMPLATE,
        templates: response.data,
      });
    })
    .catch(() => {
      dispatch({
        type: CREATE_TEMPLATES_ERROR,
        templates: [],
      });
    });
};

export const getTemplates = (dispatch) => {
  const reqConfig = {
    url: `${CHALLENGES_API_PATH}/templates`,
  };

  axios.request(reqConfig)
    .then((response) => {
      dispatch({
        type: GET_TEMPLATES,
        templates: response.data,
      });
    })
    .catch(() => {
      dispatch({
        type: GET_TEMPLATES_ERROR,
        templates: [],
      });
    });
};

export const getTemplateById = (dispatch, id) => {
  const reqConfig = {
    url: `${CHALLENGES_API_PATH}/templates/${id}`,
  };

  axios.request(reqConfig)
    .then((response) => {
      dispatch({
        type: GET_TEMPLATE_BY_ID,
        templates: response.data,
      });
    });
};

export const updateTemplate = (dispatch, id) => {
  const reqConfig = {
    url: `${CHALLENGES_API_PATH}/templates/${id}`,
    method: 'put',
  };

  axios.request(reqConfig)
    .then((response) => {
      dispatch({
        type: UPDATE_TEMPLATE,
        templates: response.data,
      });
    })
    .catch(() => {
      dispatch({
        type: UPDATE_TEMPLATE_ERROR,
        templates: [],
      });
    });
};

export const deleteTemplate = (dispatch, id) => {
  const reqConfig = {
    url: `${CHALLENGES_API_PATH}/templates/${id}`,
    method: 'delete',
  };

  axios.request(reqConfig)
    .then((response) => {
      dispatch({
        type: DELETE_TEMPLATE,
        templates: response.data,
      });
    });
};
