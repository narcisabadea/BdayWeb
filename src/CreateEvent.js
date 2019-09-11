import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

export default function CreateEvent() {
  
  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="sm">
       <Grid container justify="center" alignItems="center">
          <h2>Choose event cover</h2>
          {/* <input type='file'/>
          <Button>Choose event cover</Button> */}
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
        <Button variant="contained" className={classes.button}>
          Create event
        </Button>
      </Container>

    </div>
  );
}
