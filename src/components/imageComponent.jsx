import React from 'react';
import '../Styles/ImageComponent.css';


class ImageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
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
        <div className="theImage">
          <img src="#" />
        </div>
        <div className="tagProp">
          <i className="fas fa-hashtag" />
        </div>
        <div className="commentProp">
          <i className="far fa-comments" />
        </div>
        <div className="likesProp">
          <i className="fas fa-thumbs-up" />
        </div>

      </div>
    );
  }
}

export default ImageComponent;
