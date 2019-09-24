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
          <Grid container justify="center" alignItems="center">
            <Avatar
              alt="Avatar"
              src="images/pic.jpg"
              className={classes.bigAvatar}
            />
          </Grid>
          <div className="profileDetails">Name Surname</div>
          <div className="dateOfBirthProfile">Sat, Mar 6</div>
          <div className="profileDetails">1234 followers</div>
          <EditProfile />
          <Container>
            <Grid container justify="flex-start" alignItems="center">
              <AddGift />
              <CreateEvent />
              <Router>
                <Button color="secondary">
                  <div>
                    <i className="material-icons centerButtons">
                      event_available
                    </i>
                    <br />
                    <Link to="/myEvents" style={{ color: "red" }}>
                      Events
                    </Link>
                  </div>
                </Button>
                <Button color="secondary">
                  <div>
                    <i className="material-icons centerButtons">
                      card_giftcard
                    </i>
                    <br />
                    <Link to="/myGifts" style={{ color: "red" }}>
                      Gifts
                    </Link>
                  </div>
                </Button>
                <Route path="/myEvents" component={MyEvents} />
                <Route path="/myGifts" component={MyGifts} />
              </Router>
            </Grid>
            <div className="active">
              <MyGifts />
            </div>
            {/* <MyEvents /> */}
          </Container>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}
