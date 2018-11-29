/* eslint-disable react/self-closing-comp */
import React from 'react';
import '../Styles/uploadImageComponent.css';
import Axios from 'axios';


class UploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {
      selectedFile: null,
    };
  }

  onChange = event => {
    this.setState({
      selectedFile: event.target.files[0],

    });
  };

  onClick = () => {
    const formData = new FormData();
    formData.append('image', this.state.selectedFile, this.state.selectedFile.name);
    Axios.post('https://mcr-codes-image-sharing-api.herokuapp.com/images', formData)
      .then();
  };


  render() {
    return (
      <div className="upload-form">
        <form>
          <input name="upload-file" type="file" onChange={this.handleonChange}>
          </input>

          <button type="submit" onClick={this.handleonClick}>Submit</button>
        </form>
      </div>
    );
  }
}


export default UploadImage;
