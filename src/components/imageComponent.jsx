import React from 'react';
import '../Styles/ImageComponent.css';
import Axios from 'axios';


class ImageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        caption: '',
        tags: [],
        comments: '',
        likes: [],
      },
    };
  }

  componentDidMount() {
    Axios.get('https://mcr-codes-image-sharing-api.herokuapp.com/images', this.state.fields)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <React.Fragment>

        <div className="imageCard">
          <div className="imageCardLogo">
            <i className="fas fa-image" />

          </div>

          <div className="srcProp">
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
            <img src="#" />
          </div>
        </div>
      </React.Fragment>

    );
  }
}

export default ImageComponent;
