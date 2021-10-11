import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import CardActionArea from "@material-ui/core/CardActionArea"
import Typography from "@material-ui/core/Typography"


const ProjectCards = ({projects}) => {
  // Sort the project by their order date
  projects.sort(function(a, b){
    return new Date(b.fields.orderDate) - new Date(a.fields.orderDate)
  });
  console.log(projects)
  return (
    <Grid container spacing={3}>
      {projects.map((project, index) => <ProjectCard key={index} project={project}/>)}
    </Grid>
  )
}


const ProjectCard = ({project}) => {
  const {title, dateRange, shortDescription, photo} = project.fields  
  const image_url = photo.fields.file.url
  const id = project.sys.id

  return (
    <Grid item xs={12} md={6}>
      <Card border="warning">
        <CardActionArea component={Link} to={"project/" + id}>
          <CardMedia square style={{ height: "50%"}} component="img" image={image_url}/>
          <CardContent align="left" style={{backgroundColor: "#D5E3E3"}}>
            <Typography variant="h6" style={{ fontSize: "1.4rem", fontWeight: "500"}}>{title}</Typography>
            <hr style={{height:"1px", borderWidth:"0", color:"grey", backgroundColor:"grey"}}/>
            <Typography variant="h6" style={{ paddingBottom:"1%", fontSize:"1.2rem"}}>{dateRange}</Typography>
            <Typography>{shortDescription}</Typography>
          </CardContent>
        </CardActionArea> 
      </Card>
    </Grid>
  )
}

export default ProjectCards
