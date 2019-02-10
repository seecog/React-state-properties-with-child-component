import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sachin from  './Sachin';
import Employee from './Employee';
import Dravid from './Dravid';
class App extends Component {
  render() {
    return (
      <div className="App">
       <Sachin /><hr/><Dravid />
      </div>
    );
  }
}

export default App;
