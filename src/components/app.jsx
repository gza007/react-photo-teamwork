import React from 'react';
import NavBar from './navbar';
import SignUp from './sign-up';
import { Switch, Route } from 'react-router-dom';
import ImageComponent from './components/imageComponent';

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
          <Route exact path="/images" component={ImageComponent} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
