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

import { ExpandMore, ExpandLess } from "@material-ui/icons";

import { green } from '@material-ui/core/colors';

import { useMediaQuery } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  toolbarButtons: {
    marginLeft: "auto",
  },

  appBar: {
    position: "sticky",
    /*zIndex: 1400, TODO figure out how to have drawer draw below the appbar*/
  },

  drawer: {

  }
}));


const navbarTheme = createTheme({
  typography: {
    button: {
      textTransform: "none"
    }
  },
  overrides: {
    MuiButton: {
      label: {
        color: "ffffff"
      }
    }
  }
})

export default function Navigation() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    
      <AppBar className={classes.appBar} >
        <Toolbar>
          {isMobile ? (
              <MobileNavbar />
            ) : (
              <FullNavbar />
          )}
        </Toolbar>
      </AppBar>

  )
}

function FullNavbar() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <Typography variant="h6" color="inherit">
        Vincent Wang
      </Typography>

      <div className={classes.toolbarButtons}>
        <Button variant="text" component={Link} to="/">
          <Typography variant="h6" style={{ textTransform: 'none' }}>
            Home
          </Typography>
        </Button>

        <Button variant="text" component={Link} to="/projects">
          <Typography variant="h6" style={{ textTransform: 'none' }}>
            Projects
          </Typography>
        </Button>
        
        <Button variant="text" component={Link} to="/cv">
          <Typography variant="h6">
            CV
          </Typography>
        </Button>

      </div>
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

      {open ? (
          <ExpandLess />
        ) : (
          <ExpandMore />
        )
      }
        
      </IconButton>
      <Typography variant="h6" color="inherit">
        Vincent Wang
      </Typography>


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