import React from 'react';
import NavBar from '../components/navbar';
import SignUp from '../components/sign-up';
import { Switch, Route } from 'react-router-dom';
import ImagesComponent from '../components/ImagesComponent';
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
    return (
      <React.Fragment>
        <NavBar
          isLoggedIn={this.isLoggedIn()}
          user={this.state.user}
          onLogout={this.handleLogout}
        />
        <Switch>
          <Route
            exact
            path="/login"
            component={Login}
            onLogin={this.handleLogin}
          />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/images" component={ImagesComponent} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
