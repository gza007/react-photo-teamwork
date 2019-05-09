import React from 'react';
import axios from 'axios';
import '../css/profile.css';

const container = {
  display: 'flex',
  justifyContent: 'flex-start',
  'flex-wrap': 'wrap',
  background: 'white',
  padding: '5px',
  'justify-content': 'center',
};

const imagesInUser = {
  width: '80px',
  height: '80px',
};

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

  componentDidMount() {
    this.getProfileInfo();
  }

  getProfileInfo = () => {
    axios.get(`${URL}/${this.props.id}`).then(response => {
      this.setState({
        user: response.data,
      });
    });
  };

  render() {
    return (
      <div className="profile-info">
        <div className="user-info">
          <img src={this.state.user.avatar} height="150" width="150 " />
          <div className="Name">
            Name: {this.state.user.firstName} {this.state.user.lastName}
          </div>
          <div className="bio">Bio: {this.state.user.bio} </div>
        </div>
        <div style={container}>
          {this.state.user.images.map(image => (
            <img style={imagesInUser} key={image._id} src={image.src} />
          ))}
        </div>
      </div>
    );
  }
}

export default Profile;
