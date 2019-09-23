import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default function AddGift() {
  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    },
    appBar: {
      position: "relative",
      backgroundColor: "#E32C28"
    }
  }));
  const [open, setOpen] = React.useState(false);
  const [fullWidth] = React.useState(true);
  const [maxWidth] = React.useState("xs");

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
        <div>
          <i className="material-icons centerButtons">add_circle</i> <br />
          Add Gift
        </div>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth={fullWidth}
        maxWidth={maxWidth}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Add new gift
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container justify="center" alignItems="center">
          {/* <div>Choose event cover</div> */}
          {/* <input type='file'/> */}
          <Button>Choose gift images</Button>
        </Grid>
        <Grid container justify="center" alignItems="center">
          <TextField
            id="standard-name"
            label="Gift name"
            className={classes.textField}
            margin="normal"
            autoFocus
          />
        </Grid>
        <Grid container justify="center" alignItems="center">
          <TextField
            id="standard-name"
            label="Gift link"
            className={classes.textField}
            margin="normal"
          />
        </Grid>
        <Grid container justify="center" alignItems="center">
          <TextField
            id="standard-name"
            label="Gift description"
            className={classes.textField}
            margin="normal"
          />
        </Grid>
        <DialogActions>
          <Button
            variant="contained"
            className={classes.button}
            color="secondary"
          >
            Add gift
          </Button>
          <Button onClick={handleClose} color="secondary">
            Back
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
