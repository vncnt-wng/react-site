import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import ProjectCards from "./ProjectCard";
import { client } from "../ContentfulClient";


class Projects extends Component {
  state = {
    projects: []
  }

  // Make the contenful api call
  componentDidMount() {
    client.getEntries({
      content_type: "project"
    })
    .then((response) => {
      console.log(response)
      this.setState({
        projects: response.items
      })
    })
    .catch(console.error)
  }

  render() {
    return (
      <div>
          <h2>Here are some projects I've done...</h2>
          <ProjectCards projects={this.state.projects}/>
      </div>
    )
  }
}

export default Projects


