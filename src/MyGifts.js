import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';

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
  
export default function MyGifts() {
    const classes = useStyles();

  return (
    <div>
      <Container>
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
      </Container>
  </div>
  );
}
