import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/thumb-card.scss';

const ThumbCard = (props) => {
  return (
    <div className="thumb-card">
      <span className="user-name">
        {
          `${props.image.user.firstName} ${props.image.user.lastName}`
        }
      </span>
      <Link to={{ pathname: `/images/${props.image._id}`, state: { image: props.image } }}>
        <img className="image-link" src={props.image.thumb} alt={props.image.caption} />
      </Link>
    </div>
  );
};

export default ThumbCard;
