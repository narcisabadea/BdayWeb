import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import * as firebase from "firebase/app";
import "firebase/auth";
import { useCollection } from "react-firebase-hooks/firestore";

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
  const [open, setOpen] = useState(false);
  const [addedSuccesfully, setAddedSuccesfully] = useState(false);
  const [maxWidth] = useState("sm");
  const [fileName, setFileName] = useState("");
  const [disabled, setDisable] = useState(false);
  const classes = useStyles();
  const [url, setUrl] = useState("");
  const [date] = useState(new Date());
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const giftCount = useCollection(
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
  );

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleImgChange(event) {
    setFileName(URL.createObjectURL(event.target.files[0]));
  }

  function addGift() {
    setDisable(true);
    var giftName = document.getElementById("giftName").value;
    var giftLink = document.getElementById("giftLink").value;
    var giftDescription = document.getElementById("giftDescription").value;
    console.log(firebase.auth().currentUser.photoURL);
    firebase
      .firestore()
      .collection("gifts/")
      .doc()
      .set({
        giftName: giftName,
        giftLink: giftLink,
        giftDescription: giftDescription,
        giftUrl: url,
        createdAt: date,
        likeArray: [],
        likes: 0,
        received: false,
        reserved: false,
        userId: firebase.auth().currentUser.uid,
        userPhotoUrl: firebase.auth().currentUser.photoURL,
        createdAt: new Date(),
        received: false,
        reserved: false
      })
      .then(function() {
        setAddedSuccesfully(true);
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });

    // firebase
    //   .firestore()
    //   .collection("users/")
    //   .doc(firebase.auth().currentUser.uid)
    //   .set(
    //     {
    //       giftCount: giftCount.data().giftCount + 1
    //     },
    //     { merge: true }
    //   );
  }

  function handleImgChange(event) {
    const user = firebase.auth().currentUser;
    var file = event.target.files[0];
    console.log(file);
    var fileName = setFileName(URL.createObjectURL(event.target.files[0]));
    var storageRef = firebase.storage().ref("gifts/" + file.name);
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
      {giftCount && (
        <span>
          <Button color="secondary" onClick={handleClickOpen}>
            <div>
              <img src="/icons/addBtn.png" alt="add gift" /> <br />
              <div style={{ fontFamily: "Open Sans" }}>Add Gift </div>
            </div>
          </Button>
          <Dialog
            disableBackdropClick
            disableEscapeKeyDown
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
            fullScreen={fullScreen}
            maxWidth={maxWidth}
          >
            <Grid
              container
              justify="center"
              alignItems="center"
              style={{ border: "2px solid red" }}
            >
              <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                <img
                  src={fileName || "/images/cover_image_placeholder.jpg"}
                  style={{ width: "80%", margin: "2%" }}
                />
                <input
                  type="file"
                  multiple
                  id="fileItem"
                  onChange={handleImgChange}
                  style={{ margin: "2%" }}
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
                {addedSuccesfully && <div>Gift addded successfully</div>}
              </Grid>
              <DialogActions>
                <Button
                  variant="contained"
                  className={classes.button}
                  color="secondary"
                  disabled={disabled}
                  onClick={addGift}
                  style={{ fontFamily: "Open Sans" }}
                >
                  Add gift
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
        </span>
      )}
    </div>
  );
}
