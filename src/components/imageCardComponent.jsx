/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unused-state */
import React from 'react';
import '../Styles/ImageCardComponent.css';
import axios from 'axios';

class ImageCardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        id: '',
        caption: '',
        tags: [],
        comments: [],
        likes: 0,
        src: '',
        isLiked: true,
      },
    };
  }


  handleOnClick = (event) => {
    axios.patch('https://mcr-codes-image-sharing-api.herokuapp.com/images/:id', {
      likes: this.state.fields.likes += 1,
    })
      .then((response) => {
        console.log(response);
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
          <img src={this.props.src} />
        </div>

        <div className="caption">
          <i className="fas fa-comment" />
          {this.props.caption}
        </div>
        <div className="tagProp">
          <i className="fas fa-hashtag" />
          {this.props.tags}
        </div>
        <div className="commentProp">
          <i className="far fa-comments" />
          {this.props.comments}
        </div>
        <div className="likesProp">
          <i className="fas fa-thumbs-up" />
          {this.props.likes}
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
