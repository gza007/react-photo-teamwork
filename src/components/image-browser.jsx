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
            <img key={image._id} src={image.thumb} />
          );
        })}
      </div>
      <div><ImageBrowser /></div>
    </div>
  );
}
}

export default ImageBrowser;
