import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { BrowserRouter as Router, Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: 40
  },
  card: {
    maxWidth: 300,
    marginTop: 30
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
}));

export default function Friends() {
  const classes = useStyles();

  return (
    <div>
      <Container>
        <Grid container>
          <Link to="/personProfile" className="personProfile">
            <Avatar
              alt="Avatar"
              src="images/user_placeholder_circle.png"
              style={{ width: "70px", height: "auto" }}
            />
            <Grid>
              <div className="profileDetails">Name Surname</div>
              <div className="dateOfBirth">Sat, Mar 6</div>
            </Grid>
          </Link>
        </Grid>
      </Container>
      <Grid container spacing={4}>
        <Grid item xl={3} lg={4} md={6} sm={6} xs={12}>
          <Card className={classes.card}>
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
      <br />
      <Divider />
      <Container>
        <Grid container>
          <Link to="/personProfile" className="personProfile">
            <Avatar
              alt="Avatar"
              src="images/user_placeholder_circle.png"
              style={{ width: "70px", height: "auto" }}
            />
            <Grid>
              <div className="profileDetails">Name Surname</div>
              <div className="dateOfBirth">Sat, Mar 6</div>
            </Grid>
          </Link>
        </Grid>
      </Container>
      <Grid container spacing={4}>
        <Grid item xl={3} lg={4} md={6} sm={6} xs={12}>
          <Card className={classes.card}>
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
      <br />
      <Divider />
    </div>
  );
}
