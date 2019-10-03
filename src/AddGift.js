import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import * as firebase from "firebase/app";
import "firebase/auth";

export default function AddGift() {
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
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));

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
  const [url, setUrl] = React.useState("");
  const [date, setdate] = React.useState(new Date());

  function addGift() {
    var giftName = document.getElementById("giftName").value;
    var giftLink = document.getElementById("giftLink").value;
    var giftDescription = document.getElementById("giftDescription").value;
    var giftUrl = [];
    giftUrl.push(url);

    firebase
      .firestore()
      .collection("gifts/")
      .doc()
      .set({
        giftName: giftName,
        giftLink: giftLink,
        giftDescription: giftDescription,
        giftUrl: giftUrl,
        createdAt: date,
        likeArray: [],
        likes: 0,
        received: false,
        reserved: false,
        userId: firebase.auth().currentUser.uid,
        userphotoUrl: userDetails[4]
      })
      .then(function() {
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
    var storageRef = firebase.storage().ref("gifts/" + userUid);
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
          .ref("gifts/")
          .child(userUid)
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
          <i className="material-icons centerButtons">add_circle</i> <br />
          Add Gift
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
        <Grid container justify="center" alignItems="center">
          <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
            <img
              src={fileName || "images/cover_image_placeholder.jpg"}
              style={{ width: "80%" }}
            />
            <input
              type="file"
              multiple
              id="fileItem"
              onChange={handleImgChange}
            />
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
            <TextField
              id="giftName"
              label="Gift name"
              className={classes.textField}
              margin="normal"
              autoFocus
            />
            <TextField
              id="giftLink"
              label="Gift link"
              className={classes.textField}
              margin="normal"
            />
            <TextField
              id="giftDescription"
              label="Gift description"
              className={classes.textField}
              margin="normal"
            />
          </Grid>
        </Grid>
        <DialogActions>
          <Button
            variant="contained"
            className={classes.button}
            color="secondary"
            onClick={addGift}
          >
            Add gift
          </Button>
          <Button onClick={handleClose} color="secondary">
            Back
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
