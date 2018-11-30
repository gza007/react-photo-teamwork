/* eslint-disable react/self-closing-comp */
import React from 'react';
import '../Styles/uploadImageComponent.css';
import Axios from 'axios';
import TokenManager from '../utils/token-manager';


class UploadImage extends React.Component {
  constructor(props) {
    super(props);
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
    });
  };

  handleFileUpload = () => {
    const formData = new FormData();
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
  };

  render() {
    return (
      <div className="upload-form">
        <form>
          <label htmlFor="upload-field"></label>
          <input name="image" type="file" id="src" onChange={this.handleFileSelect}></input>
          <label htmlFor="captiom">Caption:</label>
          <input name="caption" type="text" value={this.state.caption} onChange={this.handleFieldChange}></input>
          <label htmlFor="tags">Tags:</label>
          <input name="tags" type="text" value={this.props.tags} onChange={this.handleFieldChange}></input>


          <button type="submit" onClick={this.handleFileUpload}>Submit</button>
        </form>
      </div>
    );
  }
}

export default UploadImage;
