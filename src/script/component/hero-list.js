import "./hero-item.js";

class heroList extends HTMLElement {
  set heroes(heroes) {
    this._heroes = heroes;
    this.render();
  }

  render() {
    this.innerHTML = "";
    this.className = "row row-cols-auto justify-content-center";
    this._heroes.forEach((hero) => {
      const heroItemElement = document.createElement("hero-item");
      heroItemElement.hero = hero;
      this.appendChild(heroItemElement);
    });
  }

  renderError(message) {
    this.innerHTML = `
        <style>
        .placeholder {
            font-weight: lighter;
            color: rgba(0,0,0,0.5);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        </style>
        <h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define("hero-list", heroList);
