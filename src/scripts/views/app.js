/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import '../component/app-bar';
import '../component/app-footer';

class App {
  constructor({button, drawer, content}) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });

    // kita bisa menginisiasikan komponen lain bila ada
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('keypress', (event) => {
      event.preventDefault();
      document.querySelector('#mainContent').focus();
    });
  }
}

export default App;
