import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import 'date-fns';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';

export default function CreateEvent() {
  
  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  function handleDateChange(date) {
    setSelectedDate(date);
  }

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
        {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Date picker dialog"
              format="MM/dd/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider> */}
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
