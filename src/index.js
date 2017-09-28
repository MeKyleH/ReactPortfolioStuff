import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/youtube/search_bar';
import YTSearch from 'youtube-api-search';

const YOUTUBE_API_KEY = 'AIzaSyBDURW3R1T9q2cWT1tTIaP8dNx8ivryPxU';

YTSearch({key: YOUTUBE_API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
});

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));
