import {debounce} from './utils.js';

const RENDER_DELAY = 500;

const PRICES = {
  oneMonth: [5000, 1700, 2700],
  sixMonths: [30000, 10200, 16200],
  year: [60000, 20400, 32400]
};

const filtersListElement = document.querySelector('.price__filter');
const pricesElements = document.querySelectorAll('.plan__container');
const shadowPricesElements = document.querySelectorAll('.plan__shadow-price');

const getFilteredPrices = (filterId, prices) => {
  switch (filterId) {
    case 'oneMonth':
      return prices.oneMonth;
    case 'sixMonths':
      return prices.sixMonths;
    case 'year':
      return prices.year;
    default:
      return prices;
  }
};

const renderPrices = (id, prices) => {
  const filteredPrices = getFilteredPrices(id, prices);
  for (let i = 0; i < filteredPrices.length; i++) {
    pricesElements[i].textContent = filteredPrices[i];
    shadowPricesElements[i].textContent = filteredPrices[i];
  }
};

const debouncedRenderPrices = debounce((filterId, prices) => renderPrices(filterId, prices), RENDER_DELAY);

const setFilters = (prices) => {
  filtersListElement.addEventListener('click', (evt) => {
    if (evt.target.matches('.price__button')) {
      const activeFilterButtonElement = filtersListElement.querySelector('.price__button--active');
      activeFilterButtonElement.classList.remove('price__button--active');
      evt.target.classList.add('price__button--active');
      debouncedRenderPrices(evt.target.id, prices);
    }
  });
};

const initFilters = () => {
  setFilters(PRICES);
};

export {initFilters};
