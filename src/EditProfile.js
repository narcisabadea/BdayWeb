import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
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

  const [users] = useCollection(
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
  );

  const [file, setFile] = useState("");
  const [url, setUrl] = useState("");
  const [urlCover, setUrlCover] = useState("");
  const [fileName, setFileName] = useState("");
  const [coverName, setCoverName] = useState("");
  const [open, setOpen] = useState(false);
  const [fullWidth] = useState(true);
  const [maxWidth] = useState("xs");
  const classes = useStyles();
  const [userBirthday, setUserBirthday] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userName, setUserName] = useState("");
  const [userSurname, setUserSurname] = useState("");
  const [userBusinessName, setUserBusinessName] = useState("");

  function getUserDetails() {
    var details = JSON.parse(localStorage.getItem("user"));
    return details;
  }
  const [details] = useState(getUserDetails());
  function handleCityChange(event) {
    setUserCity(event.target.value);
  }

  function handleDescriptionChange(event) {
    setUserDescription(event.target.value);
  }

  function handleNameChange(event) {
    setUserName(event.target.value);
  }

  function handleBusinessNameChange(event) {
    setUserBusinessName(event.target.value);
  }

  function handleClickOpen() {
    setOpen(true);
    setUserName(users.data().name);
    setUserSurname(users.data().surname);
    setUserBusinessName(users.data().businessname);
    setUserBirthday(users.data().birthday);
    setUserCity(users.data().city);
    setUserDescription(users.data().description);
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
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .update({
        name: userName,
        description: userDescription,
        birthday: userBirthday,
        city: userCity
      })
      .then(function() {
        console.log("User data successfully written!");
      })
      .catch(function(error) {
        console.error("Error updating user data: ", error);
      });
  }

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
            {details.phoneNumber && (
              <span>
                <Grid container justify="center" alignItems="center">
                  <TextField
                    id="name"
                    label="Name"
                    value={userName}
                    className={classes.textField}
                    margin="normal"
                    onChange={handleNameChange}
                    autoFocus
                  />
                </Grid>
              </span>
            )}
            {details.email && (
              <span>
                <Grid container justify="center" alignItems="center">
                  <TextField
                    label="Business name"
                    value={userBusinessName}
                    className={classes.textField}
                    margin="normal"
                    onChange={handleBusinessNameChange}
                    autoFocus
                  />
                </Grid>
              </span>
            )}
            <Grid container justify="center" alignItems="center">
              <TextField
                id="description"
                label="Description"
                value={userDescription}
                onChange={handleDescriptionChange}
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
                  value={userBirthday}
                  onChange={setUserBirthday}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid container justify="center" alignItems="center">
              <TextField
                id="city"
                label="Location"
                value={userCity}
                onChange={handleCityChange}
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
              <Button
                color="secondary"
                onClick={deleteAccount}
                className={classes.button}
              >
                Delete account
              </Button>
              <Button
                onClick={handleClose}
                color="secondary"
                className={classes.button}
              >
                Back
              </Button>
            </DialogActions>
          </span>
        )}
      </Dialog>
    </div>
  );
}
