/* eslint-disable react/no-unused-state */
import React from 'react';
import '../Styles/ImageCardComponent.css';


class ImageCardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caption: '',
      tags: [],
      comments: [],
      likes: 0,
      src: '',

    };
  }

  render() {
    return (

      <div className="imageCard">
        <div className="imageCardLogo">
          <i className="fas fa-image" />

        </div>

        <div className="caption">
          <i className="fas fa-comment" />{this.props.caption}
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
        <div className="theImage">
          {this.props.src}
          <img src="#" />
        </div>
      </div>

    );
  }
}

export default ImageCardComponent;
