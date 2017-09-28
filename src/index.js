import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/youtube/search_bar';
import VideoList from './components/youtube/video_list';
import VideoDetail from './components/youtube/video_detail';
import YTSearch from 'youtube-api-search';

const YOUTUBE_API_KEY = 'AIzaSyBDURW3R1T9q2cWT1tTIaP8dNx8ivryPxU';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: YOUTUBE_API_KEY, term: 'digitalslomads'}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
