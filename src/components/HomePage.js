import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"



class Home extends Component {
  render() {
    return (
      <div>
        <h2>Hi! I'm Vincent Wang</h2>
        <br/>
        <p>3rd year MEng Computing student at Imperial College London</p>
      </div>
    )
  }
}

export default Home
