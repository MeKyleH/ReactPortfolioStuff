import axios from 'axios';

const OPEN_WEATHER_API_KEY = 'e46937cae3f603b5cb4dcf80d18f0cf9';

const WEATHER_ROOT_URL = `http://api.openweathermap.org/data/2.5/forcaset?appid=${OPEN_WEATHER_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const BOOK_SELECTED = 'BOOK_SELECTED';

export function fetchWeather(city) {
  const url = `${WEATHER_ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

export function selectBook(book) {
  return {
    type: BOOK_SELECTED,
    payload: book
  };
}
