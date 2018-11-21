import React from 'react';
import '../Styles/ImageComponent.css';


class ImageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: '',
      caption: '',
      comments: '',
      likes: 0,
    };
  }

  render() {
    return (
      <div className="imageCard">
        <div className="imageCardLogo">
          <i className="fas fa-image" />

        </div>

        <div className="srcProp">
          <h3>Caption:</h3>
        </div>
        <div className="tagProp">
          <i class="fas fa-hashtag"></i>
        </div>
        <div className="commentProp">
          <i class="far fa-comments"></i>
        </div>
        <div className="likesProp">
          <i class="fas fa-thumbs-up"></i>
        </div>
        <div className="theImage">
          <img src="#" />
        </div>
      </div>
    );
  }
}

export default ImageComponent;
