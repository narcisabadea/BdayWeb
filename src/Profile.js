import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import MyEvents from './MyEvents.js'
import MyGifts from './MyGifts.js'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AppDrawer from './AppDrawer.js';

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
        <img src="images/cover_image_placeholder.jpg" alt="cover" id="profileCover"/>
      </div>
      <Container maxWidth="sm">
        <Grid container justify="center" alignItems="center">
          <Avatar alt="Avatar" src='images/user_placeholder_circle.png' className={classes.bigAvatar} />
        </Grid>
        <h3>Name Surname</h3>
        <h4>Sat, Mar 6</h4>
        <h4>1234 followers</h4>
        <Button variant="contained" className={classes.button}>
          Edit profile
        </Button>
        <Grid container justify="center" alignItems="center">
          <Button component={Link} to="/createEvent" variant="contained" className={classes.button}>
            Create Event
          </Button>
          <Button variant="contained" component={Link} to="/addGift" className={classes.button}>
            Add Gift
          </Button>
        </Grid>
      </Container>
      <Container>
        <Grid container>  
          <Button variant="contained" component={Link} to="/myEvents" className={classes.button}>
            My events 
          </Button>
          <Button variant="contained" component={Link} to="/myGifts" className={classes.button}>
            My Gifts
          </Button>
        </Grid>
      </Container>
    </div>
  );
}
