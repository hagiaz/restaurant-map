/* eslint-disable linebreak-style */
import FavoriteRestaurant from '../../data/fav-resto';
import {createRestoItemTemplate} from '../templates/template-creator';

const Favorites = {
  async render() {
    return `
      <div class="content">
      <h2 class="content__heading">Your Favorite Restaurants</h2>
      <div id="restaurants" class="restaurants">
      </div>
      <div id="none" class="none"></div>
    </div>`;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurant.getAllResto();
    const restoContainer = document.querySelector('#restaurants');
    const restoNoneContainer = document.querySelector('#none');

    if (restaurants.length < 1) {
      restoNoneContainer.innerHTML = `<div class="favorite_none">
      <h2>There is none to show.</h2>
      </div>`;
    } else {
      restaurants.forEach((resto) => {
        restoContainer.innerHTML += createRestoItemTemplate(resto);
      });
    }
  },
};

export default Favorites;
