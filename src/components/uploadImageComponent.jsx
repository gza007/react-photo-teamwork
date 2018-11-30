/* eslint-disable react/self-closing-comp */
import React from 'react';
import '../Styles/uploadImageComponent.css';
import Axios from 'axios';
<<<<<<< HEAD
=======
import TokenManager from '../utils/token-manager';
>>>>>>> 7b9b675831b68922feb3d76c426cd88249f8f510


class UploadImage extends React.Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
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
=======
    this.State = {
      fields: [{
        user: '',
        src: '',
        thumb: '',
        caption: '',
        tags: [],
        comments: [],
        timestamp: '',
        likes: '',
        isLiked: false,

      },
      ],
      file: null,
    };
  }

  handleFileSelect = () => {
    this.setState({
      file: event.target.files[0],
    });
  };

  handleFileChange = (event) => {
    this.setState({
      fields: {
        ...this.state.fields,
        [event.target.name]: event.target.value,
      },
>>>>>>> 7b9b675831b68922feb3d76c426cd88249f8f510
    });
  };

  handleFileUpload = () => {
    const formData = new FormData();
<<<<<<< HEAD
    formData.append('image', this.state.selectedFile, this.state.selectedFile.name);
    Axios.post('https://mcr-codes-image-sharing-api.herokuapp.com/images');
=======
    formData.append('image', this.state.file);
    formData.append('caption', this.state.caption);
    formData.append('tags', this.state.tags);


    const token = TokenManager.getToken();

    const axiosConfig = {
      headers: {
        Authorization: token,
        'Content-Type': 'multipart/form-data',
      },
    };

    Axios.post('https://mcr-codes-image-sharing-api.herokuapp.com/images', formData, axiosConfig)
      .then((response) => {
        console.log(response);
      });
>>>>>>> 7b9b675831b68922feb3d76c426cd88249f8f510
  };

  render() {
    return (
      <div className="upload-form">
        <form>
<<<<<<< HEAD
          <div className="upload-image">
            <label htmlFor="Image">Upload An Image</label>
            <input type="file" onChange={this.handleFile}></input>
            <button className="submit-button" type="submit" onClick={this.handleonClick}>Submit</button>
          </div>

=======
          <label htmlFor="upload-field"></label>
          <input name="image" type="file" id="src" onChange={this.handleFileSelect}></input>
          <label htmlFor="captiom">Caption:</label>
          <input name="caption" type="text" value={this.state.caption} onChange={this.handleFieldChange}></input>
          <label htmlFor="tags">Tags:</label>
          <input name="tags" type="text" value={this.props.tags} onChange={this.handleFieldChange}></input>


          <button type="submit" onClick={this.handleFileUpload}>Submit</button>
>>>>>>> 7b9b675831b68922feb3d76c426cd88249f8f510
        </form>
      </div>
    );
  }
}

export default UploadImage;
