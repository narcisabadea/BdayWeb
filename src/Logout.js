import React from "react";
import Button from "@material-ui/core/Button";
import * as firebase from "firebase/app";
import "firebase/auth";
import history from "./history";

export default function SignOut() {
  function onSignOutClick() {
    firebase.auth().signOut();
    history.push("/");
    window.location.reload();
  }

  return (
    <div>
      <Button
        color="inherit"
        onClick={onSignOutClick}
        id="sign-out-button"
        style={{ fontFamily: "Open Sans" }}
      >
        Sign-out
      </Button>
    </div>
  );
}
