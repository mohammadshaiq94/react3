import React, { Component } from 'react';
import logo from './logo.svg';
import DocumentTitle from 'react-document-title'
import './App.css';
import Routers from './Components/routers/index';

class App extends Component {
  render() {
    return (
      <DocumentTitle title='Todo App'>
      <div className="App">
      <Routers />
      </div>
      </DocumentTitle>
    );
  }
}

export default App;



