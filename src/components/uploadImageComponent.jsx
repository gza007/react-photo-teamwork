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

  handlenonClick = (event) => {
    axios.post('https://mcr-codes-image-sharing-api.herokuapp.com/images')
      .then((response) => {

      });
  };

  componentDidMount() {

  }


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
              <input name="caption" placeholder="Add A Caption" type="text" />
            </div>
            <div className="tags-div">
              <label htmlFor="Tags">Tag Away:</label>
              <input name="tags" placeholder="Tags" type="text" />
            </div>
            <div>
              <input name="image" type="file" />
              <button type="submit" className="upload-image-button" onClick={this.handlenonClick}>Upload</button>
            </div>
          </form>
        </div>
      </React.Fragment>

    );
  }
}

export default UploadImage;
