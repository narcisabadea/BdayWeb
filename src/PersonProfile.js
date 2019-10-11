import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import MyGifts from "./MyGifts.js";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AppDrawer from "./AppDrawer.js";
import Footer from "./Footer.js";
import * as firebase from "firebase/app";
import "firebase/auth";
import { useCollection } from "react-firebase-hooks/firestore";

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: 10
  },
  bigAvatar: {
    marginTop: -70,
    width: 180,
    height: 180
  },
  button: {
    margin: theme.spacing(1)
  }
}));

export default function PersonProfile(props) {
  const classes = useStyles();
  const [users] = useCollection(firebase.firestore().collection("users"));
  const userId = props.location.pathname.slice(15);

  return (
    <div>
      {users && (
        <span>
          {users.docs.map((doc, index) => {
            if (doc.id === userId) {
              console.log(doc.data());
              return (
                <span key={index}>
                  <div className="pfContainer">
                    <div className="left">
                      <AppDrawer />
                    </div>
                    <div className="middle">
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
                      <Container>
                        <Grid container justify="center" alignItems="center">
                          <Avatar
                            alt="Avatar"
                            src={
                              doc.data().photoUrl ||
                              "images/user_placeholder_circle.png"
                            }
                            className={classes.bigAvatar}
                          />
                        </Grid>
                        <div className="profileDetails">
                          {doc.data().businessname || doc.data().name}
                        </div>
                        <div className="dateOfBirthProfile">
                          {doc.data().birthday}
                        </div>
                        <div className="profileDetails">
                          0 followers
                          <Button
                            style={{
                              backgroundColor: "#fff",
                              color: "#ff0000",
                              border: "1px solid #ff0000",
                              borderRadius: "15px",
                              marginLeft: "20px"
                            }}
                          >
                            Follow
                          </Button>
                        </div>
                      </Container>
                      <MyGifts />
                    </div>
                    <div className="right"></div>
                  </div>
                </span>
              );
            }
          })}
        </span>

        // <Footer />
      )}
    </div>
  );
}
