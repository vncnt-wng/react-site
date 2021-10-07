import { Component } from "react";
import styled from "styled-components";

import { Link } from 'react-router-dom';

import React, { useState } from "react";
import { makeStyles, useTheme, createTheme, ThemeProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Box from "@material-ui/core/Box";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container";

import { ExpandMore, ExpandLess, Menu, Home, Build, Description, School} from "@material-ui/icons";

import { green } from '@material-ui/core/colors';

import { useMediaQuery } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  toolbarButtons: {
    marginLeft: "auto",
  },

  disableRipple: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },

  navbarIcon: {
    paddingRight: 5,
    paddingBottom: 3
  },

  appBar: {
    position: "sticky",
    /*zIndex: 1400, TODO figure out how to have drawer draw below the appbar*/
  },

  drawer: {

  },

  navbarLink: {
  }
}));

const navbarTheme = createTheme({
  typography: {
    button: {
      textTransform: "none",
      color: "#ffffff"
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

export default function Navigation() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <ThemeProvider theme={navbarTheme}>
      <AppBar className={classes.appBar} >
        <Container>
          <Toolbar>
            {isMobile ? (
                <MobileNavbar />
              ) : (
                <FullNavbar />
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  )
}

function FullNavbar() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
     
      <Grid container className={classes.toolbarButtons}>
        
        <Grid item sm={3}>
          <Button variant="text" component={Link} to="/">
            <Home className={classes.navbarIcon}/>
            <Typography variant="h6" component="h6">
              Home
            </Typography>
          </Button>
        </Grid>

        <Grid item sm={3}>
          <Button variant="text" component={Link} to="/projects">
            <Build className={classes.navbarIcon}/>
            <Typography variant="h6" component="h6">
              Projects
            </Typography>
          </Button>
        </Grid>

        <Grid item sm={3}>
          <Button variant="text" component={Link} to="/eduexp">
            <School className={classes.navbarIcon}/>
            <Typography variant="h6" component="h6">
              Education/Exp
            </Typography>
          </Button>
        </Grid>

        <Grid item sm={3}>
          <Button variant="text" component={Link} to="/cv">
            <Description className={classes.navbarIcon}/>
            <Typography variant="h6" component="h6">
              CV
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();  
 
  const toggleDrawer = () => {
    setOpen(!open)
  }

  return (
    <>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        onClick={() => setOpen(!open)}
      >

        <Menu />
        
      </IconButton>

      {/*
      <Typography variant="h6" color="inherit">
        Vincent Wang
      </Typography>
      */}

      <Drawer 
        anchor="top" 
        open={open} 
        onClose={toggleDrawer}
        className={classes.drawer}
      >
        <Box
          onClick={toggleDrawer}
        >
          <List>
            <ListItem button component={Link} to="/" key="Home">
              <ListItemText primary="Home"/>
            </ListItem>
            <ListItem button component={Link} to="/projects" key="Projects">
              <ListItemText primary="Projects"/>
            </ListItem>
            <ListItem button component={Link} to="/cv" key="cv">
              <ListItemText primary="CV"/>
            </ListItem>
          </List>
        </Box>
      </Drawer>

    </>
  )
}