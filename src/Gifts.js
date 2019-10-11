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
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import GiftDetails from "./GiftDetails";
import PersonProfile from "./PersonProfile";
import Tooltip from "@material-ui/core/Tooltip";
import Footer from "./Footer.js";
import * as firebase from "firebase/app";
import "firebase/auth";
import { useCollection } from "react-firebase-hooks/firestore";

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
            <Router>
              <div className="peopleButtonsContainer">
                <Button>
                  <Link to="/" className="peopleButtons">
                    Trends
                  </Link>
                </Button>
                <Button>
                  <Link to="/" className="peopleButtons">
                    New
                  </Link>
                </Button>
                {details.phoneNumber && (
                  <span>
                    <Button>
                      <Link to="/" className="peopleButtons">
                        Following
                      </Link>
                    </Button>
                  </span>
                )}
              </div>
            </Router>
            {gifts && (
              <span>
                <Grid container spacing={3}>
                  {gifts.docs.map((doc, index) => {
                    const details = doc.data();
                    const userId = doc.data().userId;
                    // console.log(userId);
                    return (
                      <Grid
                        item
                        xl={4}
                        lg={4}
                        md={6}
                        sm={6}
                        xs={12}
                        key={index}
                      >
                        <Card className={classes.card}>
                          <Grid
                            container
                            spacing={3}
                            style={{ margin: "10px" }}
                          >
                            <Link
                              to={`/personProfile/${userId}`}
                              className="personProfile"
                            >
                              <Grid item>
                                <Avatar
                                  alt="Avatar"
                                  src={doc.data().userPhotoUrl}
                                />
                              </Grid>
                            </Link>
                            <Route
                              exact
                              path="/personProfile/:userId"
                              render={props => (
                                <PersonProfile {...props} userId={userId} />
                              )}
                              // component={PersonProfile}
                            />
                            <Grid item>{doc.data().giftName}</Grid>
                          </Grid>
                          <CardMedia
                            className={classes.media}
                            image={doc.data().giftUrl}
                            style={{ margin: "7px" }}
                          />
                          <GiftDetails details={details} />
                          <CardActions disableSpacing>
                            <Tooltip title="Like it">
                              <IconButton
                                aria-label="add to favorites"
                                onClick={likeGift}
                              >
                                <FavoriteIcon />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Wish it">
                              <IconButton aria-label="add to favorites">
                                <i className="material-icons">grade</i>
                              </IconButton>
                            </Tooltip>
                          </CardActions>
                        </Card>
                      </Grid>
                    );
                  })}
                </Grid>
              </span>
            )}
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
