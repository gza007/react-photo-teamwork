import React from 'react';
import '../Styles/uploadImageComponent.css';
import axios from 'axios';


class UploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {
      fields: {
        src: '',
        caption: '',
        tags: [],
      },
    };
  }

  handleonClick = (event) => {
    axios.post('https://mcr-codes-image-sharing-api.herokuapp.com/images', {
      src: event.target.value,
      caption: event.target.value,
      tags: event.target.value,
    })
      .then((response) => {
        console.log(response);
      });
  };

  render() {
    return (
      <React.Fragment>
        <div className="form-header">
          <h1>Upload An Image</h1>
        </div>
        <div className="upload-form">
          <form>

            <div className="caption-div">
              <label htmlFor="Caption">Add A Caption:</label>
              <input name="caption" placeholder="Add A Caption" />
            </div>
            <div className="tags-div">
              <label htmlFor="Tags">Tag Away:</label>
              <input name="tags" placeholder="Tags" />
            </div>
            <div>
              <input name="image" type="file" accept="iamge/*" />
              <button type="submit" className="upload-image-button" onClick={this.handlenonClick}>Upload</button>
            </div>

          </form>


        </div>

      </React.Fragment>

    );
  }
}

export default UploadImage;
