/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<p>&copy; 2022 Hagi Azzam Azzikri<br>Final Project Kelas Dasar Pemrograman Web - Dicoding Academy</p><br>
      <div class="links">
      <a href="https://www.facebook.com/hagi.azzama" class="fa fa-facebook"></a>
      <a href="https://twitter.com/hagiaz1" class="fa fa-twitter"></a>
      <a href="https://instagram.com/hagiaz" class="fa fa-instagram"></a>
      <a href="https://www.youtube.com/channel/UCJtDul3Emykt4zt3rLeXn7A" class="fa fa-youtube"></a>
      <a href="https://github.com/hagiaz" class="fa fa-github"></a>
      <a href="https://www.linkedin.com/in/hagi-azzam-108929215/" class="fa fa-linkedin-square"></a>
      </div>`;
  }
}

customElements.define('app-footer', AppFooter);

