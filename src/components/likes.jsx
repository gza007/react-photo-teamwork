import React from 'react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faHeart);

const Likes = (props) => {
  return (
    <div>
      <FontAwesomeIcon
        icon="heart"
        className="icon-heart"
        onClick={props.imageLike}
      />
      {props.likes}
    </div>
  );
};

export default Likes;
