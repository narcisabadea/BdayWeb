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

export default function Profile() {
  const classes = useStyles();

  return (
    <div>
      <div className="pfContainer">
        <div className="left">
          <AppDrawer />
        </div>
        <div className="middle">
          <div id="profileCoverDiv">
            <img src="images/cover.jpg" alt="cover" id="profileCover" />
          </div>
          <Container>
            <Grid container justify="center" alignItems="center">
              <Avatar
                alt="Avatar"
                src="images/pic2.jpg"
                className={classes.bigAvatar}
              />
            </Grid>
            <div className="profileDetails">Name Surname</div>
            <div className="dateOfBirthProfile">Sat, Mar 6</div>
            <div className="profileDetails">
              1234 followers
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
      <Footer />
    </div>
  );
}
