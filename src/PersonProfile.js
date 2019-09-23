import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import MyGifts from "./MyGifts.js";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AppDrawer from "./AppDrawer.js";

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: 10
  },
  bigAvatar: {
    marginTop: -70,
    width: 150,
    height: 150
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
                src="images/user_placeholder_circle.png"
                className={classes.bigAvatar}
              />
            </Grid>
            <div className="profileDetails">Name Surname</div>
            <div className="dateOfBirthProfile">Sat, Mar 6</div>
            <div className="profileDetails">1234 followers</div>
            <Button color="secondary" variant="contained">
              Follow
            </Button>
          </Container>
          <MyGifts />
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}
