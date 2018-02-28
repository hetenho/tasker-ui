import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import LoginAndRegisterContainer from "./containers/LoginAndRegisterContainer";
import BoardContainer from "./containers/BoardContainer";
import { app, top } from './styles/App.styles';
import logo from './logo.svg';

class App extends Component {
  render() {
    return <div className={app}>
        <div className={top} />
        <Switch>
          <Route path="/signup" component={LoginAndRegisterContainer} />
          <Route path="/signin" component={LoginAndRegisterContainer} />
          <Route path="/" component={BoardContainer} />
        </Switch>
      </div>;
  }
}

export default App;
