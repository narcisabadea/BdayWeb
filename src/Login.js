import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

export default function FormDialog() {
  const useStyles = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function getPhoneNumberFromUserInput() {
    return document.getElementById('phone-number').value;
  }
  
  function isPhoneNumberValid() {
    var pattern = /^\+[0-9\s\-\(\)]+$/;
    var phoneNumber = getPhoneNumberFromUserInput();
    return phoneNumber.search(pattern) !== -1;
  }

  function componentDidMount() {
    // [START appVerifier]
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': function(response) {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        console.log("success", response);
        // onSignInSubmit();
      },
      'expired-callback': function() {
        console.log("expired-callback");
      }
    });
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
      firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
          .then(function (confirmationResult) {
            console.log(phoneNumber)
            console.log(appVerifier)
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            window.signingIn = false;
          }).catch(function (error) {
            // Error; SMS not sent
            console.error('Error during signInWithPhoneNumber', error);
            window.alert('Error during signInWithPhoneNumber:\n\n'
                + error.code + '\n\n' + error.message);
            window.signingIn = false;
          });
    }
  }

  function onVerifyCodeSubmit(e) {
    e.preventDefault();
    if (!!getCodeFromUserInput()) {
      window.verifyingCode = true;
      // updateVerifyCodeButtonUI();
      var code = getCodeFromUserInput();
      window.confirmationResult.confirm(code).then(function (result) {
        // User signed in successfully.
        var user = result.user;
        console.log('s-a logat', user)
        window.verifyingCode = false;
        window.confirmationResult = null;
        setOpen(false);
        // updateVerificationCodeFormUI();
      }).catch(function (error) {
        // User couldn't sign in (bad verification code?)
        console.error('Error while checking the verification code', error);
        window.alert('Error while checking the verification code:\n\n'
            + error.code + '\n\n' + error.message);
        window.verifyingCode = false;
        console.loge('nu s-a logat')
        // updateSignInButtonUI();
        // updateVerifyCodeButtonUI();
      });
    }
  }

  function getCodeFromUserInput() {
    return document.getElementById('verification-code').value;
  }

  function onSignOutClick() {
    firebase.auth().signOut();
  }

  return (
    <div>
      <Button color="inherit" onClick={handleClickOpen}>
        Login
      </Button>
      {/* <Button color="inherit" onClick={onSignOutClick} id="sign-out-button">Sign-out</Button> */}
      
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log in
            </Typography>
            <DialogContent>
              <DialogContentText>
                Sign in with your phone number below.
              </DialogContentText>
              <TextField
                type="text"
                pattern="\+[0-9\s\-\(\)]+"
                id="phone-number"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Phone no"
                autoFocus
              />
              <Button onClick={componentDidMount} id ="sign-in-button" color="primary" fullWidth
                variant="contained"
                className={classes.submit}>
                Send code
              </Button>
            </DialogContent>
            <DialogActions>
              <DialogContent>
                <DialogContentText>
                  Check your phone for the verification code.
                </DialogContentText>
                <TextField
                  type="text"
                  id="verification-code"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Verification code"
                />
                <Button onClick={onVerifyCodeSubmit} id="verify-code-button" color="primary" fullWidth
                  variant="contained"
                  className={classes.submit}>
                  Verify Code
                </Button>
              </DialogContent>
            </DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
          </div>
        </Container>
      </Dialog>
    </div>
  );
}
