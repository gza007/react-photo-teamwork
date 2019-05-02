import React from 'react';
import Image from './image';
import User from './user';

class ImageDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageId: '',
      user: 'Richard',
      src: '../../image/vicious_dog_0.png',
      thumb: '',
      caption: '',
      tags: '',
      comments: '',
      timestamp: '',
      likes: 0,
      isLiked: false,
    };
  }

  render() {
    return (
      <div>
        <Image src={this.state.src} user={this.state.user} />
        <User user={this.state.user} />
      </div>
    );
  }

}

export default ImageDetails;
