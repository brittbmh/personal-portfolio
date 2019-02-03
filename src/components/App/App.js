import React, { Component } from 'react';
import Projects from '.././Projects/Projects.js';
import Admin from '.././Admin/Admin.js';
import Header from './Header.js';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  //pull projects and tags from database and set in redux store to use through website
  componentDidMount() {
    this.props.dispatch({ type: 'GET_PROJECTS' });
    this.props.dispatch({ type: 'GET_TAGS' });
  }

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

export default connect()(App);
