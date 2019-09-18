import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import MyEvents from './MyEvents.js'
import MyGifts from './MyGifts.js'
import CreateEvent from './CreateEvent.js'
import AddGift from './AddGift.js'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AppDrawer from './AppDrawer.js';
import EditProfile from './EditProfile.js';

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    marginTop: -70,
    width: 150,
    height: 150,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Profile() {
  
  const classes = useStyles();

  return (
    <div>
      <AppDrawer/>
      <div id="profileCoverDiv">
        <img src="images/cover.jpg" alt="cover" id="profileCover"/>
      </div>
      <Container maxWidth="sm">
        <Grid container justify="center" alignItems="center">
          <Avatar alt="Avatar" src='images/user_placeholder_circle.png' className={classes.bigAvatar} />
        </Grid>
        <div className="profileDetails">Name Surname</div>
        <div className="dateOfBirthProfile">Sat, Mar 6</div>
        <div className="profileDetails">1234 followers</div>
      </Container>
    </div>
  );
}
