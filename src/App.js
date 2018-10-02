import React, { Component } from 'react';
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";

import logo from './logo.svg';
import './App.css';

import SearchBar from "./containers/SearchBar/SearchBar";

library.add(faMapMarkerAlt);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
		<SearchBar geo/>
      </div>
    );
  }
}

export default App;
