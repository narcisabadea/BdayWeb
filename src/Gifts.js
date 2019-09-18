import React from 'react';
import AppDrawer from './AppDrawer.js';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 300,
    marginTop: 30
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function Gifts() {

  const classes = useStyles();

  return (
    <div>
      <AppDrawer/>
      <Container>
        <div className="peopleTitle">Gifts</div>
        <Router>
          <div className="peopleButtonsContainer">
            <Button>
              <Link to="/" className="peopleButtons">Popular</Link>
            </Button>
            <Button>
              <Link to="/" className="peopleButtons">New</Link>
            </Button>
            <Button>
              <Link to="/" className="peopleButtons">Following</Link>
            </Button>
          </div>
        </Router>
        <Grid container spacing={5}>
          <Grid item md={3}>
            <Card className={classes.card}>
            <CardHeader
              avatar={
              <Avatar aria-label="recipe" src='images/user_placeholder_circle.png'>
              </Avatar>
              }
              title="My Gift"
              subheader="September 14, 2016"
            />
            <CardMedia
                className={classes.media}
                image="/images/gift.jpg"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Product description
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <i className="material-icons">grade</i>
            </CardActions>
          </Card>
          </Grid>
          <Grid item md={3}>
            <Card className={classes.card}>
            <CardHeader
              avatar={
              <Avatar aria-label="recipe" src='images/user_placeholder_circle.png'>
              </Avatar>
              }
              title="My Gift"
              subheader="September 14, 2016"
            />
            <CardMedia
                className={classes.media}
                image="/images/gift.jpg"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Product description
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <i className="material-icons">grade</i>
            </CardActions>
          </Card>
          </Grid>
          <Grid item md={3}>
            <Card className={classes.card}>
            <CardHeader
              avatar={
              <Avatar aria-label="recipe" src='images/user_placeholder_circle.png'>
              </Avatar>
              }
              title="My Gift"
              subheader="September 14, 2016"
            />
            <CardMedia
                className={classes.media}
                image="/images/gift.jpg"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Product description
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <i className="material-icons">grade</i>
            </CardActions>
          </Card>
          </Grid>
          <Grid item md={3}>
            <Card className={classes.card}>
            <CardHeader
              avatar={
              <Avatar aria-label="recipe" src='images/user_placeholder_circle.png'>
              </Avatar>
              }
              title="My Gift"
              subheader="September 14, 2016"
            />
            <CardMedia
                className={classes.media}
                image="/images/gift.jpg"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Product description
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <i className="material-icons">grade</i>
            </CardActions>
          </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
