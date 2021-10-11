import React, { Component } from "react";
import { useParams } from "react-router-dom"
import { makeStyles, useTheme, createTheme, ThemeProvider } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid"
import { Button, CardMedia, Card } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ArrowBack } from "@material-ui/icons";

import Typography from "@material-ui/core/Typography"
import { client } from "../ContentfulClient";
import Image from "material-ui-image"
import { width } from "@mui/system";



const projectDetailTheme = createTheme({
  typography: {
    button: {
      textTransform: "none",
      color: "#222222"
    }
  },
  overrides: {
    MuiButton: {
      label: {
        color: "#ffffff"
      }
    }
  }
})


class ProjectDetail extends Component {
  state = {
    title: "",
    dateRange: "",
    shortDescription: "",
    longDescription: "",
    photoUrl: ""
  }
  
  // Make the contenful api call
  componentDidMount() {
    const id = this.props.match.params.id
    console.log(id)
    client.getEntry(id)
    .then((response) => {
      console.log(response)
      this.setState({
        title: response.fields.title,
        dateRange: response.fields.dateRange,
        shortDescription: response.fields.shortDescription,
        longDescription: response.fields.longDescription,
        photoUrl: response.fields.photo.fields.file.url
      });
    })
    .catch(console.error)
  }

  render() {
    return (
      <ThemeProvider theme={projectDetailTheme}>
        <Grid container spacing={2}>
          <Grid item xs={12} alignItems="center" align="left" direction="row" component={Link} to="/projects">
              <Typography variant="h6" alignItems="center" color="gray">
                <ArrowBack /> 
                Back to Projects
              </Typography>
          </Grid>

          <Grid item align="left" xs={12} sm={6}>
            <Typography variant="h3" color="initial">{this.state.title}</Typography>
            <Typography variant="h6" color="initial">{this.state.dateRange}</Typography>
            <br/>
            <Typography>{this.state.shortDescription}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Image src={"http:" + this.state.photoUrl} imageStyle={{height:"50%"}}/>
          </Grid>
          <Grid item xs={12}>
            <hr style={{height:"1px", borderWidth:"0", color:"Gainsboro", backgroundColor:"Gainsboro"}}/>
            <Typography>dhsjakhdjshajkdhsjkahdjshajdhkjas</Typography>
          </Grid>
        </Grid>
      </ThemeProvider>
    )
  }
} 

export default ProjectDetail