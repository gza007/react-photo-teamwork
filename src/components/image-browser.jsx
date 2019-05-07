import React from 'react';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
import '../css/image-browser.css';

library.add(faComment, faHeart);

const ImageBrowser = (props) => {
  return (
    <div className="image-grid">
      {props.images.map(image => {
        return (
          <div key={image._id} className="thumbnail-image">
            <div className="image-frame">
              <img src={image.thumb} />
            </div>
            <div className="thumbnail-stats">
              <span>
                <FontAwesomeIcon icon="comment" className="icon"/>
                {image.comments.length}
              </span>
              <span>
                <FontAwesomeIcon icon="heart" className="icon"/>
                {image.likes}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ImageBrowser;
