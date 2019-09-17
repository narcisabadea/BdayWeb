import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import history from "./history";

export default function FormDialog() {
  const useStyles = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    paper: {
      marginTop: theme.spacing(30),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
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
      var code = getCodeFromUserInput();
      window.confirmationResult.confirm(code).then(function (result) {
        // User signed in successfully.
        var user = result.user;
        console.log('s-a logat', user)
        window.verifyingCode = false;
        window.confirmationResult = null;
        setOpen(false);
        history.push('/profile');
        window.location.reload();
      }).catch(function (error) {
        console.error('Error while checking the verification code', error);
        window.alert('Error while checking the verification code:\n\n'
            + error.code + '\n\n' + error.message);
        window.verifyingCode = false;
        console.log('nu s-a logat')
      });
    }
  }

  function getCodeFromUserInput() {
    return document.getElementById('verification-code').value;
  }

  return (
    <div>
      <Button style={{maxWidth: '250px', maxHeight: '60px', minWidth: '250px', minHeight: '60px', backgroundColor: '#d71d24', color: '#fff', fontSize: '16px',
        border: '2px solid white'}} variant="contained" className={classes.button} onClick={handleClickOpen}>
        Login
      </Button>
      <Dialog fullScreen  open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <Container >
          <img src="images/copil.jpg" alt="cover" id="logInBg"/>
          <img src="images/s10.png" alt="cover"id="logInPhone"/>
          <CssBaseline />
          <div className={classes.paper}>
            <DialogContent className="phoneContainer">
              <div className='dayTitle textForm'>
                <img src="images/launchscreen_logo.png" alt="cover" style={{height: '120px'}}/>
              </div>
              <div className='textFormSignIn'>Sign in with your phone number below.</div>
              <TextField
                type="text"
                pattern="\+[0-9\s\-\(\)]+"
                id="phone-number"
                variant="outlined"
                required
                placeholder="Phone no"
                inputProps={{ style: { backgroundColor: 'white'}}}
              />
              <br/>
              <Button onClick={componentDidMount} id ="sign-in-button" color="secondary"
                variant="contained"
                className={classes.submit}>
                Send code
              </Button>
                <div className='textFormSignIn'>Check your phone for the verification code.</div>
                <TextField
                  type="text"
                  id="verification-code"
                  variant="outlined"
                  margin="normal"
                  required
                  placeholder="Verification code"
                  inputProps={{ style: { backgroundColor: 'white'}}}
                />
                <br/>
                <Button onClick={onVerifyCodeSubmit} id="verify-code-button" color="secondary" 
                  variant="contained"
                  className={classes.submit}>
                  Verify Code
                </Button>
              </DialogContent>
            <Button onClick={handleClose} style={{color: 'white'}}>
              Cancel
            </Button>
          </div>
        </Container>
      </Dialog>
    </div>
  );
}
