import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";

export default function AddGift() {
  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    },
    appBar: {
      position: "relative",
      backgroundColor: "#E32C28"
    },
    input: {
      display: "none"
    }
  }));
  const [open, setOpen] = React.useState(false);
  const [fullWidth] = React.useState(true);
  const [maxWidth] = React.useState("sm");

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
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth={fullWidth}
        maxWidth={maxWidth}
      >
        <Grid container justify="center" alignItems="center">
          <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-file">
              <Button
                variant="contained"
                component="span"
                className={classes.button}
              >
                Upload
              </Button>
            </label>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
            <TextField
              id="standard-name"
              label="Gift name"
              className={classes.textField}
              margin="normal"
              autoFocus
            />
            <TextField
              id="standard-name"
              label="Gift link"
              className={classes.textField}
              margin="normal"
            />
            <TextField
              id="standard-name"
              label="Gift description"
              className={classes.textField}
              margin="normal"
            />
          </Grid>
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
