import LikeButtonPresenter from '../../src/scripts/utils/like-presenter';

const createLikeButtonPresenterWithResto = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    restaurant,
  });
};

export {createLikeButtonPresenterWithResto};
