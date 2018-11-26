/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unused-state */
import React from 'react';
import '../Styles/ImageCardComponent.css';
import axios from 'axios';
import TokenManager from '../utils/token-manager';

class ImageCardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        _id: this.props.image._id,
        caption: this.props.image.caption,
        tags: this.props.image.tags,
        comments: this.props.image.comments.content,
        likes: this.props.image.likes,
        src: this.props.image.src,
        isLiked: this.props.image.isLiked,
      },
    };
  }


  handleOnClick = (event) => {
    axios.patch(`https://mcr-codes-image-sharing-api.herokuapp.com/images/${this.state.fields._id}/likes`, null, {
      headers: {
        Authorization: TokenManager.getToken(),
      },
    })
      .then((response) => {
        console.log(response);
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
          {this.state.fields.comments}
        </div>
        <div className="likesProp">
          <i className="fas fa-thumbs-up" />
          {this.state.fields.likes}
        </div>
        <div>
          <label> Add a comment  </label>
          <input name="comments" type="text" className="input-comments"></input>
          <button className="commentsButton" type="submit">Comment</button>
          <button className="likesButton" type="submit" onClick={this.handleOnClick}>Like</button>


        </div>

      </div>

    );
  }
}

export default ImageCardComponent;
