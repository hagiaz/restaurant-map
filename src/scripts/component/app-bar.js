/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */

class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div class="header__inner">
      <h1 class="header__title">
        Restaurant Map
      </h1>
    </div>
    <button id="hamburgerButton">☰</button>`;
  }
}

customElements.define('app-bar', AppBar);
