/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */

import API_ENDPOINT from '../globals/api-endpoint';

class dbSource {
  static async exploreRestaurant() {
    const response = await fetch(API_ENDPOINT.EXPLORE);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default dbSource;
