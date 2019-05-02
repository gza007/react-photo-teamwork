import React from 'react';
// import Axios from 'axios';

const Profile = props => {
  // console.log(props.info);
  return (
    <div>
      {/* <h1>I am a profile {props.info}</h1> */}
      <h2>name: {props.name}</h2>
      <img src={props.avatar} />
    </div>
  );
};

export default Profile;
