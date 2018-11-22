import React from 'react';
import NavBar from '../components/navbar';
import SignUp from '../components/sign-up';
import { Switch, Route } from 'react-router-dom';
import ImageCardComponent from './imageCardComponent';
import ImagesComponent from '../components/ImagesComponent';

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
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/images" component={ImageCardComponent} />
          <Route exact path="/ImagesComponent" component={ImagesComponent} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
