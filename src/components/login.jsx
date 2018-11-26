import React from 'react';
import axios from 'axios';
import TokenManager from '../utils/token-manager';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        email: '',
        password: '',
      },
    };
  }

  handleFieldChange = (event) => {
    this.setState({
      fields: {
        ...this.state.fields,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleLogin = (event) => {
    event.preventDefault();
    axios.post('http://mcr-codes-image-sharing-api.herokuapp.com/auth/login', this.state.fields)
      .then((response) => {
        console.log(response);
        TokenManager.setToken(response.data.token);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="login-card">
        <form
          onSubmit={this.handleLogin}
        >
          <div className="login-card__input">
            <label htmlFor="email">
              email:
            </label>
            <input
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleFieldChange}
              required
            />
          </div>
          <div className="login-card__input">
            <label htmlFor="password">
              password:
            </label>
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleFieldChange}
              required
            />
          </div>
          <button
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
