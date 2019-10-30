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
import { BrowserRouter as Route, Link } from "react-router-dom";
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
    marginRight: 10,
    marginBottom: 10,
    width: 60,
    height: 60
  }
}));

export default function Friends(props) {
  const classes = useStyles();
  const [users] = useCollection(firebase.firestore().collection("users"));
  const [follow] = useCollection(
    firebase.firestore().collection("user-follow")
  );
  const [gifts] = useCollection(firebase.firestore().collection("gifts"));

  return (
    <div>
      {gifts && (
        <span>
          {follow.docs.map((doc, index) => {
            const userId = doc.id;
            const following = Object.keys(doc.data().following);
            if (userId === firebase.auth().currentUser.uid) {
              following.forEach(item => {
                return (
                  <span key={index}>
                    {users && (
                      <span>
                        <Grid container>
                          {users.docs.map((doc, index2) => {
                            const details = doc.data();
                            const userIdGift = doc.data().userId;
                            const docId = doc.id;
                            const months = [
                              "JAN",
                              "FEB",
                              "MAR",
                              "APR",
                              "MAY",
                              "JUN",
                              "JUL",
                              "AUG",
                              "SEP",
                              "OCT",
                              "NOV",
                              "DEC"
                            ];
                            let userBirthday = doc.data().birthday.toDate();
                            let formatedBirthday =
                              userBirthday.getDate() +
                              " " +
                              months[userBirthday.getMonth()];
                            if (docId == item) {
                              return (
                                <span key={index2}>
                                  {users && (
                                    <span>
                                      <Link
                                        to={`/personProfile/${userId}`}
                                        className="personProfile"
                                      >
                                        <Avatar
                                          alt="Avatar"
                                          src={doc.data().photoUrl}
                                          className={classes.bigAvatar}
                                        />
                                        {console.log("data", doc.data())}
                                        <Grid item>
                                          <div className="profileDetails">
                                            {doc.data().businessname ||
                                              doc.data().name}
                                          </div>
                                          <div className="dateOfBirth">
                                            {formatedBirthday}
                                          </div>
                                        </Grid>
                                      </Link>
                                      <Route
                                        exact
                                        path="/personProfile/:userId"
                                        component={PersonProfile}
                                      />
                                    </span>
                                  )}
                                </span>
                              );
                            }
                          })}
                        </Grid>
                      </span>
                    )}
                    {gifts && (
                      <span>
                        <Grid container spacing={3}>
                          {gifts.docs.map((doc, index) => {
                            const details = doc.data();
                            const userIdGift = doc.data().userId;
                            const docId = doc.id;
                            if (userId === userIdGift) {
                              return (
                                <Grid
                                  item
                                  xl={4}
                                  lg={4}
                                  md={6}
                                  sm={6}
                                  xs={6}
                                  key={index}
                                >
                                  <Card className={classes.card}>
                                    <Grid
                                      container
                                      spacing={3}
                                      style={{ margin: "10px" }}
                                    >
                                      <Grid item>{doc.data().giftName}</Grid>
                                    </Grid>
                                    <CardMedia
                                      className={classes.media}
                                      image={doc.data().giftUrl}
                                      style={{ margin: "7px" }}
                                    />
                                    <Link
                                      to={`/people/friends/giftDetails/${docId}`}
                                      className="personProfile"
                                    >
                                      <GiftDetails details={details} />
                                    </Link>
                                    <CardActions disableSpacing>
                                      <Tooltip title="Like it">
                                        <IconButton aria-label="add to favorites">
                                          <FavoriteIcon />
                                        </IconButton>
                                      </Tooltip>
                                      <Tooltip title="Wish it">
                                        <IconButton aria-label="add to favorites">
                                          <i className="material-icons">
                                            grade
                                          </i>
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
              });
            }
          })}
        </span>
      )}
    </div>
  );
}
