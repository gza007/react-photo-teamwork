/* eslint-disable no-console */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unused-state */
import React from 'react';
import '../Styles/ImageCardComponent.css';
import axios from 'axios';
import TokenManager from '../utils/token-manager';
import CommentCard from './comment-card';

class ImageCardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      fields: {
        _id: this.props.image._id,
        caption: this.props.image.caption,
        tags: this.props.image.tags,
        comments: this.props.image.comments,
        likes: this.props.image.likes,
        src: this.props.image.src,
        isLiked: this.props.image.isLiked,
      },
    };
  }

  handleCommentChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

<<<<<<< HEAD
  handleOnClick = (event) => {
    axios.patch(`/${this.state.fields._id}/likes`, null, {
=======
  handleComment = () => {
    axios.post(`https://mcr-codes-image-sharing-api.herokuapp.com/images/${this.state.fields._id}/comments`, { content: this.state.comment }, {
      headers: {
        Authorization: TokenManager.getToken(),
      },
    });
  };

  handleLike = (event) => {
    axios.patch(`https://mcr-codes-image-sharing-api.herokuapp.com/images/${this.state.fields._id}/likes`, null, {
>>>>>>> 7b9b675831b68922feb3d76c426cd88249f8f510
      headers: {
        Authorization: TokenManager.getToken(),
      },

    })
      .then((response) => {
        this.setState({
          fields: response.data,
        });
      });

    event.preventDefault();
  };

  render() {
    return (
      <div className="imageCard">
        <div className="imageCardLogo">
          <i className="fas fa-image" />
        </div>
        <div className="theImage">
          <img src={this.state.fields.src} />
        </div>
<<<<<<< HEAD
        <div className="caption">
          <i className="fas fa-comment" />
          {this.state.caption}
        </div>
        <div className="tagProp">
          <i className="fas fa-hashtag" />
          {this.state.fields.tags}
        </div>
        <div className="commentProp">
          <i className="far fa-comments" />
          {this.state.fields.comments.content}
        </div>
        <div className="likesProp">
          <i className="fas fa-thumbs-up" />
          {this.state.fields.likes}
        </div>

        <div>
          <label> Add a comment  </label>
          <input name="comments" type="text" className="input-comments"></input>
          <button className="commentsButton" type="submit">Comment</button>
          <button className="likesButton" type="submit" onClick={this.handleOnClick}><i className="fas fa-heart" />Like</button>


=======
        <div className="interaction-div">
          <div className="caption">
            <i className="fas fa-comment" />
            {this.state.fields.caption}
          </div>
          <div className="tagProp">
            <i className="fas fa-hashtag" />
            {this.state.fields.tags}
          </div>
          <div className="commentProp">
            <i className="far fa-comments" />
            {this.state.fields.comments.map((comment) => {
              return (
                <CommentCard
                  key={comment._id}
                  author={comment.author}
                  message={comment.content}
                />
              );
            })}
          </div>
          <div className="likesProp">
            <i className="fas fa-thumbs-up" />
            {this.state.fields.likes}
          </div>
          <div>
            <label> Add a comment  </label>
            <input
              type="text"
              name="comment"
              className="input-comments"
              value={this.state.comment}
              onChange={this.handleCommentChange}
            />
            <button
              className="commentsButton"
              type="submit"
              onClick={this.handleComment}
            >
              Comment
            </button>
            <button className="likesButton" type="submit" onClick={this.handleLike}><i className="fas fa-heart" />Like</button>
          </div>
>>>>>>> 7b9b675831b68922feb3d76c426cd88249f8f510
        </div>
      </div>
    );
  }
}

export default ImageCardComponent;
