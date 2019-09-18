import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function EditProfile() {

  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    appBar: {
      position: 'relative',
      backgroundColor: '#E32C28'
    },
  }));
  const [open, setOpen] = React.useState(false);
  const [fullWidth] = React.useState(true);
  const [maxWidth] = React.useState('xs');

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
        Edit profile
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth={fullWidth}
          maxWidth={maxWidth}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Edit profile
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container justify="center" alignItems="center">
          <Button>Modify your cover photo</Button>
          <input type='file'
           style={{display: 'none'}}/>
        </Grid>
        <Grid container justify="center" alignItems="center">
          <input type='file' 
            style={{display: 'none'}}
           />
          <Button>Modify profile picture</Button>
        </Grid>
        <Grid container justify="center" alignItems="center">
          <TextField
            id="standard-name"
            label="Name"
            className={classes.textField}
            margin="normal"
            autoFocus
          />
          </Grid>
          <Grid container justify="center" alignItems="center">
            <TextField
              id="standard-name"
              label="Description"
              className={classes.textField}
              margin="normal"
            />
          </Grid>
          <Grid container justify="center" alignItems="center">
          <TextField
            id="standard-name"
            label="Birthday"
            className={classes.textField}
            margin="normal"
          />
          </Grid>
          <Grid container justify="center" alignItems="center">
            <TextField
              id="standard-name"
              label="Location"
              className={classes.textField}
              margin="normal"
            />
          </Grid>
          <Grid container justify="center" alignItems="center">
          <TextField
            id="standard-name"
            label="More info"
            className={classes.textField}
            margin="normal"
          />
          </Grid>
          <DialogActions>
            <Button variant="contained" className={classes.button} color="secondary">
              Save
            </Button>
            <Button color="secondary">
              Delete account
            </Button>
            <Button onClick={handleClose} color="secondary">
              Back
            </Button>
          </DialogActions>
        </Dialog>
    </div>
  );
}
