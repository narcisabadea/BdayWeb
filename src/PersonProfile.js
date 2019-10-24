import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Divider from "@material-ui/core/Divider";
import Tooltip from "@material-ui/core/Tooltip";
import GiftDetails from "./GiftDetails.js";
import { BrowserRouter as Link } from "react-router-dom";
import AppDrawer from "./AppDrawer.js";
import * as firebase from "firebase/app";
import "firebase/auth";
import { useCollection } from "react-firebase-hooks/firestore";

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: 10
  },
  bigAvatar: {
    marginTop: -70,
    width: 180,
    height: 180
  },
  button: {
    margin: theme.spacing(1)
  },
  media: {
    height: 0,
    margin: "7px",
    border: "1px solid #ECECEC",
    paddingTop: "56.25%" // 16:9
  }
}));

export default function PersonProfile(props) {
  const classes = useStyles();
  const [users] = useCollection(firebase.firestore().collection("users"));
  const [gifts] = useCollection(firebase.firestore().collection("gifts"));
  const userId = props.location.pathname.slice(15);

  return (
    <div>
      {users && (
        <span>
          {users.docs.map((doc, index) => {
            if (doc.id === userId) {
              // console.log(doc.data());
              return (
                <span key={index}>
                  <div className="pfContainer">
                    <div className="left">
                      <AppDrawer />
                    </div>
                    <div className="middle">
                      <div id="profileCoverDiv">
                        <img
                          src={
                            doc.data().coverPhoto ||
                            "images/cover_image_placeholder.jpg"
                          }
                          alt="cover"
                          id="profileCover"
                        />
                      </div>
                      <Container>
                        <Grid container justify="center" alignItems="center">
                          <Avatar
                            alt="Avatar"
                            src={
                              doc.data().photoUrl ||
                              "images/user_placeholder_circle.png"
                            }
                            className={classes.bigAvatar}
                          />
                        </Grid>
                        <div className="profileDetails">
                          {doc.data().businessname || doc.data().name}
                        </div>
                        <div className="dateOfBirthProfile">
                          {doc.data().birthday}
                        </div>
                        <div className="profileDetails">
                          0 followers
                          <Button
                            style={{
                              backgroundColor: "#fff",
                              color: "#ff0000",
                              border: "1px solid #ff0000",
                              borderRadius: "15px",
                              marginLeft: "20px"
                            }}
                          >
                            Follow
                          </Button>
                        </div>
                        {gifts && (
                          <span>
                            <Grid container spacing={3}>
                              {gifts.docs.map((doc, index) => {
                                const details = doc.data();
                                const userIdGift = doc.data().userId;
                                if (userId === userIdGift) {
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
                                            to="/personProfile"
                                            className="personProfile"
                                          >
                                            <Grid item>
                                              <Avatar
                                                alt="Avatar"
                                                src={doc.data().userPhotoUrl}
                                              />
                                            </Grid>
                                          </Link>
                                          <Grid item>
                                            {doc.data().giftName}
                                          </Grid>
                                        </Grid>
                                        <CardMedia
                                          className={classes.media}
                                          image={doc.data().giftUrl}
                                          style={{ margin: "7px" }}
                                        />
                                        <GiftDetails details={details} />
                                        <CardActions disableSpacing>
                                          <Tooltip title="Like it">
                                            <IconButton aria-label="add to favorites">
                                              <FavoriteIcon />
                                            </IconButton>
                                          </Tooltip>
                                          <Tooltip title="Wish it">
                                            <IconButton aria-label="add to favorites">
                                              <i className="material-icons">
                                                grade
                                              </i>
                                            </IconButton>
                                          </Tooltip>
                                        </CardActions>
                                      </Card>
                                    </Grid>
                                  );
                                }
                              })}
                            </Grid>
                            <br />
                            <Divider></Divider>
                          </span>
                        )}
                      </Container>
                    </div>
                    <div className="right"></div>
                  </div>
                </span>
              );
            }
          })}
        </span>
      )}
    </div>
  );
}
