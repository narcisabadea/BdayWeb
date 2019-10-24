import React from "react";
import AppDrawer from "./AppDrawer.js";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Alerts() {
  return (
    <div>
      <div className="pfContainer">
        <div className="left">
          <AppDrawer />
        </div>
        <div className="middle">
          <Container>
            <div className="peopleTitle">Alerts</div>
            <div className="peopleButtonsContainer">
              <Button>
                <Link to="/" className="peopleButtons">
                  Follow Requests
                </Link>
              </Button>
              <Button>
                <Link to="/" className="peopleButtons">
                  Alerts
                </Link>
              </Button>
            </div>
          </Container>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}
