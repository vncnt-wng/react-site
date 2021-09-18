import logo from './logo.svg';
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"


import './App.css';
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />

          <h1>
            Learn React
          </h1>

          <Route path="/about" exact>
            <h1>About</h1>{/* About */}
          </Route>

          <Route path="/home" exact>
            <h1>Home</h1>{/* Home */}
          </Route>
          
        </Router>
      </div>
    );
  }
}

export default App;
