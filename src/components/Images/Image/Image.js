import React from 'react';

import './Image.css';

const image = props => (
  <a 
    href={props.href}
    className="Image"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div style={{ backgroundImage: `url(${props.url})`}} className="Image__container">
    </div>
  </a>
);

export default image;
