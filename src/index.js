import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/youtube/search_bar';
import VideoList from './components/youtube/video_list';
import YTSearch from 'youtube-api-search';

const YOUTUBE_API_KEY = 'AIzaSyBDURW3R1T9q2cWT1tTIaP8dNx8ivryPxU';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: YOUTUBE_API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
