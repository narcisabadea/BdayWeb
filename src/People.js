import React from "react";
import AppDrawer from "./AppDrawer.js";
import Popular from "./Popular.js";
import Friends from "./Friends.js";
import Whispers from "./Whispers.js";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Footer from "./Footer.js";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default function People() {
  function getUserDetails() {
    var details = JSON.parse(localStorage.getItem("user"));
    return details;
  }
  const [details] = React.useState(getUserDetails());

  return (
    <div>
      <div className="pfContainer">
        <div className="left">
          <AppDrawer />
        </div>
        <div className="middle">
          <Container>
            <div className="peopleTitle">People</div>

            <div className="peopleButtonsContainer">
              <Button>
                <Link to="/popular" className="peopleButtons">
                  Popular
                </Link>
              </Button>
              {details.phoneNumber && (
                <span>
                  <Button>
                    <Link to="/friends" className="peopleButtons">
                      Friends
                    </Link>
                  </Button>
                  <Button>
                    <Link to="/whispers" className="peopleButtons">
                      Whispers
                    </Link>
                  </Button>
                </span>
              )}
              <Switch>
                <Route path="/popular" component={Popular} />
                <Route path="/friends" component={Friends} />
                <Route path="/whispers" component={Whispers} />
                <Route component={Popular} />
              </Switch>
            </div>
          </Container>
        </div>
        <div className="right"></div>
      </div>
      <Footer />
    </div>
  );
}
