import React from "react";
import AppDrawer from "./AppDrawer.js";
import FutureEvents from "./FutureEvents.js";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from "./Footer.js";

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
            <Router>
              <div className="peopleButtonsContainer">
                <Button>
                  <Link to="/future" className="peopleButtons">
                    Future events
                  </Link>
                </Button>
                <Button>
                  <Link to="/past" className="peopleButtons">
                    Past events
                  </Link>
                </Button>
                <Route path="/future" component={FutureEvents} />
                {/* <Route path="/past" component={PastEvents} /> */}
              </div>
            </Router>
            <FutureEvents />
          </Container>
        </div>
        <div className="right"></div>
      </div>
      <Footer />
    </div>
  );
}
