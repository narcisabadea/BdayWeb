import React from "react";
import AppDrawer from "./AppDrawer.js";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import Footer from "./Footer.js";
import * as firebase from "firebase/app";
import "firebase/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import GiftsFollowing from "./GiftsFollowing.js";
import NewGifts from "./NewGifts.js";
import Trends from "./Trends.js";

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

export default function Gifts(props) {
  const classes = useStyles();

  function getUserDetails() {
    var details = JSON.parse(localStorage.getItem("user"));
    return details;
  }

  function likeGift() {
    console.log("liked");
    // firebase
    //   .firestore()
    //   .collection("gifts")
    //   .doc()
    //   .set(
    //     {
    //       likes: 0,
    //       likeArray: firebase.auth().currentUser.uid
    //     },
    //     { merge: true }
    //   )
    //   .then(function() {
    //     console.log("Like added");
    //   })
    //   .catch(function(error) {
    //     console.error("Error writing document: ", error);
    //   });
  }

  const [details] = React.useState(getUserDetails());

  const [gifts] = useCollection(firebase.firestore().collection("gifts"));

  return (
    <div>
      <div className="pfContainer">
        <div className="left">
          <AppDrawer />
        </div>
        <div className="middle">
          <Container>
            <div className="peopleTitle">Gifts</div>
            <div className="peopleButtonsContainer">
              <Button>
                <Link to="/gifts/trends" className="peopleButtons">
                  Trends
                </Link>
              </Button>
              <Button>
                <Link to="/gifts/newGifts" className="peopleButtons">
                  New
                </Link>
              </Button>
              {details.phoneNumber && (
                <span>
                  <Button>
                    <Link to="/gifts/giftsFollowing" className="peopleButtons">
                      Following
                    </Link>
                  </Button>
                </span>
              )}
              <Switch>
                <Route path="/gifts/trends" component={Trends} />
                <Route path="/gifts/newGifts" component={NewGifts} />
                <Route
                  path="/gifts/giftsFollowing"
                  component={GiftsFollowing}
                />
                <Route component={Trends} />
              </Switch>
            </div>
            <br />
            <Divider />
          </Container>
        </div>
        <div className="right"></div>
      </div>
      <Footer />
    </div>
  );
}
