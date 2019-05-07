import React from 'react';

const imgStyle = {
  height: '500px',
  width: '500px',
};

const Image = ({ src, user }) => {
  return (
    <div>
      <img src={src} style={imgStyle} />
      <div>{user}</div>
    </div>
  );
};

export default Image;
