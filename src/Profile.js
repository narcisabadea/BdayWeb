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
import Footer from "./Footer.js";

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: 10
  },
  bigAvatar: {
    marginTop: -70,
    marginRight: 30,
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
          <Grid container justify="flex-end" alignItems="flex-start">
            <Grid item>
              <div className="profileDetails">Name Surname</div>
              <div className="dateOfBirthProfile">Sat, Mar 6</div>
              <div className="profileDetails">1234 followers</div>
            </Grid>
            <Grid item>
              <Avatar
                alt="Avatar"
                src="images/pic.jpg"
                className={classes.bigAvatar}
              />
              <EditProfile />
            </Grid>
          </Grid>
          <Container>
            <Grid container justify="flex-start" alignItems="center">
              <AddGift />
              <CreateEvent />
              <Router>
                <Button color="secondary">
                  <Link to="/myEvents" style={{ color: "red" }}>
                    <i className="material-icons centerButtons">
                      event_available
                    </i>
                    <br />
                    Events
                  </Link>
                </Button>
                <Button color="secondary">
                  <Link to="/myGifts" style={{ color: "red" }}>
                    <i className="material-icons centerButtons">
                      card_giftcard
                    </i>
                    <br />
                    Gifts
                  </Link>
                </Button>
                <Switch>
                  <Route path="/myEvents" component={MyEvents} />
                  <Route path="/myGifts" component={MyGifts} />
                  <Route component={MyGifts} />
                </Switch>
              </Router>
            </Grid>
          </Container>
        </div>
        <div className="right"></div>
      </div>
      <Footer />
    </div>
  );
}
