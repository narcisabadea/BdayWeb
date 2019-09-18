import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Avatar from '@material-ui/core/Avatar';

export default function GiftDetails() {
  
  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    appBar: {
      position: 'relative',
      backgroundColor: '#E32C28'
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  }));
  const [open, setOpen] = React.useState(false);
  const [fullWidth] = React.useState(true);
  const [maxWidth] = React.useState('sm');

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const classes = useStyles();

  return (
    <div>
      <Button color="secondary" onClick={handleClickOpen}>
        Gift Details
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth={fullWidth}
          maxWidth={maxWidth}>
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
                image="/images/cover.jpg"
                style={{margin: '30px', border: '1px solid black'}}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Product description
              </Typography>
              View gift link
              Liked by 10 people
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
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Back
            </Button>
          </DialogActions>
        </Dialog>
    </div>
  );
}
