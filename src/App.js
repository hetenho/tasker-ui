import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Register from './components/Register';
import Login from './components/Login';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    );
  }
}

export default App;
