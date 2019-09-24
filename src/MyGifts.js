import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import GiftDetails from "./GiftDetails";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 300,
    marginTop: 30
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
      <Grid container spacing={2}>
        <Grid item xl={3} lg={4} md={6} sm={6} xs={12}>
          <Card className={classes.card}>
            <Link to="/personProfile" className="personProfile">
              <CardHeader
                avatar={<Avatar alt="Avatar" src="images/pic.jpg" />}
                title="Name Surname"
                subheader="3 hours ago"
              />
            </Link>
            {/* <div onClick={() => alert("Hello from here")}> */}
            <CardMedia className={classes.media} image="/images/cover.jpg" />
            {/* </div> */}
            <CardActions disableSpacing>
              <Grid container>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <GiftDetails />
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                  <IconButton
                    aria-label="add to favorites"
                    style={{ color: "red" }}
                  >
                    <FavoriteIcon />
                  </IconButton>
                  <div>1.233</div>
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                  <IconButton
                    aria-label="add to favorites"
                    style={{ color: "yellow" }}
                  >
                    <i className="material-icons">grade</i>
                  </IconButton>
                  <div>Wish it</div>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xl={3} lg={4} md={6} sm={6} xs={12}>
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              title="Name Surname"
              subheader="3 hours ago"
            />
            <CardMedia className={classes.media} image="/images/gift.jpg" />
            <CardActions disableSpacing>
              <Grid container>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <GiftDetails />
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <div>1.233</div>
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                  <IconButton aria-label="add to favorites">
                    <i className="material-icons">grade</i>
                  </IconButton>
                  <div>Wish it</div>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xl={3} lg={4} md={6} sm={6} xs={12}>
          <Card className={classes.card}>
            <CardHeader
              avatar={<Avatar alt="Avatar" src="images/pic2.jpg" />}
              title="Name Surname"
              subheader="3 hours ago"
            />
            <CardMedia className={classes.media} image="/images/cover.jpg" />
            <CardActions disableSpacing>
              <Grid container>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <GiftDetails />
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <div>1.233</div>
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                  <IconButton aria-label="add to favorites">
                    <i className="material-icons">grade</i>
                  </IconButton>
                  <div>Wish it</div>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xl={3} lg={4} md={6} sm={6} xs={12}>
          <Card className={classes.card}>
            <CardHeader
              avatar={<Avatar alt="Avatar" src="images/pic.jpg" />}
              title="Name Surname"
              subheader="3 hours ago"
            />
            <CardMedia className={classes.media} image="/images/cover.jpg" />
            <CardActions disableSpacing>
              <Grid container>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <GiftDetails />
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <div>1.233</div>
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                  <IconButton aria-label="add to favorites">
                    <i className="material-icons">grade</i>
                  </IconButton>
                  <div>Wish it</div>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xl={3} lg={4} md={6} sm={6} xs={12}>
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              title="Name Surname"
              subheader="3 hours ago"
            />
            <CardMedia className={classes.media} image="/images/gift.jpg" />
            <CardActions disableSpacing>
              <Grid container>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <GiftDetails />
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <div>1.233</div>
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                  <IconButton aria-label="add to favorites">
                    <i className="material-icons">grade</i>
                  </IconButton>
                  <div>Wish it</div>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
