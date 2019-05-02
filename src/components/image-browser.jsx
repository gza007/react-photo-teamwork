import React from 'react';
import axios from 'axios';

const URL = 'http://mcr-codes-image-sharing-api.herokuapp.com/images';

class ImageBrowser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      error: '',
    };
  }

getImages = () => {
  axios.get(URL)
    .then(response => {
      this.setState({ ...this.state, images: response.data });
    })
    .catch(() => {
      alert('Error. Please try again');
    });
};

componentDidMount() {
  this.getImages();
}

render() {
  return (
    <div>
      <div>
        {this.state.images.map(image => {
          return (
            <div key={image._id}>
              <img src={image.thumb} />
              <div>
                <span>Comments: {image.comments.length}</span>
                <span>{` Likes: ${image.likes}`}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
}

export default ImageBrowser;
