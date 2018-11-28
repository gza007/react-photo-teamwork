/* eslint-disable react/self-closing-comp */
import React from 'react';
import '../Styles/uploadImageComponent.css';

class UploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {
      file: '',
      src: '',
    };
  }

  render() {
    return (
      <div className="upload-form">
        <form>

          <label htmlFor="Image">Upload An Email</label>
          <input type="file"></input>


        </form>

      </div>
    );
  }
}

export default UploadImage;
