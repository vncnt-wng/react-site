import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import Projects from "./components/Projects";
import EduExp from "./components/EduExp";


import './App.css';
import ProjectDetail from "./components/ProjectDetail";


const App = () => (
  <div className="App">
    <BrowserRouter>
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

          <Route path="/project/:id" component={ProjectDetail} />

          <Route path="/projects" exact>
            <Projects />
          </Route>
          
        </Switch>
      </Container>
    </BrowserRouter>
  </div>
);


export default App;
