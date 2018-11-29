import React from 'react';

const Profile = (props) => {
  return (
    props.isLoggedIn ?
      (
        <div>
          <h2>{`Hello ${props.user.firstName}`}</h2>
          <button onClick={props.onLogout}>Log Out</button>
        </div>
      ) :
      (
        <h2>log in to use this app</h2>
      )
  );
};

export default Profile;
