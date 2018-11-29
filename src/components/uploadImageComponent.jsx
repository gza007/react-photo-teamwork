/* eslint-disable react/self-closing-comp */
import React from 'react';
import '../Styles/uploadImageComponent.css';
import Axios from 'axios';

class UploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {
      file: null,
      image: {
        caption: '',
        tags: [],
        comments: [],
        likes: '',

      },
    };
  }

  handleonClick = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });
  };

  handleFileUpload = () => {
    const formData = new FormData();
    formData.append('image', this.state.selectedFile, this.state.selectedFile.name);
    Axios.post('https://mcr-codes-image-sharing-api.herokuapp.com/images');
  };

  render() {
    return (
      <div className="upload-form">
        <form>
          <div className="upload-image">
            <label htmlFor="Image">Upload An Image</label>
            <input type="file" onChange={this.handleFile}></input>
            <button className="submit-button" type="submit" onClick={this.handleonClick}>Submit</button>
          </div>

        </form>

      </div>

    );
  }
}

export default UploadImage;
