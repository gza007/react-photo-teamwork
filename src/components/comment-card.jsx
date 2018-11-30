import React from 'react';

import '../Styles/comment-card.scss';

const CommentCard = (props) => {
  return (
    <div className="comment-card">
      <div className="avatar-cropper">
        <img className="avatar" src={props.author.avatar} />
      </div>
      <div className="card-body">
        <div className="comment-author">
          {`${props.author.firstName}  ${props.author.lastName}`}
        </div>
        <div className="comment-message">
          <p>{props.message}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
