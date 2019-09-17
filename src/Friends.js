import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: 40,
  },
  card: {
    maxWidth: 300,
    marginTop: 30
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function Friends() {

  const classes = useStyles();
  
  return (
    <div>
      <Container>
        <Grid container>
          <Avatar alt="Avatar" src='images/user_placeholder_circle.png'/>
          <Grid>
            <div className="profileDetails">Name Surname</div>
            <div className="dateOfBirth">Sat, Mar 6</div>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container spacing={5}>
          <Grid item md={3}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="/images/cover.jpg"
              />
              <CardContent>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                1.233
                <IconButton aria-label="add to favorites">
                  <i className="material-icons">grade</i>
                </IconButton>
                Wish it
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="/images/cover.jpg"
              />
              <CardContent>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                1.233
                <IconButton aria-label="add to favorites">
                  <i className="material-icons">grade</i>
                </IconButton>
                Wish it
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="/images/cover.jpg"
              />
              <CardContent>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                1.233
                <IconButton aria-label="add to favorites">
                  <i className="material-icons">grade</i>
                </IconButton>
                Wish it
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="/images/cover.jpg"
              />
              <CardContent>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                1.233
                <IconButton aria-label="add to favorites">
                  <i className="material-icons">grade</i>
                </IconButton>
                Wish it
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <br/>
        <Divider/>
      </Container>
      <Container>
        <Grid container>
          <Avatar alt="Avatar" src='images/user_placeholder_circle.png'/>
          <Grid>
            <div className="profileDetails">Name Surname</div>
            <div className="dateOfBirth">Sat, Mar 6</div>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container spacing={5}>
          <Grid item md={3}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="/images/cover.jpg"
              />
              <CardContent>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                1.233
                <IconButton aria-label="add to favorites">
                  <i className="material-icons">grade</i>
                </IconButton>
                Wish it
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="/images/cover.jpg"
              />
              <CardContent>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                1.233
                <IconButton aria-label="add to favorites">
                  <i className="material-icons">grade</i>
                </IconButton>
                Wish it
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="/images/cover.jpg"
              />
              <CardContent>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                1.233
                <IconButton aria-label="add to favorites">
                  <i className="material-icons">grade</i>
                </IconButton>
                Wish it
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <br/>
        <Divider/>
      </Container>
  </div>
  );
}
