import React from 'react';
import NavBar from './navbar';
import Profile from './profile';
import SignUp from '../components/sign-up';
import { Switch, Route } from 'react-router-dom';
import Login from '../components/login';
import TokenManager from '../utils/token-manager';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  handleLogin = () => {
    this.setState({ user: TokenManager.getTokenPayload() });
  };

  handleLogout = () => {
    TokenManager.removeToken();
    this.setState({ user: null });
  };

  isLoggedIn = () => {
    return Boolean(this.state.user) && TokenManager.isTokenValid();
  };

  render() {
    // console.log('id', this.state.user);
    // const { avatar, firstName, lastName } = this.state.user;
    return (
      <React.Fragment>
        <NavBar
          isLoggedIn={this.isLoggedIn()}
          user={this.state.user}
          onLogout={this.handleLogout}
        />

        {this.isLoggedIn() ? (
          <Profile
            avatar={this.state.user.avatar}
            name={`${this.state.user.firstName} ${this.state.user.lastName}`}
          />
        ) : (
          <div>You are not in</div>
        )}

        <Switch>
          <Route
            exact
            path="/login"
            render={props => <Login {...props} onLogin={this.handleLogin} />}
          />
          <Route exact path="/sign-up" component={SignUp} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
