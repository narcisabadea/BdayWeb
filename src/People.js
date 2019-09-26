import React from "react";
import AppDrawer from "./AppDrawer.js";
import Popular from "./Popular.js";
import Friends from "./Friends.js";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Footer from "./Footer.js";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default function People() {
  return (
    <div>
      <div className="pfContainer">
        <div className="left">
          <AppDrawer />
        </div>
        <div className="middle">
          <Container>
            <div className="peopleTitle">People</div>
            <Router>
              <div className="peopleButtonsContainer">
                <Button>
                  <Link to="/popular" className="peopleButtons">
                    Popular
                  </Link>
                </Button>
                <Button>
                  <Link to="/friends" className="peopleButtons">
                    Friends
                  </Link>
                </Button>
                <Button>
                  <Link to="/" className="peopleButtons">
                    Whispers
                  </Link>
                </Button>
                <Switch>
                  <Route path="/popular" component={Popular} />
                  <Route path="/friends" component={Friends} />
                  <Route component={Popular} />
                </Switch>
              </div>
            </Router>
          </Container>
        </div>
        <div className="right"></div>
      </div>
      <Footer />
    </div>
  );
}
