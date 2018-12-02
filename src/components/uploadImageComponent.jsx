/* eslint-disable react/self-closing-comp */
import React from 'react';
import '../Styles/uploadImageComponent.scss';
import Axios from 'axios';
import TokenManager from '../utils/token-manager';
import { FilePond, File, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

class UploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: [],
      fields: {
        src: '',
        caption: '',
        tags: [],
      },
    };
  }

  handleFileSelect = (event) => {
    this.setState({
      file: event.target.files[0],


    });
  };

  handleFieldChange = (event) => {
    this.setState({
      fields: {
        ...this.state.fields,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleFileUpload = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', this.state.file[0]);
    formData.append('caption', this.state.fields.caption);
    formData.append('tags', this.state.fields.tags);

    const token = TokenManager.getToken();

    const axiosConfig = {
      headers: {
        Authorization: token,
        'Content-Type': 'multipart/form-data',
      },
    };
    Axios.post('https://mcr-codes-image-sharing-api.herokuapp.com/images', formData, axiosConfig)
      .then((response) => {
        this.setState({
          file: [],
          fields: {
            src: '',
            caption: '',
            tags: [],
            thumb: '',
            isSuccess: true,
          },
        });
        this.props.history.push(`/images/${response.data._id}`);
      });
  };

  render() {
    return (
      <div className="upload-form">
        <form>
          <h1 className="upload-form-header">Upload A File</h1>
          <img className="image-thumb" src={this.state.thumb} />
          <FilePond
            ref={ref => this.pond = ref}
            server={null}
            instantupload={false}
            onupdatefiles={(fileItems) => {
              this.setState({
                file: fileItems.map(fileItem => fileItem.file),
              });
            }}
          >
            {this.state.file.map(file => (
              <File key={file} src={file} origin="local" />
            ))}
          </FilePond>
          <div>
            <div className="caption-div">
              <label htmlFor="captiom">Caption:</label>
              <input name="caption" type="text" value={this.state.fields.caption} onChange={this.handleFieldChange}></input>
            </div>
            <div className="tags-div">
              <label htmlFor="tags">Tags:</label>
              <input name="tags" type="text" value={this.state.fields.tags} onChange={this.handleFieldChange}></input>
              <div>
              </div>
            </div>
          </div>
          <button type="submit" className="submit-button" onClick={this.handleFileUpload}>Submit</button>
        </form>
      </div>
    );
  }
}

export default UploadImage;
