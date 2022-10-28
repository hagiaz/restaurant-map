/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import UrlParser from '../../routes/url-parser';
import dbSource from '../../data/db-source';
import {createRestoDetailTemplate} from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-presenter';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="review" class="review"></div>
      <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await dbSource.detailRestaurant(url.id);
    const restoContainer = document.querySelector('#restaurant');

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
        city: restaurant.city,
      },
    });

    restoContainer.innerHTML = createRestoDetailTemplate(restaurant);
  },
};

export default Detail;
