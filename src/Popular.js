import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import { BrowserRouter as Route, Router, Link } from "react-router-dom";
import GiftDetails from "./GiftDetails.js";
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

export default function Popular() {
  const classes = useStyles();
  const [users] = useCollection(firebase.firestore().collection("users"));
  const [gifts] = useCollection(firebase.firestore().collection("gifts"));

  return (
    <div>
      {users && (
        <span>
          {users.docs.map((doc, index) => {
            const userId = doc.data().userId;
            return (
              <span key={index}>
                <Grid container>
                  <Link to="/personProfile" className="personProfile">
                    <Avatar
                      alt="Avatar"
                      src={doc.data().photoUrl}
                      style={{ width: "70px", height: "auto" }}
                    />
                    <Grid item>
                      <div className="profileDetails">
                        {doc.data().businessname}
                      </div>
                      <div className="dateOfBirth">{doc.data().birthday}</div>
                    </Grid>
                  </Link>
                </Grid>
                {gifts && (
                  <span>
                    <Grid container spacing={3}>
                      {gifts.docs.map((doc, index) => {
                        const userIdGift = doc.data().userId;
                        if (userId === userIdGift) {
                          return (
                            <Grid
                              item
                              xl={4}
                              lg={4}
                              md={6}
                              sm={6}
                              xs={12}
                              key={index}
                            >
                              <Card className={classes.card}>
                                <Grid
                                  container
                                  spacing={3}
                                  style={{ margin: "10px" }}
                                >
                                  <Link
                                    to="/personProfile"
                                    className="personProfile"
                                  >
                                    <Grid item>
                                      <Avatar
                                        alt="Avatar"
                                        src={doc.data().userPhotoUrl}
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
                    <br />
                    <Divider></Divider>
                  </span>
                )}
              </span>
            );
          })}
        </span>
      )}
    </div>
  );
}
