const OPEN_WEATHER_API_KEY = 'e46937cae3f603b5cb4dcf80d18f0cf9';

export function selectBook(book) {
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
