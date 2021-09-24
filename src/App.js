import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>

            <Route path="/cv" exact>
              <h1>cv</h1>{/* About */}
            </Route>

            <Route path="/projects" exact>
              <h1>projects</h1>{/* Home */}
            </Route>
          </Switch>
          
        </Router>
      </div>
    );
  }
}

export default App;
