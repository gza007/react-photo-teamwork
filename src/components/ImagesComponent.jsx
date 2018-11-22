import React from 'react';
import '../Styles/ImageCardComponent.css';
import axios from 'axios';
import ImageCardComponent from '../components/imageCardComponent';

class ImagesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        caption: '',
        tags: [],
        comments: [],
        likes: 0,
        src: '',
      },

    };
  }

  componentDidMount() {
    axios.get('https://mcr-codes-image-sharing-api.herokuapp.com/images', this.state.fields)
      .then((response) => this.setState({ fields: response.data }))
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          {
            this.state.images.map(image => (
              <div key={image._id}>
                <ImageCardComponent
                  caption={image.caption}
                  tags={image.tags}
                  comments={image.comments}
                  likes={image.likes}
                  src={image.src}
                />

              </div>
            ))
          }
          />
        </div>
      </React.Fragment>
    );
  }
}


export default ImagesComponent;
