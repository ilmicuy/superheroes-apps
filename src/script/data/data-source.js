class DataSource {
  static searchHeroes() {
    return fetch("https://superheroapi.com/api/6020307218082098/search/id")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }

  static searchHero(keyword) {
    if (keyword !== "") {
      return fetch(
        `https://superheroapi.com/api/6020307218082098/search/${keyword}`
      )
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          if (responseJson.results) {
            return Promise.resolve(responseJson.results);
          } else {
            return Promise.reject(`${keyword} is not found`);
          }
        });
    } else {
      return this.searchHeroes();
    }
  }
}

export default DataSource;
