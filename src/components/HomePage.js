import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Typography from '@material-ui/core/Typography'



class Home extends Component {
  render() {
    return (
      <div>
        <Grid container xs={12} align="center">
          <Grid item xs={12}>
            <Typography variant="h2" color="initial">Hi, I'm Vincent!</Typography>
            <Typography variant="h6" color="initial">3rd year MEng Computing student at Imperial College London</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" color="initial">Find me on:</Typography>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Home
