import React from 'react';
import NavBar from '../components/navbar';
import SignUp from '../components/sign-up';
import { Switch, Route } from 'react-router-dom';
import ImagesComponent from '../components/ImagesComponent';
import Login from '../components/login';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/images" component={ImagesComponent} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
