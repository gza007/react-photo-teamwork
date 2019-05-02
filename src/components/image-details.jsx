import React from 'react';
import Image from './image';
import Comments from './comments';

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
      comments: ['damn your aggressive', 'more punk IPA'],
      timestamp: '',
      likes: 0,
      isLiked: false,
    };
  }

  handleLike = () => {
    this.setState({
      isLiked: !this.state.isLiked,
    });
  };

  handleCommentSubmit = (comment) => {
    this.state.comments.push(comment);
  };

  

  render() {
    const {
      imageId,
      user,
      src,
      thumb,
      caption,
      tags,
      comments,
      timestamp,
      likes,
      isLiked,
    } = this.state;

    return (
      <div>
        <Image src={src} user={user} />
        <Comments
          comments={comments}
          isLiked={isLiked}
          onLike={this.handleLike}
          onSubmit={this.handleCommentSubmit}
        />
      </div>
    );
  }
}

export default ImageDetails;
