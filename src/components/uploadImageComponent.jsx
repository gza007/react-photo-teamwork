import React from 'react';

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
        <h1>Upload An Image</h1>
        <form>

          <label htmlFor="Image"></label>
          <input type="file"></input>


        </form>

      </div>
    );
  }
}

export default UploadImage;
