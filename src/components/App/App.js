import React, { Component } from 'react';
import Projects from '.././Projects/Projects.js';
import Admin from '.././Admin/Admin.js';
import Header from './Header.js';
import {HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div>
            <Route exact path="/" component={Projects} />
            <Route exact path="/admin5" component={Admin} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
