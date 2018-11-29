import React from 'react';

import '../Styles/profile.scss';

const Profile = (props) => {
  return (
    props.isLoggedIn ?
      (
        <div className="profile">
          <h2>{`Hello ${props.user.firstName}`}</h2>
          <div className="card">
            <button onClick={props.onLogout}>Log Out</button>
          </div>
        </div>
      ) :
      (
        <h2>log in to use this app</h2>
      )
  );
};

export default Profile;
