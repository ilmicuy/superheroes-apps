class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#searchElement").value;
  }

  render() {
    this.innerHTML = `
        <style>
        .search-container {
          max-width: 800px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          padding: 16px;
          border-radius: 50px;
          display: flex;
          position: sticky;
          top: 10px;
          background-color: rgb(50, 130, 184);
          z-index: 999;
          margin: 2rem auto;
        }
        
        .search-container > input {
          width: 75%;
          padding: 16px;
          border-radius: 50px;
          border: 0;
          border-bottom: 1px solid cornflowerblue;
          font-weight: bold;
          background-color: rgb(187, 225, 250);
        }
        
        .search-container > input:focus {
          outline: 0;
          border-bottom: 2px solid cornflowerblue;
        }
        
        .search-container > input:focus::placeholder {
          font-weight: bold;
        }
        
        .search-container > input::placeholder {
          color: rgb(15, 76, 117);
          font-weight: normal;
        }
        
        .search-container > button {
          width: 23%;
          cursor: pointer;
          margin-left: auto;
          padding: 16px;
          border-radius: 50px;
          background-color: rgb(15, 76, 117);
          color: white;
          border: 0;
          text-transform: uppercase;
        }
        
        @media screen and (max-width: 550px) {
          .search-container {
            flex-direction: column;
            position: static;
          }
        
          .search-container > input {
            width: 100%;
            margin-bottom: 12px;
          }
        
          .search-container > button {
            width: 100%;
          }
        }
        </style>
        <div id="search-container" class="search-container">
          <input placeholder="Search Super Heroes" id="searchElement" type="search">
          <button id="searchButtonElement" type="submit">Search</button>
        </div>
      `;

    this.querySelector("#searchButtonElement").addEventListener(
      "click",
      this._clickEvent
    );
  }
}

customElements.define("search-bar", SearchBar);
