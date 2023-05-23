import "../component/hero-list.js";
import "../component/search-bar.js";
import DataSource from "../data/data-source.js";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const heroListElement = document.querySelector("hero-list");

  const onButtonSearchClicked = () => {
    searching(searchElement.value);
  };

  const searching = async (keyword) => {
    try {
      const result = await DataSource.searchHero(keyword);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const searchingHeroes = async () => {
    try {
      const result = await DataSource.searchHeroes();
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  searchingHeroes();

  const renderResult = (results) => {
    heroListElement.heroes = results;
  };

  const fallbackResult = (message) => {
    heroListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
