import React from "react";
import AppDrawer from "./AppDrawer.js";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import GiftDetails from "./GiftDetails";
import Footer from "./Footer.js";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 300,
    marginTop: 30,
    color: "#ff0000"
  },
  media: {
    height: 0,
    margin: "7px",
    border: "1px solid #ECECEC",
    paddingTop: "56.25%" // 16:9
  }
}));

export default function Alerts() {
  const classes = useStyles();

  return (
    <div>
      <div className="pfContainer">
        <div className="left">
          <AppDrawer />
        </div>
        <div className="middle">
          <Container>
            <div className="peopleTitle">Alerts</div>
            <Router>
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
            </Router>
          </Container>
        </div>
        <div className="right"></div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
