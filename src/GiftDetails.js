import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import * as firebase from "firebase/app";
import "firebase/auth";
import { Link, useParams } from "react-router-dom";
import { useCollection } from "react-firebase-hooks/firestore";
import { useDocument } from "react-firebase-hooks/firestore";

export default function GiftDetails(props) {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    button: {
      margin: theme.spacing(1)
    },
    appBar: {
      position: "relative",
      backgroundColor: "#E32C28"
    },
    media: {
      height: 0
    },
    avatar: {
      margin: 10
    },
    bigAvatar: {
      marginTop: 10,
      marginLeft: "auto",
      marginRight: "auto",
      width: 100,
      height: 100
    }
  }));
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [maxWidth] = React.useState("md");
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  const [users] = useCollection(firebase.firestore().collection("users"));

  let { docId } = useParams();
  const [giftSnapshot, loadingGift] = useDocument(
    firebase
      .firestore()
      .collection("gifts")
      .doc(docId)
  );

  const [gift, setGift] = React.useState();

  if (!loadingGift && !gift) {
    setGift(giftSnapshot.data());
  }

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  console.log(gift, loadingGift);
  if (!loadingGift && gift) {
    return (
      <div>
        <Button
          color="secondary"
          onClick={handleClickOpen}
          style={{ fontFamily: "Open Sans" }}
        >
          {gift.giftDescription.slice(0, 20) + "..."}
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          fullScreen={fullScreen}
          maxWidth={maxWidth}
        >
          <Card className={classes.card}>
            <Grid container spacing={3}>
              <Grid item sm={12} xs={12}>
                <Link to="/personProfile" className="personProfile">
                  <Avatar
                    alt="Avatar"
                    src={gift.userPhotoUrl}
                    className={classes.bigAvatar}
                  />
                </Link>
                <img src={gift.giftUrl} className="productImg"></img>
              </Grid>
              <Grid item sm={12} xs={12}>
                <CardContent>
                  <Typography
                    color="secondary"
                    component="p"
                    style={{ textAlign: "center", fontFamily: "Open Sans" }}
                  >
                    {gift.giftName}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{ textAlign: "center", fontFamily: "Open Sans" }}
                  >
                    {gift.giftDescription}
                  </Typography>
                </CardContent>
              </Grid>
              <Grid item sm={12} xs={12}>
                <CardActions disableSpacing>
                  <div style={{ marginLeft: "5%" }}>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <div style={{ fontFamily: "Open Sans" }}>
                      {gift.likes} likes
                    </div>
                  </div>
                  <div style={{ marginLeft: "5%" }}>
                    <IconButton aria-label="add to favorites">
                      <i className="material-icons">grade</i>
                    </IconButton>
                    <div style={{ fontFamily: "Open Sans" }}>Wish it</div>
                  </div>
                </CardActions>
              </Grid>
              <Grid item xs={12}>
                {/* <a href="https://www.google.ro">google</a> */}
                <CardContent>
                  <a target="_blank" href={gift.giftLink}>
                    View gift link
                  </a>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{ fontFamily: "Open Sans" }}
                  >
                    Liked by {gift.likes} people
                    <br />
                    {/* {gift.likeArray.map(doc => {
                    console.log(doc);
                  })} */}
                  </Typography>
                  <br />
                </CardContent>
                <DialogActions>
                  <Button
                    onClick={handleClose}
                    color="secondary"
                    style={{ fontFamily: "Open Sans" }}
                  >
                    Back
                  </Button>
                </DialogActions>
              </Grid>
            </Grid>
          </Card>
        </Dialog>
      </div>
    );
  } else return <div>loading...</div>;
}
