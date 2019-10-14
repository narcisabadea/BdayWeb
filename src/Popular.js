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
import Tooltip from "@material-ui/core/Tooltip";
import { BrowserRouter as Route, Router, Link } from "react-router-dom";
import GiftDetails from "./GiftDetails.js";
import PersonProfile from "./PersonProfile.js";
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
  },
  bigAvatar: {
    marginTop: 15,
    width: 60,
    height: 60
  }
}));

export default function Popular(props) {
  const classes = useStyles();
  const [users] = useCollection(firebase.firestore().collection("users"));
  const [gifts] = useCollection(firebase.firestore().collection("gifts"));

  return (
    <div>
      {gifts && (
        <span>
          {users.docs.map((doc, index) => {
            const userId = doc.data().userId;
            return (
              <span key={index}>
                <Grid container>
                  <Link
                    to={`/personProfile/${userId}`}
                    className="personProfile"
                  >
                    <Avatar
                      alt="Avatar"
                      src={doc.data().photoUrl}
                      className={classes.bigAvatar}
                    />
                    <Grid item>
                      <div className="profileDetails">
                        {doc.data().businessname || doc.data().name}
                      </div>
                      <div className="dateOfBirth">{doc.data().birthday}</div>
                    </Grid>
                  </Link>
                  <Route
                    exact
                    path="/personProfile/:userId"
                    component={PersonProfile}
                  />
                </Grid>
                {gifts && (
                  <span>
                    <Grid container spacing={3}>
                      {gifts.docs.map((doc, index) => {
                        const details = doc.data();
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
                                <GiftDetails details={details} />
                                <CardActions disableSpacing>
                                  <Tooltip title="Like it">
                                    <IconButton aria-label="add to favorites">
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
