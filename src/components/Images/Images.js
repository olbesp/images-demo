import React from 'react';

import './Images.css';
import Image from './Image/Image';

const images = props => {
  const images = props.images.map(image => (
    <Image 
      key={image.id}
      href={image.links.html}
      url={image.urls.regular}
    />
  ));
  
  return (
    <div className="Images">
      {images}
    </div>
  );
};

export default images;
