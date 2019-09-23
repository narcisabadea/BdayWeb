import React from "react";
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

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 300,
    marginTop: 30
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
}));

export default function MyGifts() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={4}>
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
            <CardMedia
              className={classes.media}
              image="/images/cover.jpg"
              style={{ margin: "7px" }}
            />
            <CardActions disableSpacing>
              <div>
                <IconButton
                  aria-label="add to favorites"
                  style={{ color: "red" }}
                >
                  <FavoriteIcon />
                </IconButton>
                <div>1.233</div>
              </div>
              <div>
                <IconButton
                  aria-label="add to favorites"
                  style={{ color: "yellow" }}
                >
                  <i className="material-icons">grade</i>
                </IconButton>
                <div>Wish it</div>
              </div>
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
            <CardMedia
              className={classes.media}
              image="/images/cover.jpg"
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
            <CardMedia
              className={classes.media}
              image="/images/cover.jpg"
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
            <CardMedia
              className={classes.media}
              image="/images/cover.jpg"
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
            <CardMedia
              className={classes.media}
              image="/images/cover.jpg"
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
    </div>
  );
}
