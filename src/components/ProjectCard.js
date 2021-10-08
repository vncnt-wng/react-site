import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"


const ProjectCards = ({projects}) => {
  // Sort the project by their order date
  projects.sort(function(a, b){
    return new Date(b.fields.orderDate) - new Date(a.fields.orderDate)
  });
  console.log(projects)
  return (
    <Grid container spacing={2}>
      {projects.map((project, index) => <ProjectCard key={index} project={project}/>)}
    </Grid>
  )
}


const ProjectCard = ({project}) => {
  const {title} = project.fields  
  const id = project.sys.id
  return (
    <Grid item xs={12} lg={6}>
      <Card>
          <Typography>{title}: {id}</Typography>
      </Card>
    </Grid>
  )
}

export default ProjectCards
