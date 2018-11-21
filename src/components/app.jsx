import React from 'react';
import NavBar from '../components/navbar';
// import { Switch, Route } from 'react-router-dom';
import ImageComponent from '../components/imageComponent';

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
        {/* <Switch>
        </Switch> */}
        <ImageComponent />
      </React.Fragment>
    );
  }
}

export default App;
