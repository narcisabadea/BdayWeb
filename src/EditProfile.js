import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Logout from "./Logout.js";
import history from "./history";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { useCollection } from "react-firebase-hooks/firestore";
import * as firebase from "firebase/app";
import "firebase/auth";

export default function EditProfile() {
  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
      fontFamily: "Open Sans"
    },
    appBar: {
      position: "relative",
      backgroundColor: "#E32C28"
    },
    bigAvatar: {
      width: 100,
      height: 100
    },
    input: {
      display: "none"
    }
  }));

  const [users] = useCollection(firebase.firestore().collection("users"));

  const [file, setFile] = React.useState("");

  const [url, setUrl] = React.useState("");

  const [urlCover, setUrlCover] = React.useState("");

  const [fileName, setFileName] = React.useState("");

  const [coverName, setCoverName] = React.useState("");

  const [selectedDate, handleDateChange] = React.useState();

  const [open, setOpen] = React.useState(false);

  const [fullWidth] = React.useState(true);

  const [maxWidth] = React.useState("xs");

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function deleteAccount() {
    var user = firebase.auth().currentUser;
    user
      .delete()
      .then(function() {
        history.push("/");
        console.log("user deleted");
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  function handleImgChange(event) {
    const user = firebase.auth().currentUser;
    const userUid = user.uid;
    var file = event.target.files[0];
    console.log(file);
    var fileName = setFileName(URL.createObjectURL(event.target.files[0]));
    var storageRef = firebase.storage().ref("users/" + userUid);
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
          .ref("users/")
          .child(userUid)
          .getDownloadURL()
          .then(url => {
            setUrl(url);
            console.log(url);
            firebase.auth().currentUser.updateProfile({
              photoURL: url
            });
            firebase
              .firestore()
              .collection("users")
              .doc(firebase.auth().currentUser.uid)
              .set(
                {
                  photoUrl: url
                },
                { merge: true }
              );
          });
      }
    );
  }

  function handleCoverChange(event) {
    const user = firebase.auth().currentUser;
    const userUid = user.uid;
    var file = event.target.files[0];
    console.log(file);
    var coverName = setCoverName(URL.createObjectURL(event.target.files[0]));
    var storageRef = firebase.storage().ref("covers/" + userUid);
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
          .ref("covers/")
          .child(userUid)
          .getDownloadURL()
          .then(urlCover => {
            setUrlCover(urlCover);
            console.log(urlCover);
            firebase
              .firestore()
              .collection("users")
              .doc(firebase.auth().currentUser.uid)
              .set(
                {
                  coverPhoto: urlCover
                },
                { merge: true }
              );
          });
      }
    );
  }

  function updateUserData() {
    var businessname = document.getElementById("businessname").value;
    var description = document.getElementById("description").value;
    var birthday = document.getElementById("birthday").value;
    var city = document.getElementById("city").value;

    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .update({
        businessname: businessname,
        description: description,
        birthday: birthday,
        city: city
      })
      .then(function() {
        console.log("User data successfully written!");
      })
      .catch(function(error) {
        console.error("Error updating user data: ", error);
      });
  }

  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        style={{
          backgroundColor: "#ff0000",
          color: "#fff",
          borderRadius: "15px",
          marginTop: "10px",
          marginRight: "20px",
          fontFamily: "Open Sans"
        }}
        onClick={handleClickOpen}
      >
        Edit profile
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth={fullWidth}
        maxWidth={maxWidth}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" style={{ fontFamily: "Open Sans" }}>
              Edit profile
            </Typography>
          </Toolbar>
        </AppBar>

        {users && (
          <span>
            {users.docs.map((doc, index) => {
              if (doc.id === firebase.auth().currentUser.uid) {
                return (
                  <span key={index}>
                    <Grid container justify="center" alignItems="center">
                      <TextField
                        id="businessname"
                        label="Name"
                        value={doc.data().businessname || doc.data().name}
                        className={classes.textField}
                        margin="normal"
                        autoFocus
                      />
                    </Grid>
                    <Grid container justify="center" alignItems="center">
                      <TextField
                        id="description"
                        label="Description"
                        className={classes.textField}
                        margin="normal"
                      />
                    </Grid>
                    <Grid container justify="center" alignItems="center">
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                          id="birthday"
                          label="Birthday"
                          format="MM/dd/yyyy"
                          margin="normal"
                          value={doc.data().birthday}
                          onChange={handleDateChange}
                        />
                      </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid container justify="center" alignItems="center">
                      <TextField
                        id="city"
                        label="Location"
                        value={doc.data().city}
                        className={classes.textField}
                        margin="normal"
                      />
                    </Grid>

                    <Grid container justify="center" alignItems="center">
                      <div>
                        <input
                          accept="image/*"
                          className={classes.input}
                          id="contained-button-file"
                          multiple
                          type="file"
                          onChange={handleCoverChange}
                        />
                        <label htmlFor="contained-button-file">
                          <Button
                            color="secondary"
                            component="span"
                            className={classes.button}
                          >
                            Upload cover photo
                          </Button>
                        </label>
                      </div>
                    </Grid>

                    <Grid container justify="center" alignItems="center">
                      <input
                        accept="image/*"
                        className={classes.input}
                        id="contained-button-file-cover"
                        multiple
                        type="file"
                        onChange={handleImgChange}
                      />
                      <label htmlFor="contained-button-file-cover">
                        <Button
                          color="secondary"
                          component="span"
                          className={classes.button}
                        >
                          Upload profile picture
                        </Button>
                      </label>
                    </Grid>
                    <Grid container justify="center" alignItems="center">
                      <Logout />
                    </Grid>
                    <DialogActions>
                      <Button
                        variant="contained"
                        className={classes.button}
                        color="secondary"
                        onClick={updateUserData}
                      >
                        Save
                      </Button>
                      <Button color="secondary" onClick={deleteAccount}>
                        Delete account
                      </Button>
                      <Button onClick={handleClose} color="secondary">
                        Back
                      </Button>
                    </DialogActions>
                  </span>
                );
              }
            })}
          </span>
        )}
      </Dialog>
    </div>
  );
}
