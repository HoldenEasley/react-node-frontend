import React, { Component } from 'react';
import FibonacciForm from './FibonacciForm'
import LucasForm from './LucasForm'
import axios from 'axios'
import logo from '../assets/logo.svg';
import './App.css';

const mathAPI = axios.create({
  baseURL: 'http://graphql-gateway.services-staging.holden.cloud/graphql'
});

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fibonacci: 0,
      lucas: 0
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Jenkins X with React</h1>
        </header>
          <FibonacciForm client={mathAPI}/>
          <LucasForm client={mathAPI}/>
      </div>
    );
  }
}

export default App;
