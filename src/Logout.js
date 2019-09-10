import React from 'react';
import Button from '@material-ui/core/Button';
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default function SignOut() {
  function onSignOutClick() {
    firebase.auth().signOut();
  }

  return (
    <div>
      <Button color="inherit" onClick={onSignOutClick} id="sign-out-button">Sign-out</Button>
    </div>
  );
}
