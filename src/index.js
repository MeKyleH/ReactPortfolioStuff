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

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('digitalslomads');
  }

  videoSearch(term) {
    YTSearch({key: YOUTUBE_API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
