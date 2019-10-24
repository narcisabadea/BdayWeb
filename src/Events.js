import React from "react";
import AppDrawer from "./AppDrawer.js";
import FutureEvents from "./FutureEvents.js";
import PastEvents from "./PastEvents";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default function Events() {
  return (
    <div>
      <div className="pfContainer">
        <div className="left">
          <AppDrawer />
        </div>
        <div className="middle">
          <Container>
            <div className="peopleTitle">Events</div>

            <div className="peopleButtonsContainer">
              <Button>
                <Link to="/future" className="peopleButtons">
                  Future
                </Link>
              </Button>
              <Button>
                <Link to="/past" className="peopleButtons">
                  Past
                </Link>
              </Button>
              <Container>
                <Switch>
                  <Route path="/future" component={FutureEvents} />
                  <Route path="/past" component={PastEvents} />
                  <Route component={FutureEvents} />
                </Switch>
              </Container>
            </div>
          </Container>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}
