import React, {Component} from 'react';

import apiKey from '../config';
import axios from 'axios';
import PhotosList from './PhotosList';

class PhotoContainer extends Component {

  state = {
    photos: [],
    loading: true
  }

  componentDidMount = () => {
    this.performSearch(this.props.match.params.text);
    this.props.history.listen(location => this.performSearch(location.pathname.slice(8)));
  }

  performSearch = (text = 'kittens') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${text}&per_page=16&sort=relevance&content_type=1&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        photos: response.data.photos.photo,
        loading: false
     });
  })
  .catch(error => {
    console.log('Error fetching Flickr API data', error);
  });    
}

  render() {
    return (
      <main> 
        {this.state.loading ? <img className="loading" src={require("../images/flickr.svg")} alt="" /> : <PhotosList data={this.state.photos} />}
      </main>
    );
  }
}

export default PhotoContainer;
