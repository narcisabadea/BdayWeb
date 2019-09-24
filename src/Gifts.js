import React from "react";
import AppDrawer from "./AppDrawer.js";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";

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
                    Popular
                  </Link>
                </Button>
                <Button>
                  <Link to="/" className="peopleButtons">
                    New
                  </Link>
                </Button>
                <Button>
                  <Link to="/" className="peopleButtons">
                    Following
                  </Link>
                </Button>
              </div>
            </Router>
            <Grid container spacing={3}>
              <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    image="/images/cover.jpg"
                  />
                  <CardHeader
                    avatar={<Avatar alt="Avatar" src="images/pic.jpg" />}
                    title="Product description"
                  />
                </Card>
              </Grid>
              <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    image="/images/cover.jpg"
                  />
                  <CardHeader
                    avatar={<Avatar alt="Avatar" src="images/pic.jpg" />}
                    title="Product description"
                  />
                </Card>
              </Grid>
              <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    image="/images/cover.jpg"
                  />
                  <CardHeader
                    avatar={<Avatar alt="Avatar" src="images/pic.jpg" />}
                    title="Product description"
                  />
                </Card>
              </Grid>
              <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    image="/images/cover.jpg"
                  />
                  <CardHeader
                    avatar={<Avatar alt="Avatar" src="images/pic.jpg" />}
                    title="Product description"
                  />
                </Card>
              </Grid>
              <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    image="/images/cover.jpg"
                  />
                  <CardHeader
                    avatar={<Avatar alt="Avatar" src="images/pic.jpg" />}
                    title="Product description"
                  />
                </Card>
              </Grid>
              <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    image="/images/cover.jpg"
                  />
                  <CardHeader
                    avatar={<Avatar alt="Avatar" src="images/pic.jpg" />}
                    title="Product description"
                  />
                </Card>
              </Grid>
              <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    image="/images/cover.jpg"
                  />
                  <CardHeader
                    avatar={<Avatar alt="Avatar" src="images/pic.jpg" />}
                    title="Product description"
                  />
                </Card>
              </Grid>
              <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    image="/images/cover.jpg"
                  />
                  <CardHeader
                    avatar={<Avatar alt="Avatar" src="images/pic.jpg" />}
                    title="Product description"
                  />
                </Card>
              </Grid>
              <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    image="/images/cover.jpg"
                  />
                  <CardHeader
                    avatar={<Avatar alt="Avatar" src="images/pic.jpg" />}
                    title="Product description"
                  />
                </Card>
              </Grid>
              <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    image="/images/cover.jpg"
                  />
                  <CardHeader
                    avatar={<Avatar alt="Avatar" src="images/pic.jpg" />}
                    title="Product description"
                  />
                </Card>
              </Grid>
            </Grid>
            <br />
            <Divider />
          </Container>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}
