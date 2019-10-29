import React from "react";
import AppDrawer from "./AppDrawer.js";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { BrowserRouter as Route, Link } from "react-router-dom";
import GiftDetails from "./GiftDetails";
import Tooltip from "@material-ui/core/Tooltip";
import * as firebase from "firebase/app";
import "firebase/auth";
import { useCollection } from "react-firebase-hooks/firestore";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 300,
    marginTop: 30,
    color: "#ff0000"
  },
  media: {
    height: 0,
    margin: "7px",
    border: "1px solid #ECECEC",
    paddingTop: "56.25%" // 16:9
  }
}));

export default function Trends(props) {
  const classes = useStyles();

  function getUserDetails() {
    var details = JSON.parse(localStorage.getItem("user"));
    return details;
  }

  function likeGift(docId) {
    console.log("liked");
    firebase
      .firestore()
      .collection("gifts")
      .doc(docId)
      .set(
        {
          likes: firebase.firestore.FieldValue.increment(1),
          likeArray: firebase.firestore.FieldValue.arrayUnion(
            firebase.auth().currentUser.uid
          )
        },
        { merge: true }
      )
      .then(function() {
        console.log("Like added");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  }

  function unlikeGift(docId) {
    console.log("unliked");
    firebase
      .firestore()
      .collection("gifts")
      .doc(docId)
      .set(
        {
          likes: firebase.firestore.FieldValue.increment(-1),
          likeArray: firebase.firestore.FieldValue.arrayRemove(
            firebase.auth().currentUser.uid
          )
        },
        { merge: true }
      )
      .then(function() {
        console.log("Unliked");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  }

  const [details] = React.useState(getUserDetails());

  const [gifts] = useCollection(firebase.firestore().collection("gifts"));

  return (
    <div>
      {gifts && (
        <span>
          <Grid container spacing={3}>
            {gifts.docs.map((doc, index) => {
              const details = doc.data();
              const userId = doc.data().userId;
              const docId = doc.id;
              return (
                <Grid item xl={4} lg={4} md={6} sm={6} xs={6} key={index}>
                  <Card className={classes.card}>
                    <Grid container spacing={3} style={{ margin: "10px" }}>
                      <Link
                        to={`/personProfile/${userId}`}
                        className="personProfile"
                      >
                        <Grid item>
                          <Avatar alt="Avatar" src={doc.data().userPhotoUrl} />
                        </Grid>
                      </Link>
                      <Grid item>{doc.data().giftName}</Grid>
                    </Grid>
                    <CardMedia
                      className={classes.media}
                      image={doc.data().giftUrl}
                      style={{ margin: "7px" }}
                    />
                    <Link
                      to={`/gifts/trends/giftDetails/${docId}`}
                      className="personProfile"
                    >
                      <GiftDetails details={details} />
                    </Link>
                    <CardActions disableSpacing>
                      <Tooltip title="Like it">
                        <IconButton
                          aria-label="add to favorites"
                          onClick={() => likeGift(docId)}
                        >
                          <FavoriteIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Wish it">
                        <IconButton aria-label="add to favorites">
                          <i className="material-icons">grade</i>
                        </IconButton>
                      </Tooltip>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </span>
      )}
    </div>
  );
}
