import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import GiftDetails from "./GiftDetails";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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

export default function MyGifts() {
  const classes = useStyles();
  const [gifts] = useCollection(firebase.firestore().collection("gifts"));

  return (
    <div>
      {gifts && (
        <span>
          <Grid container spacing={3}>
            {gifts.docs.map((doc, index) => {
              const userId = doc.data().userId;
              if (userId === firebase.auth().currentUser.uid) {
                return (
                  <Grid item xl={4} lg={4} md={6} sm={6} xs={12} key={index}>
                    <Card className={classes.card}>
                      <Grid container spacing={3} style={{ margin: "10px" }}>
                        <Link to="/personProfile" className="personProfile">
                          <Grid item>
                            <Avatar
                              alt="Avatar"
                              src={doc.data().userphotoUrl}
                            />
                          </Grid>
                        </Link>
                        <Grid item>{doc.data().giftName}</Grid>
                      </Grid>
                      <CardMedia
                        className={classes.media}
                        image={doc.data().giftUrl}
                        style={{ margin: "7px" }}
                      />
                      <CardActions disableSpacing>
                        <div>
                          <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                          </IconButton>
                          <div>1.233</div>
                        </div>
                        <div>
                          <IconButton aria-label="add to favorites">
                            <i className="material-icons">grade</i>
                          </IconButton>
                          <div>Wish it</div>
                        </div>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              }
            })}
          </Grid>
        </span>
      )}
    </div>
  );
}
