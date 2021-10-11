import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import { Typography } from "@material-ui/core";


class EduExp extends Component {
  render() {
    return (
      <div>
        <Grid container align="Left">
          <Grid item>
            <h2>Education/Experience</h2>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default EduExp


