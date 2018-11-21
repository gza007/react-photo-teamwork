import React from 'react';
import Axios from 'axios';
import '../Styles/Images.css';

class AddImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    Axios.get('https://mcr-codes-image-sharing-api.herokuapp.com/images');
  }
}


export default AddImages;
