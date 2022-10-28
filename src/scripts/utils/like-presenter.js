/* eslint-disable linebreak-style */
/* eslint-disable max-len */

import FavoriteRestaurant from '../data/fav-resto';
import {createLikeButtonTemplate, createUnlikeButtonTemplate} from '../views/templates/template-creator';

const LikeButtonPresenter = {
  async init({likeButtonContainer, restaurant}) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const {id} = this._restaurant;

    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const restaurant = await FavoriteRestaurant.getResto(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurant.putResto(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurant.deleteResto(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
