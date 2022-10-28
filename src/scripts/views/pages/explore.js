/* eslint-disable linebreak-style */
import dbSource from '../../data/db-source';
import {createRestoItemTemplate} from '../templates/template-creator';

const Explore = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Explore The Restaurants</h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await dbSource.exploreRestaurant();
    const restoContainer = document.querySelector('#restaurants');
    restaurants.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Explore;
