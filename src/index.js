import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/youtube/search_bar';
import VideoList from './components/youtube/video_list';
import YTSearch from 'youtube-api-search';

const YOUTUBE_API_KEY = 'AIzaSyBDURW3R1T9q2cWT1tTIaP8dNx8ivryPxU';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: {} };

    YTSearch({key: YOUTUBE_API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));

//const GMAIL_API_KEY = '640149538778-6qpkv6hr7fld762i34rprcq81gc4sb07.apps.googleusercontent.com';

/*
 ----- THIS IS FROM THE GOOGLE EXAMPLE -----
 ----- https://developers.google.com/maps/documentation/javascript/earthquakes -----

 // Create a script tag and set the USGS URL as the source.
 var script = document.createElement('script');

 script.src = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp';
 document.getElementsByTagName('head')[0].appendChild(script);

 */