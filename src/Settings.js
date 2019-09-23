import React from "react";
import AppDrawer from "./AppDrawer.js";
import Container from "@material-ui/core/Container";

export default function Settings() {
  return (
    <div>
      <div className="pfContainer">
        <div className="left">
          <AppDrawer />
        </div>
        <div className="middle">
          <Container>
            <div className="peopleTitle">Settings</div>
          </Container>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}
