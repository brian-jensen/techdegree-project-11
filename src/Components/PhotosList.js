import React from 'react';
import Photo from './Photo';
import NoResults from './NoResults';

// Recieves parsed API fetched data from the PhotoContainer Component.
// Builds image gallery url by passing parsed data as props and mapping an array of links for each image.
// Then passes the links to the Photo Component.
const PhotoList = props => {
  const results = props.data;
  let photos;
  if (results.length) {
    photos = results.map(photo =>
      <Photo key={photo.id} url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_n.jpg`} pathId={photo.id} />
    );
  } else {
    // Renders the NoResults Component if no photos on flickr.com match the users text search
    photos = <NoResults />
  }
  return(
    <ul className="photo-list">
      {photos}
    </ul>
  );
}

export default PhotoList;