import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import AppDrawer from './AppDrawer.js';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function AddGift() {

  const classes = useStyles();

  return (
    <div>
      <AppDrawer/>
      <Container maxWidth="sm">
       <Grid container justify="center" alignItems="center">
        <h2>Choose gift images</h2>
          {/* <input type='file'/>
          <Button>Choose event cover</Button> */}
        </Grid>
        <Grid container justify="center" alignItems="center">
          <TextField
            id="standard-name"
            label="Gift name"
            margin="normal"
            autoFocus
          />
        </Grid>
        <Grid container justify="center" alignItems="center">
          <TextField
            id="standard-name"
            label="Gift link"
            margin="normal"
          />
        </Grid>
        <Grid container justify="center" alignItems="center">
          <TextField
            id="standard-name"
            label="Gift description"
            margin="normal"
          />
        </Grid>
        <Button variant="contained" className={classes.button} color="secondary">
          Add gift
        </Button>
        <Button component={Link} to="/profile" className={classes.button} color="secondary">
          Back
        </Button>
      </Container>

    </div>
  );
}
