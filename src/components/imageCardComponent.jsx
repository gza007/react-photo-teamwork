/* eslint-disable no-console */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unused-state */
import React from 'react';
import '../Styles/ImageCardComponent.scss';
import axios from 'axios';
import TokenManager from '../utils/token-manager';
import CommentCard from './comment-card';

class ImageCardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      fields: {
        _id: this.props.location.state.image._id,
        caption: this.props.location.state.image.caption,
        tags: this.props.location.state.image.tags,
        comments: this.props.location.state.image.comments,
        likes: this.props.location.state.image.likes,
        src: this.props.location.state.image.src,
        isLiked: this.props.location.state.image.isLiked,
      },
    };
  }

  handleDelete = (event) => {
    event.preventDefault();
    axios.delete(
      `http://mcr-codes-image-sharing-api.herokuapp.com/images/${this.props.location.state.image._id}`,
      {
        headers: {
          Authorization: TokenManager.getToken(),
        },
      }
    )
      .then((response) => {
        console.log(response.data);
        window.history.back();
      });
  };

  handleCommentChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  handleComment = () => {
    axios.post(`https://mcr-codes-image-sharing-api.herokuapp.com/images/${this.state.fields._id}/comments`, { content: this.state.comment }, {
      headers: {
        Authorization: TokenManager.getToken(),
      },
    }).then(() => {
      this.setState({
        comment: '',
      });
      axios.get(`https://mcr-codes-image-sharing-api.herokuapp.com/images/${this.state.fields._id}`)
        .then((response) => {
          this.setState({
            fields: response.data,
          });
        });
    });
  };

  handleLike = (event) => {
    axios.patch(`https://mcr-codes-image-sharing-api.herokuapp.com/images/${this.state.fields._id}/likes`, null, {
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
            <button className="deleteButton" type="submit" onClick={this.handleDelete}><i className="fas fa-trash-alt"></i>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageCardComponent;
