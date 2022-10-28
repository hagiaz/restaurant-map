/* eslint-disable new-cap */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-undef */

Feature('liking restaurant');
const assert = require('assert');

Before(({I}) => {
  I.amOnPage('/#/favorites');
});

Scenario('Liking THEN unliking ONE restaurant', async ({I}) => {
  I.amOnPage('/');
  I.waitForElement('.resto-item__content', 10);

  // Menyukai sebuah restoran
  const firstResto = locate('h3').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorites');
  I.waitForElement('.resto-item', 10);
  I.seeElement('.resto-item');

  // Memastikan bahwa restoran yang disukai sudah benar
  const firstLikedResto = locate('h3').first();
  const likedRestoName = await I.grabTextFrom(firstLikedResto);
  assert.strictEqual(firstRestoName, likedRestoName);

  // Membatalkan aksi menyukai restoran
  I.click(firstLikedResto);
  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Memastikan bahwa sudah tidak ada restoran di favorit
  I.amOnPage('/#/favorites');
  I.see('There is none to show.', '.favorite_none');
});
