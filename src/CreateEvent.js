import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DateFnsUtils from "@date-io/date-fns";
import { useCollection } from "react-firebase-hooks/firestore";
import * as firebase from "firebase/app";
import "firebase/auth";
import {
  DatePicker,
  TimePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";

export default function CreateEvent() {
  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    },
    appBar: {
      position: "relative",
      backgroundColor: "#E32C28"
    },
    input: {
      display: "none"
    }
  }));
  const [open, setOpen] = React.useState(false);
  const [fullWidth] = React.useState(true);
  const [maxWidth] = React.useState("sm");
  const [fileName, setFileName] = React.useState("");
  const [selectedDate, handleDateChange] = React.useState(new Date());
  const [url, setUrl] = React.useState("");
  const [addedSuccesfully, setAddedSuccesfully] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleImgChange(event) {
    setFileName(URL.createObjectURL(event.target.files[0]));
  }

  const classes = useStyles();

  function addEvent() {
    var eventName = document.getElementById("eventName").value;
    var eventDate = document.getElementById("eventDate").value;
    var eventTime = document.getElementById("eventTime").value;
    var eventLocation = document.getElementById("eventLocation").value;
    var eventMoreInfo = document.getElementById("eventMoreInfo").value;

    firebase
      .firestore()
      .collection("events/")
      .doc()
      .set({
        eventName: eventName,
        eventDate: eventDate,
        eventTime: eventTime,
        eventLocation: eventLocation,
        eventMoreInfo: eventMoreInfo,
        eventUrl: url,
        isPrivate: false,
        userId: firebase.auth().currentUser.uid
      })
      .then(function() {
        setAddedSuccesfully(true);
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  }

  function handleImgChange(event) {
    const user = firebase.auth().currentUser;
    const userUid = user.uid;
    var file = event.target.files[0];
    console.log(file);
    var fileName = setFileName(URL.createObjectURL(event.target.files[0]));
    var storageRef = firebase.storage().ref("events/" + file.name);
    const uploadTask = storageRef.put(file);
    uploadTask.on(
      "state_changed",
      snapshot => {
        console.log(snapshot);
      },
      error => {
        console.log(error);
      },
      () => {
        firebase
          .storage()
          .ref("events/")
          .child(file.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url);
            console.log(url);
          });
      }
    );
  }

  return (
    <div>
      <Button color="secondary" onClick={handleClickOpen}>
        <div>
          <img src="icons/calendar.png" alt="calendar" />
          <br />
          <div style={{ fontFamily: "Open Sans" }}>Add Event </div>
        </div>
      </Button>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth={fullWidth}
        maxWidth={maxWidth}
      >
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ border: "2px solid red" }}
        >
          <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
            <img
              src={fileName || "images/cover_image_placeholder.jpg"}
              style={{ width: "80%", margin: "2%" }}
            />
            <input type="file" id="fileItem" onChange={handleImgChange} />
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
            <TextField
              id="eventName"
              label="Name your event"
              className={classes.textField}
              margin="normal"
              autoFocus
              required
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                id="eventDate"
                label="Event date"
                format="MM/dd/yyyy"
                margin="normal"
                value={selectedDate}
                onChange={handleDateChange}
                required
              />
            </MuiPickersUtilsProvider>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <TimePicker
                margin="normal"
                id="eventTime"
                label="Time picker"
                value={selectedDate}
                onChange={handleDateChange}
                required
              />
            </MuiPickersUtilsProvider>
            <TextField
              id="eventLocation"
              label="Location"
              className={classes.textField}
              margin="normal"
              required
            />
            <TextField
              id="eventMoreInfo"
              label="More info"
              className={classes.textField}
              margin="normal"
            />
            {addedSuccesfully && <div>Event addded successfully</div>}
          </Grid>
          <DialogActions>
            <Button
              variant="contained"
              className={classes.button}
              color="secondary"
              onClick={addEvent}
              style={{ fontFamily: "Open Sans" }}
            >
              Create event
            </Button>
            <Button
              onClick={handleClose}
              color="secondary"
              style={{ fontFamily: "Open Sans" }}
            >
              Back
            </Button>
          </DialogActions>
        </Grid>
      </Dialog>
    </div>
  );
}
