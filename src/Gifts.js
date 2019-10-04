import React, { useEffect } from "react";
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

export default function Gifts() {
  const classes = useStyles();

  function getUserDetails() {
    var details = JSON.parse(localStorage.getItem("user"));
    return details;
  }

  const [details] = React.useState(getUserDetails());

  const [giftDetails, setGiftDetails] = React.useState("");

  const [gifts, loading, error] = useCollection(
    firebase.firestore().collection("gifts")
  );

  // useEffect(() => {
  //   {
  //     gifts && (
  //       <span>
  //         {gifts.docs.map(doc => (
  //           <React.Fragment key={doc.id}>
  //             {JSON.stringify(doc.data())}
  //           </React.Fragment>
  //         ))}
  //       </span>
  //     );
  //   }
  // });

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
                {gifts.docs.map((doc, index) => {
                  // console.log(doc.data());
                  return (
                    <span key={index}>
                      <Grid container spacing={3}>
                        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
                          <Card className={classes.card}>
                            <Grid
                              container
                              spacing={3}
                              style={{ margin: "10px" }}
                            >
                              <Link
                                to="/personProfile"
                                className="personProfile"
                              >
                                <Grid item>
                                  <Avatar
                                    alt="Avatar"
                                    src={doc.data().userphotoUrl}
                                  />
                                </Grid>
                              </Link>
                              <Grid item>{doc.data().giftName}</Grid>
                            </Grid>
                            <CardMedia
                              className={classes.media}
                              image={doc.data().giftUrl}
                              style={{ margin: "7px" }}
                            />
                            <CardActions disableSpacing>
                              <div>
                                <IconButton aria-label="add to favorites">
                                  <FavoriteIcon />
                                </IconButton>
                                <div>1.233</div>
                              </div>
                              <div>
                                <IconButton aria-label="add to favorites">
                                  <i className="material-icons">grade</i>
                                </IconButton>
                                <div>Wish it</div>
                              </div>
                            </CardActions>
                          </Card>
                        </Grid>
                      </Grid>
                    </span>
                  );
                })}
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
