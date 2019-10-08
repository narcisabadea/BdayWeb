import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import * as firebase from "firebase/app";
import "firebase/auth";
import { useCollection } from "react-firebase-hooks/firestore";

export default function GiftDetails() {
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
      height: 0,
      paddingTop: "56.25%" // 16:9
    },
    avatar: {
      margin: 10
    },
    bigAvatar: {
      width: "70%",
      height: "70%"
    }
  }));
  const [open, setOpen] = React.useState(false);
  const [fullWidth] = React.useState(true);
  const [maxWidth] = React.useState("md");
  const [gifts] = useCollection(firebase.firestore().collection("gifts"));
  const classes = useStyles();

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Button color="secondary" onClick={handleClickOpen}>
        Product description
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth={fullWidth}
        maxWidth={maxWidth}
      >
        <Card className={classes.card}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <div className="img-cover img1"></div>
              <CardActions disableSpacing>
                <div style={{ marginLeft: "5%" }}>
                  <IconButton
                    aria-label="add to favorites"
                    style={{ color: "red" }}
                  >
                    <FavoriteIcon />
                  </IconButton>
                  <div>1.233</div>
                </div>
                <div style={{ marginLeft: "5%" }}>
                  <IconButton aria-label="add to favorites">
                    <i className="material-icons">grade</i>
                  </IconButton>
                  <div>Wish it</div>
                </div>
              </CardActions>
            </Grid>
            <Grid item xs={6}>
              <CardHeader
                avatar={
                  <Avatar
                    aria-label="recipe"
                    src="images/user_placeholder_circle.png"
                    className={classes.bigAvatar}
                    style={{ alignSelf: "center" }}
                  ></Avatar>
                }
              />
              <CardContent>
                <Typography
                  color="secondary"
                  component="p"
                  style={{ textAlign: "center" }}
                >
                  Name Surname
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ textAlign: "center" }}
                >
                  3 hours ago
                </Typography>
                <br />
                <Typography variant="body2" color="textSecondary" component="p">
                  Product description
                </Typography>
                <br />
                <a href="/">View gift link</a>
                <br />
                <Typography variant="body2" color="textSecondary" component="p">
                  Liked by 10 people
                </Typography>
                <br />
              </CardContent>
              <DialogActions>
                <Button onClick={handleClose} color="secondary">
                  Back
                </Button>
              </DialogActions>
            </Grid>
          </Grid>
        </Card>
      </Dialog>
    </div>
  );
}
