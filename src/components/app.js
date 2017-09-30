import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar from './youtube/search_bar';
import VideoList from './youtube/video_list';
import VideoDetail from './youtube/video_detail';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

const YOUTUBE_API_KEY = 'AIzaSyBDURW3R1T9q2cWT1tTIaP8dNx8ivryPxU';

export default class App extends Component {
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
    const booksDiv = (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );

    const youtubeDiv = (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos}
        />
      </div>
    );

    return (
      <div>
        {booksDiv}
        {youtubeDiv}
      </div>
    );
    
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
  }
}
