import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import GiftDetails from "./GiftDetails";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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

export default function MyGifts() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Card className={classes.card}>
            <CardMedia className={classes.media} image="/images/cover.jpg" />
            <CardHeader
              avatar={<Avatar alt="Avatar" src="images/pic.jpg" />}
              title="Product description"
            />
          </Card>
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Card className={classes.card}>
            <CardMedia className={classes.media} image="/images/cover.jpg" />
            <CardHeader
              avatar={<Avatar alt="Avatar" src="images/pic.jpg" />}
              title="Product description"
            />
          </Card>
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Card className={classes.card}>
            <CardMedia className={classes.media} image="/images/cover.jpg" />
            <CardHeader
              avatar={<Avatar alt="Avatar" src="images/pic.jpg" />}
              title="Product description"
            />
          </Card>
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Card className={classes.card}>
            <CardMedia className={classes.media} image="/images/cover.jpg" />
            <CardHeader
              avatar={<Avatar alt="Avatar" src="images/pic.jpg" />}
              title="Product description"
            />
          </Card>
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Card className={classes.card}>
            <CardMedia className={classes.media} image="/images/cover.jpg" />
            <CardHeader
              avatar={<Avatar alt="Avatar" src="images/pic.jpg" />}
              title="Product description"
            />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
