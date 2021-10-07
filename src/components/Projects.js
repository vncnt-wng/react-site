import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import ProjectCard from "./ProjectCard";


class Projects extends Component {
  render() {
    return (
      <div>
          <h2>Here are some projects I've done...</h2>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
              <Paper>
                <Typography>1</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Paper>
                <Typography>1</Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} lg={6}>
              <Paper>
                <Typography>1</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Paper>
                <Typography>1</Typography>
              </Paper>
            </Grid>


            <ProjectCard />
          </Grid>

      </div>
    )
  }
}

export default Projects


