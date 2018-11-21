import React from 'react';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordCheck: '',
    };
  }

  render() {
    return (
      <h1>Sign-up Page</h1>
    );
  }
}

export default SignUp;
