import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/youtube/search_bar';

const YOUTUBE_API_KEY = 'AIzaSyBDURW3R1T9q2cWT1tTIaP8dNx8ivryPxU';


const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));
