class heroItem extends HTMLElement {
  set hero(hero) {
    this._hero = hero;
    console.log(this._hero);
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="col mb-4">
          <div class="card" style="width: 18rem;">
            <img src="${this._hero.image.url}" class="card-img-top" alt="Image">
            <div class="card-body">
              <h3 class="card-title">${this._hero.name}</h3>
              <h5 class="card-text">${this._hero.biography["full-name"]}.</h5>
              <p class="card-text">${this._hero.connections["group-affiliation"]}.</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Intelligence: ${this._hero.powerstats.intelligence}</li>
              <li class="list-group-item">Strength: ${this._hero.powerstats.strength}</li>
              <li class="list-group-item">Speed: ${this._hero.powerstats.speed}</li>
              <li class="list-group-item">Durability: ${this._hero.powerstats.durability}</li>
              <li class="list-group-item">Power: ${this._hero.powerstats.power}</li>
              <li class="list-group-item">Combat: ${this._hero.powerstats.combat}</li>
            </ul>
          </div>
        </div>
      `;
  }
}

customElements.define("hero-item", heroItem);
