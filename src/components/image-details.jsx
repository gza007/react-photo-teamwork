import React from 'react';
import Image from './image';
import Comments from './comments';
import Likes from './likes';
import axios from 'axios';
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/image-details.css';

library.add(faComment, faHeart);


const URL = 'http://mcr-codes-image-sharing-api.herokuapp.com';

class ImageDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageId: '',
      user: {},
      src: '',
      thumb: '',
      caption: '',
      tags: [],
      comments: [],
      timestamp: 0,
      likes: 0,
      isLiked: false,
    };
  }

  handleCommentLike = () => {
    this.setState({
      isLiked: !this.state.isLiked,
    });
  };

  handleCommentSubmit = (comment) => {
    this.state.comments.push(comment);
  };

  handleImageLike = () => {
    this.setState({
      likes: this.state.likes + 1,
    });
  };

  componentDidMount() {
    axios.get(`${URL}/images/${this.props.match.params.id}`)
      .then(response => {
        this.setState({
          user: response.data.user,
          src: response.data.src,
          thumb: response.data.thumb,
          caption: response.data.caption,
          tags: response.data.tags,
          comments: response.data.comments,
          timestamp: response.data.timestamp,
          likes: response.data.likes,
          isLiked: response.data.isLiked,
        });
      });
  }

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

    if (!comments) {
      return <h1>loading...</h1>;
    }

    return (
      <div>
        <Image src={src} user={user.firstName} />
        <span>
          <FontAwesomeIcon icon="comment" className="icon-comment" />
          {comments.length}
        </span>
        <Likes
          likes={likes}
          imageLike={this.handleImageLike}
        />
        <Comments
          comments={comments}
          isLiked={isLiked}
          onLike={this.handleCommentLike}
          onSubmit={this.handleCommentSubmit}
        />
      </div>
    );
  }
}

export default ImageDetails;
