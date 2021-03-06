import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import MyEvents from "./MyEvents.js";
import MyGifts from "./MyGifts.js";
import CreateEvent from "./CreateEvent.js";
import AddGift from "./AddGift.js";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AppDrawer from "./AppDrawer.js";
import EditProfile from "./EditProfile.js";
import * as firebase from "firebase/app";
import "firebase/auth";
import { useCollection } from "react-firebase-hooks/firestore";

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: 10
  },
  bigAvatar: {
    marginTop: "-35%",
    marginRight: 30,
    marginLeft: 10,
    width: 180,
    height: 180
  },
  button: {
    margin: theme.spacing(1)
  }
}));

export default function Profile() {
  const classes = useStyles();

  const [users] = useCollection(firebase.firestore().collection("users"));

  return (
    <div>
      {users && (
        <span>
          {users.docs.map((doc, index) => {
            if (doc.id === firebase.auth().currentUser.uid) {
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
                userBirthday.getDate() + " " + months[userBirthday.getMonth()];
              return (
                <span key={index}>
                  <div id="profileCoverDiv">
                    <img
                      src={
                        doc.data().coverPhoto ||
                        "images/cover_image_placeholder.jpg"
                      }
                      alt="cover"
                      id="profileCover"
                    />
                  </div>
                  <div className="pfContainer">
                    <div className="left">
                      <AppDrawer />
                    </div>
                    <div className="middle">
                      <Grid
                        container
                        justify="flex-end"
                        alignItems="flex-start"
                      >
                        <Grid item>
                          <div className="profileDetails">
                            {doc.data().businessname || doc.data().name}
                          </div>
                          <div className="dateOfBirthProfile">
                            {formatedBirthday}
                          </div>
                          <div className="profileDetails">0 followers</div>
                        </Grid>
                        <Grid item>
                          <Avatar
                            alt="Avatar"
                            src={
                              doc.data().photoUrl ||
                              "/images/user_placeholder_circle.png"
                            }
                            className={classes.bigAvatar}
                          />
                          <EditProfile />
                        </Grid>
                      </Grid>
                      <Container>
                        <Grid
                          container
                          justify="flex-start"
                          alignItems="center"
                        >
                          <AddGift />
                          <CreateEvent />
                          <Button color="secondary">
                            <Link
                              to="/profile/myEvents"
                              style={{ color: "red" }}
                            >
                              <img src="/icons/calendar.png" alt="calendar" />
                              <br />
                              <div style={{ fontFamily: "Open Sans" }}>
                                Events
                              </div>
                            </Link>
                          </Button>
                          <Button color="secondary">
                            <Link
                              to="/profile/myGifts"
                              style={{ color: "red" }}
                            >
                              <img src="/icons/gift.png" alt="gift" />
                              <br />
                              <div style={{ fontFamily: "Open Sans" }}>
                                Gifts
                              </div>
                            </Link>
                          </Button>
                          <Container>
                            <Switch>
                              <Route
                                path="/profile/myEvents"
                                component={MyEvents}
                              />
                              <Route
                                path="/profile/myGifts"
                                component={MyGifts}
                              />
                              <Route component={MyGifts} />
                            </Switch>
                          </Container>
                        </Grid>
                      </Container>
                    </div>
                    <div className="right"></div>
                  </div>
                </span>
              );
            }
          })}
        </span>
      )}
    </div>
  );
}
