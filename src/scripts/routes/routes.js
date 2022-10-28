/* eslint-disable linebreak-style */

import Explore from '../views/pages/explore';
import Detail from '../views/pages/detail';
import Favorites from '../views/pages/favorites';

const routes = {
  '/': Explore, // default page
  '/explore': Explore,
  '/favorites': Favorites,
  '/detail/:id': Detail,
};

export default routes;
