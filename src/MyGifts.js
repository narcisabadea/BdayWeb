import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
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
          <div className="img-cover img1"></div>
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
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
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
          <div className="img-cover img1"></div>
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
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
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
          <div className="img-cover img1"></div>
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
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
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
          <div className="img-cover img1"></div>
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
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
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
          <div className="img-cover img1"></div>
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
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
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
          <div className="img-cover img1"></div>
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
        </Grid>
      </Grid>
    </div>
  );
}
