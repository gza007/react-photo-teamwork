import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import NavBar from '../components/navbar';
// import { Switch, Route } from 'react-router-dom';
import ImageComponent from '../components/imageComponent';
=======
import NavBar from './navbar';
import SignUp from './sign-up';
import { Switch, Route } from 'react-router-dom';
>>>>>>> 6293228d22455a60b7d98686602833afdf05c4ed
=======
import NavBar from './navbar';
import SignUp from './sign-up';
import { Switch, Route } from 'react-router-dom';
import ImageComponent from './imageComponent';
>>>>>>> 48b4a3516102c6b3bfb01c701f249ae72363d8a7

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
      </React.Fragment >
    );
  }
}

export default App;
