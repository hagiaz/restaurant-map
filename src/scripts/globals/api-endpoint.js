/* eslint-disable linebreak-style *//* eslint-disable max-len */

import CONFIG from './config';

const API_ENDPOINT = {
  EXPLORE: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default API_ENDPOINT;
