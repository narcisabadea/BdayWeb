import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import CardMedia from "@material-ui/core/CardMedia";
import { BrowserRouter as Route, Router, Link } from "react-router-dom";
import GiftDetails from "./GiftDetails.js";

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

export default function Popular() {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Link to="/personProfile" className="personProfile">
          <Avatar
            alt="Avatar"
            src="images/pic2.jpg"
            style={{ width: "70px", height: "auto" }}
          />
          <Grid>
            <div className="profileDetails">Name Surname</div>
            <div className="dateOfBirth">Sat, Mar 6</div>
          </Grid>
        </Link>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <CardMedia className={classes.media} image="/images/cover.jpg" />
          <Grid container spacing={3} style={{ margin: "10px" }}>
            <Link to="/personProfile" className="personProfile">
              <Grid item>
                <Avatar alt="Avatar" src="images/pic.jpg" />
              </Grid>
            </Link>
            <Grid item>
              <GiftDetails />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <CardMedia className={classes.media} image="/images/cover.jpg" />
          <Grid container spacing={3} style={{ margin: "10px" }}>
            <Link to="/personProfile" className="personProfile">
              <Grid item>
                <Avatar alt="Avatar" src="images/pic.jpg" />
              </Grid>
            </Link>
            <Grid item>
              <GiftDetails />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <CardMedia className={classes.media} image="/images/cover.jpg" />
          <Grid container spacing={3} style={{ margin: "10px" }}>
            <Link to="/personProfile" className="personProfile">
              <Grid item>
                <Avatar alt="Avatar" src="images/pic.jpg" />
              </Grid>
            </Link>
            <Grid item>
              <GiftDetails />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />
      <Divider />
      <br />
      <Grid container>
        <Link to="/personProfile" className="personProfile">
          <Avatar
            alt="Avatar"
            src="images/pic2.jpg"
            style={{ width: "70px", height: "auto" }}
          />
          <Grid>
            <div className="profileDetails">Name Surname</div>
            <div className="dateOfBirth">Sat, Mar 6</div>
          </Grid>
        </Link>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <CardMedia className={classes.media} image="/images/cover.jpg" />
          <Grid container spacing={3} style={{ margin: "10px" }}>
            <Link to="/personProfile" className="personProfile">
              <Grid item>
                <Avatar alt="Avatar" src="images/pic.jpg" />
              </Grid>
            </Link>
            <Grid item>
              <GiftDetails />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <CardMedia className={classes.media} image="/images/cover.jpg" />
          <Grid container spacing={3} style={{ margin: "10px" }}>
            <Link to="/personProfile" className="personProfile">
              <Grid item>
                <Avatar alt="Avatar" src="images/pic.jpg" />
              </Grid>
            </Link>
            <Grid item>
              <GiftDetails />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />
      <Divider />
    </div>
  );
}
