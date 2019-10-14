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
import * as firebase from "firebase/app";
import "firebase/auth";
import history from "./history";
import {
  BrowserRouter as Route,
  Router,
  Link,
  useParams
} from "react-router-dom";

export default function EventDetails(props) {
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
      marginTop: 10,
      width: 100,
      height: 100
    }
  }));
  const [open, setOpen] = React.useState(false);
  const [fullWidth] = React.useState(true);
  const [maxWidth] = React.useState("md");
  const classes = useStyles();

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Button
        color="secondary"
        onClick={handleClickOpen}
        style={{ fontFamily: "Open Sans" }}
      >
        {props.details.eventName}
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
              <img src={props.details.eventUrl} className="productImg"></img>
              <CardActions disableSpacing>
                <div style={{ marginLeft: "5%" }}>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <div style={{ fontFamily: "Open Sans" }}>
                    {props.details.likes} Going
                  </div>
                </div>
                <div style={{ marginLeft: "5%" }}>
                  <IconButton aria-label="add to favorites">
                    <i className="material-icons">grade</i>
                  </IconButton>
                  <div style={{ fontFamily: "Open Sans" }}>Maybe</div>
                </div>
              </CardActions>
            </Grid>
            <Grid item xs={6}>
              <CardContent>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ fontFamily: "Open Sans" }}
                >
                  {props.details.eventName}
                </Typography>
                <br />
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ fontFamily: "Open Sans" }}
                >
                  {props.details.eventDate}
                </Typography>
                <br />
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ fontFamily: "Open Sans" }}
                >
                  {props.details.eventLocation}
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
}
