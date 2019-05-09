import React from 'react';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newComment: '',
    };
  }

  handleOnChange = event => {
    this.setState({
      newComment: event.target.value,
    });
    console.log(event.target.value);
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state.newComment);
  };

  render() {
    return (
      <div>
        {this.props.comments.map((comment) => {
          return (
            <div key={comment._id}>
              <div>{comment.content}</div>
              <button onClick={this.props.onLike}>Like</button>
              {this.props.isLiked && <div>Liked</div>}
            </div>
          );
        })}
        <input onChange={this.handleOnChange} type="text" value={this.state.newComment} />
        <button onClick={this.handleSubmit}>Post</button>
      </div>
      
    );
  }
};

export default Comments;
