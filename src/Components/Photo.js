import React from 'react';

// Adds each image as an individual list item inside of the PhotoList component
// Clicking on an image opens the flickr image source
const Photo = props => (
  <li className="photo">
    <a href={`https://www.flickr.com/photo.gne?id=${props.pathId}`} target="_blank">
      <img src={props.url} alt=""/>
    </a>
  </li>
);

export default Photo;