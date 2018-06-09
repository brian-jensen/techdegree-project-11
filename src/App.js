import React, { Component } from 'react';
import './App.css';

import apiKey from './config';
import axios from 'axios';
import PhotosList from './Components/PhotosList';

class App extends Component {

  state = {
    photos: []
  }

  async componentDidMount() {
    try {
      const response = await axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=dinasaurs&per_page=16&sort=relevance&content_type=1&format=json&nojsoncallback=1`);
      const photos = response.data.photos.photo;
      this.setState({
        photos
      });
    } catch (error) {
      console.log('Error fetching flickr API data', error);
    }
  }

  render() {
    return (
      <main>
        <PhotosList data={this.state.photos} />
      </main>
    );
  }
}

export default App;
