import React from 'react';
import axios from 'axios';

const URL = 'http://mcr-codes-image-sharing-api.herokuapp.com/users/';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        images: [],
      },
    };
  }

  getProfileInfo = () => {
    axios.get(`${URL}/${this.props.id}`).then(response => {
      console.log('I am the response of data', response);
      this.setState({
        user: response.data,
      });
    });
  };

  componentDidMount() {
    this.getProfileInfo();
  }

  render() {
    return (
      <div className="profile-info">
        <div className="Name">
          Name: {this.state.user.firstName} {this.state.user.lastName}
        </div>
        <div className="bio">Bio: {this.state.user.bio} </div>
        <div className="email">Email: {this.state.user.email}</div>
        <img src={this.state.user.avatar} height="250" width="250 " />
        {this.state.user.images.map((image, index) => (
          <img key={index} src={image.src} />
        ))}
      </div>
    );
  }
}

export default Profile;
