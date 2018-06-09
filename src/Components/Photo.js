import React from 'react';

const Photo = props => (
  <li className="photo">
    <a href={`https://www.flickr.com/photo.gne?id=${props.pathId}`} target="_blank">
      <img src={props.url} alt=""/>
    </a>
  </li>
);

export default Photo;