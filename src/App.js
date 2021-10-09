import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import Projects from "./components/Projects";
import EduExp from "./components/EduExp";


import './App.css';

class App extends Component {
  render() { 
    return (
      <div className="App">
        <Router>
          <Navigation />
          <Container>
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>

              <Route path="/eduexp" exact>
                <EduExp />
              </Route>

              <Route path="/cv" exact>
                <h1>cv</h1>{/* About */}
              </Route>

              <Route path="/projects" exact>
                <Projects />
              </Route>
              
            </Switch>
          </Container>
        </Router>
      </div>
    );
  }
}

export default App;
