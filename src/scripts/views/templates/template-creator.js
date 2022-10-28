/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (restaurant) => `
  <h2 class="resto_name">${restaurant.name}</h2>
  <img class="resto_poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <h2>Information</h2><br>
  <div class="resto_info">
    <h4>Name</h4>
    <p>${restaurant.name}</p>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}/5</p>
  </div>
  <br>
  <div class="resto_overview">
    <h1>Overview</h1>
    <p>${restaurant.description}</p>
  </div><br>
  <h1>Menus</h1><br>
  <div class="resto_menu">
    <div class="resto_foods">
      <h2>Foods</h2>
      <p>${restaurant.menus.foods.map((foods) => `
      <p>${foods.name}</p>
      `).join('')}
    </div>

    <div class="resto_drinks">
      <h2>Drinks</h2>
      <p>${restaurant.menus.drinks.map((drinks) => `
      <p>${drinks.name}</p>
      `).join('')}
    </div>
  </div><br><br>
  <h2>Customer Reviews</h2><br>
  <div class="resto_reviews">
    <p>${restaurant.customerReviews.map((review) => `
    <p><b>${review.name}</b></p>
    <p>"${review.review}"</p>
    <p>${review.date}</p>
    `).join('<br>')}
  </div><br>
`;

const createRestoItemTemplate = (restaurants) => `
  <div class="resto-item">
    <div class="resto-item__header">
      <img class="resto-item__header__poster lazyload"
        data-src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="${restaurants.name}">
      <div class="resto-item__header__rating">
        <p>⭐️<span class="resto-item__header__rating__score">${restaurants.rating}</span></p>
      </div>
    </div>
    <div class="resto-item__content">
      <h3><a href="/#/detail/${restaurants.id}">${restaurants.name}</a></h3>
      <p>${restaurants.description}</p>
    </div>
    <a href="/#/detail/${restaurants.id}" class="buttondetail">Detail</a>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="unlike">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
};
