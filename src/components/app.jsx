import React from 'react';
<<<<<<< HEAD
import NavBar from '../components/navbar';
// import { Switch, Route } from 'react-router-dom';
import ImageComponent from '../components/imageComponent';
=======
import NavBar from './navbar';
import SignUp from './sign-up';
import { Switch, Route } from 'react-router-dom';
>>>>>>> 6293228d22455a60b7d98686602833afdf05c4ed

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
<<<<<<< HEAD
        {/* <Switch>
        </Switch> */}
        <ImageComponent />
=======
        <Switch>
          <Route exact path="/sign-up" component={SignUp} />
        </Switch>
>>>>>>> 6293228d22455a60b7d98686602833afdf05c4ed
      </React.Fragment>
    );
  }
}

export default App;
