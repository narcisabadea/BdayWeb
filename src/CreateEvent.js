import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function CreateEvent() {
  
  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    appBar: {
      position: 'relative',
      backgroundColor: '#E32C28'
    },
  }));
  const [open, setOpen] = React.useState(false);
  const [fullWidth] = React.useState(true);
  const [maxWidth] = React.useState('xs');

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const classes = useStyles();

  return (
    <div>
      <Button color="secondary" onClick={handleClickOpen}>
        Create Event
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth={fullWidth}
          maxWidth={maxWidth}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Create new event
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container justify="center" alignItems="center">
          {/* <div>Choose event cover</div> */}
          {/* <input type='file'/> */}
          <Button>Choose event cover</Button>
        </Grid>
        <Grid container justify="center" alignItems="center">
          <TextField
            id="standard-name"
            label="Name your event"
            className={classes.textField}
            margin="normal"
            autoFocus
          />
          </Grid>
          <Grid container justify="center" alignItems="center">
            <TextField
              id="standard-name"
              label="Event date"
              className={classes.textField}
              margin="normal"
            />
          </Grid>
          <Grid container justify="center" alignItems="center">
          <TextField
            id="standard-name"
            label="Event time"
            className={classes.textField}
            margin="normal"
          />
          </Grid>
          <Grid container justify="center" alignItems="center">
            <TextField
              id="standard-name"
              label="Location"
              className={classes.textField}
              margin="normal"
            />
          </Grid>
          <Grid container justify="center" alignItems="center">
          <TextField
            id="standard-name"
            label="More info"
            className={classes.textField}
            margin="normal"
          />
          </Grid>
          <DialogActions>
            <Button variant="contained" className={classes.button} color="secondary">
              Create event
            </Button>
            <Button onClick={handleClose} color="secondary">
              Back
            </Button>
          </DialogActions>
        </Dialog>
    </div>
  );
}
