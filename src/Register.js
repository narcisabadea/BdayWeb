import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import Checkbox from "@material-ui/core/Checkbox";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import history from "./history";
import * as firebase from "firebase/app";
import "firebase/auth";

export default function Register() {
  const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(30),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    bigAvatar: {
      width: 60,
      height: 60
    },
    input: {
      display: "none"
    }
  }));

  const classes = useStyles();
  const [open] = useState(true);
  const [state, setState] = useState({
    checkedA: false,
    checkedB: false
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  function getUserDetails() {
    var details = JSON.parse(localStorage.getItem("user"));
    return details;
  }

  const [details] = useState(getUserDetails());
  const [fileName, setFileName] = useState("");
  const [url, setUrl] = useState("");
  const [userBirthday, setUserBirthday] = useState(new Date());
  const [userCity, setUserCity] = useState("");
  const [userBusinessName, setUserBusinessName] = useState("");
  const [userName, setUserName] = useState("");
  const [userSurname, setUserSurname] = useState("");

  function handleNameChange(event) {
    setUserName(event.target.value);
  }
  function handleSurnameChange(event) {
    setUserSurname(event.target.value);
  }

  const handleDateChange = date => {
    setUserBirthday(date);
  };

  function handleCityChange(event) {
    setUserCity(event.target.value);
  }

  function handleBusinessNameChange(event) {
    setUserBusinessName(event.target.value);
  }

  function registerBusiness() {
    var userDetails = [];
    var acceptPp = document.getElementById("acceptPp").checked;
    userDetails.push(acceptPp, url);

    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .set({
        businessname: userBusinessName,
        birthday: userBirthday,
        city: userCity,
        photoUrl: url,
        acceptPp: acceptPp,
        coverPhoto: "",
        userId: firebase.auth().currentUser.uid,
        giftCount: 0,
        description: ""
      })
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
    history.push("/profile");
    window.location.reload();
  }

  function registerPersonal() {
    var userDetails = [];
    var acceptPp = document.getElementById("acceptPp").checked;
    var acceptAge = document.getElementById("acceptAge").checked;
    userDetails.push(acceptPp, acceptAge, url);

    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .set({
        name: userName,
        surname: userSurname,
        birthday: userBirthday,
        city: userCity,
        photoUrl: url,
        acceptPp: acceptPp,
        acceptAge: acceptAge,
        coverPhoto: "",
        userId: firebase.auth().currentUser.uid,
        giftCount: 0,
        description: ""
      })
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });

    history.push("/profile");
    window.location.reload();
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
          });
      }
    );
  }

  return (
    <div>
      <Dialog fullScreen open={open} aria-labelledby="form-dialog-title">
        <Container>
          <img src="images/copil.jpg" alt="cover" id="logInBg" />
          <img src="images/s10.png" alt="cover" id="logInPhone" />
          <div className={classes.paper}>
            <div className="phoneContainer">
              <div className="dayTitle textForm">
                <img
                  src={"images/launchscreen_logo.png"}
                  alt="cover"
                  style={{ width: "90%" }}
                />
              </div>
              <Card className="textFormRegister">
                <Grid container justify="center" alignItems="center">
                  <Avatar
                    alt="Avatar"
                    src={fileName || "images/user_placeholder_circle.png"}
                    className={classes.bigAvatar}
                  />
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    onChange={handleImgChange}
                    type="file"
                  />
                  <label htmlFor="contained-button-file">
                    <Button
                      component="span"
                      color="secondary"
                      className={classes.button}
                    >
                      Upload
                    </Button>
                  </label>
                </Grid>
                {details.phoneNumber && (
                  <div>
                    <Grid container justify="center" alignItems="center">
                      <TextField
                        id="name"
                        label="First name"
                        onChange={handleNameChange}
                        value={userName}
                        className={classes.textField}
                        margin="normal"
                        autoFocus
                        required
                      />
                    </Grid>
                    <Grid container justify="center" alignItems="center">
                      <TextField
                        id="surname"
                        label="Last name"
                        onChange={handleSurnameChange}
                        value={userSurname}
                        className={classes.textField}
                        margin="normal"
                        required
                      />
                    </Grid>
                  </div>
                )}
                {details.email && (
                  <div>
                    <Grid container justify="center" alignItems="center">
                      <TextField
                        id="businessname"
                        label="Business name"
                        className={classes.textField}
                        value={userBusinessName}
                        onChange={handleBusinessNameChange}
                        margin="normal"
                        autoFocus
                        required
                      />
                    </Grid>
                  </div>
                )}
                <Grid container justify="center" alignItems="center">
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                      id="birthday"
                      label="Birthday"
                      format="MM/dd/yyyy"
                      margin="normal"
                      value={userBirthday}
                      onChange={handleDateChange}
                      required
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
                <Grid container justify="center" alignItems="center">
                  <TextField
                    id="city"
                    label="City"
                    value={userCity}
                    onChange={handleCityChange}
                    className={classes.textField}
                    margin="normal"
                    required
                  />
                </Grid>
                {details.phoneNumber && (
                  <div>
                    <Grid
                      container
                      justify="center"
                      alignItems="center"
                      className="acceptConditions"
                    >
                      <Checkbox
                        checked={state.checkedA}
                        onChange={handleChange("checkedA")}
                        value="checkedA"
                        id="acceptAge"
                        required
                        inputProps={{
                          "aria-label": "primary checkbox"
                        }}
                      />
                      I am at least 16 years old.
                    </Grid>
                  </div>
                )}
                <Grid
                  container
                  justify="center"
                  alignItems="center"
                  className="acceptConditions"
                >
                  <Checkbox
                    checked={state.checkedB}
                    onChange={handleChange("checkedB")}
                    value="checkedB"
                    id="acceptPp"
                    required
                    inputProps={{
                      "aria-label": "secondary checkbox"
                    }}
                  />
                  I have read and accept the Privacy Policy
                </Grid>
                <br />
                {details.phoneNumber && (
                  <Button
                    id="signIn"
                    color="secondary"
                    variant="contained"
                    className={classes.submit}
                    onClick={registerPersonal}
                  >
                    Sign in
                  </Button>
                )}
                {details.email && (
                  <Button
                    id="signIn"
                    color="secondary"
                    variant="contained"
                    className={classes.submit}
                    onClick={registerBusiness}
                  >
                    Sign in
                  </Button>
                )}
                <br />
                <br />
              </Card>
            </div>
          </div>
        </Container>
      </Dialog>
    </div>
  );
}
