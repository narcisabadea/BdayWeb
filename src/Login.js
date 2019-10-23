import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import * as firebase from "firebase/app";
import "firebase/auth";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import history from "./history";
import { useCollection } from "react-firebase-hooks/firestore";

export default function FormDialog() {
  const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(30),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      fontFamily: "Open Sans"
    }
  }));

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [showPhoneInput, setPhoneInput] = React.useState(false);
  const [showEmailInput, setEmailInput] = React.useState(false);
  const [disabled, setDisable] = React.useState(false);
  const [users] = useCollection(firebase.firestore().collection("users"));

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
    setEmailInput(false);
    setPhoneInput(false);
  }

  function showPhoneInputs() {
    setPhoneInput(!showPhoneInput);
    setEmailInput(false);
  }

  function showEmailInputs() {
    setEmailInput(!showEmailInput);
    setPhoneInput(false);
  }

  function getPhoneNumberFromUserInput() {
    return document.getElementById("phone-number").value;
  }

  function isPhoneNumberValid() {
    var pattern = /^\+[0-9\s\-\(\)]+$/;
    var phoneNumber = getPhoneNumberFromUserInput();
    return phoneNumber.search(pattern) !== -1;
  }

  function componentDidMount() {
    // [START appVerifier]
    setDisable(true);
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: function(response) {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          console.log("success", response);
          // onSignInSubmit();
        },
        "expired-callback": function() {
          console.log("expired-callback");
        }
      }
    );
    // [END appVerifier]
    window.recaptchaVerifier.render().then(function(widgetId) {
      window.recaptchaWidgetId = widgetId;
      console.log("widgetId", widgetId);
      onSignInSubmit();
    });
  }

  function onSignInSubmit() {
    if (isPhoneNumberValid()) {
      window.signingIn = true;
      var phoneNumber = getPhoneNumberFromUserInput();
      var appVerifier = window.recaptchaVerifier;
      firebase
        .auth()
        .signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(function(confirmationResult) {
          console.log(phoneNumber);
          console.log(appVerifier);
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          window.signingIn = false;
        })
        .catch(function(error) {
          // Error; SMS not sent
          console.error("Error during signInWithPhoneNumber", error);
          window.alert(
            "Error during signInWithPhoneNumber:\n\n" +
              error.code +
              "\n\n" +
              error.message
          );
          window.signingIn = false;
        });
    }
  }

  function onVerifyCodeSubmit(e) {
    e.preventDefault();
    if (!!getCodeFromUserInput()) {
      window.verifyingCode = true;
      var code = getCodeFromUserInput();
      window.confirmationResult
        .confirm(code)
        .then(function(result) {
          // User signed in successfully.
          var user = result.user;
          console.log("s-a logat", user.uid);
          window.verifyingCode = false;
          window.confirmationResult = null;
          setOpen(false);

          {
            let userKeys = [];
            users.docs.map((doc, index) => {
              userKeys.push(doc.id);
              let userId = firebase.auth().currentUser.uid;
              console.log("userKey", userKeys);
              if (userKeys.includes(userId)) {
                history.push("/profile");
                window.location.reload();
              } else {
                history.push("/register");
                window.location.reload();
              }
            });
          }
        })
        .catch(function(error) {
          console.error("Error while checking the verification code", error);
          window.alert(
            "Error while checking the verification code:\n\n" +
              error.code +
              "\n\n" +
              error.message
          );
          window.verifyingCode = false;
          console.log("nu s-a logat");
        });
    }
  }

  function getCodeFromUserInput() {
    return document.getElementById("verification-code").value;
  }

  function getEmailFromUserInput() {
    return document.getElementById("email").value;
  }

  function getPasswordFromUserInput() {
    return document.getElementById("password").value;
  }

  function signInWithEmailAndPassword() {
    var email = getEmailFromUserInput();
    var password = getPasswordFromUserInput();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        if (res.user) setOpen(false);
        history.push("/profile");
        window.location.reload();
        console.log(res, "res");
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error.code, error.message, "user inexistent");
      });
  }

  function createUserWithEmailAndPassword() {
    var email = getEmailFromUserInput();
    var password = getPasswordFromUserInput();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        setOpen(false);
        history.push("/register");
        window.location.reload();
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error.code, error.message);
      });
  }

  return (
    <div>
      <Button
        style={{
          maxWidth: "250px",
          maxHeight: "60px",
          minWidth: "250px",
          minHeight: "60px",
          backgroundColor: "#e32c28",
          color: "#fff",
          fontSize: "16px",
          fontFamily: "Open Sans",
          border: "2px solid white",
          borderRadius: "10px"
        }}
        variant="contained"
        className={classes.button}
        onClick={handleClickOpen}
      >
        Login
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <Container>
          <img src="images/copil.jpg" alt="cover" id="logInBg" />
          <img src="images/s10.png" alt="cover" id="logInPhone" />
          {/* <CssBaseline /> */}
          <div className={classes.paper}>
            <DialogContent className="loginContainer">
              <div className="dayTitle textForm">
                <img
                  src="images/launchscreen_logo.png"
                  alt="cover"
                  style={{ width: "90%" }}
                />
              </div>
              <Button
                style={{
                  color: "#fff",
                  fontFamily: "Open Sans"
                }}
                className="textFormSignIn"
                onClick={showPhoneInputs}
              >
                Sign in with your personal phone number
              </Button>
              {showPhoneInput && (
                <div>
                  <TextField
                    type="text"
                    pattern="\+[0-9\s\-\(\)]+"
                    id="phone-number"
                    variant="outlined"
                    required
                    disabled={disabled}
                    placeholder="Phone no"
                    inputProps={{ style: { backgroundColor: "white" } }}
                  />
                  <Button
                    onClick={componentDidMount}
                    id="sign-in-button"
                    color="secondary"
                    variant="contained"
                    className={classes.submit}
                  >
                    Send code
                  </Button>
                  <div className="textFormSignIn">
                    Check your phone for the verification code.
                  </div>
                  <TextField
                    type="text"
                    id="verification-code"
                    variant="outlined"
                    margin="normal"
                    required
                    placeholder="Verification code"
                    inputProps={{ style: { backgroundColor: "white" } }}
                  />
                  <Button
                    onClick={onVerifyCodeSubmit}
                    id="verify-code-button"
                    color="secondary"
                    variant="contained"
                    className={classes.submit}
                  >
                    Verify Code
                  </Button>
                </div>
              )}

              <Button
                style={{
                  color: "#fff",
                  fontFamily: "Open Sans"
                }}
                className="textFormSignIn"
                onClick={showEmailInputs}
              >
                Sign in with your business email
              </Button>
              {showEmailInput && (
                <div>
                  <TextField
                    id="email"
                    placeholder="Email"
                    className={classes.textField}
                    type="email"
                    name="email"
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                    inputProps={{ style: { backgroundColor: "white" } }}
                  />
                  <br />
                  <TextField
                    id="password"
                    placeholder="Password"
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    variant="outlined"
                    inputProps={{ style: { backgroundColor: "white" } }}
                  />
                  <br />
                  <Button
                    onClick={signInWithEmailAndPassword}
                    id="signIn"
                    color="secondary"
                    variant="contained"
                    className={classes.submit}
                  >
                    Sign in
                  </Button>
                  <Button
                    onClick={createUserWithEmailAndPassword}
                    id="signUp"
                    color="secondary"
                    variant="contained"
                    className={classes.submit}
                  >
                    Sign up
                  </Button>
                </div>
              )}
            </DialogContent>
            <Button
              onClick={handleClose}
              style={{ color: "white", fontFamily: "Open Sans" }}
              id="cancel"
            >
              Cancel
            </Button>
          </div>
        </Container>
      </Dialog>
    </div>
  );
}
