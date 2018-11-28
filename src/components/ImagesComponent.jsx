import React from 'react';
import '../Styles/ImagesComponent.css';
import axios from 'axios';
import ImageCardComponent from './imageCardComponent';

class ImagesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      fields: {
        caption: '',
        tags: [],
        comments: [],
        likes: 0,
        src: '',
        isLiked: true,
      },

    };
  }

  componentDidMount() {
    axios.get('https://mcr-codes-image-sharing-api.herokuapp.com/images', this.state.fields)
      .then((response) => this.setState({ images: response.data }));
  }


  render() {
    return (
      <React.Fragment>
        <div className="image-card">
          {this.state.images.map(image => {
            return (
              <div key={image._id} className="col">
                <ImageCardComponent
                  image={image}
                />
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}


export default ImagesComponent;
