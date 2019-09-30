import React from "react";
import Dialog from "@material-ui/core/Dialog";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import Checkbox from "@material-ui/core/Checkbox";
import DateFnsUtils from "@date-io/date-fns"; // import
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import history from "./history";

export default function Register() {
  const useStyles = makeStyles(theme => ({
    body: {
      backgroundColor: theme.palette.common.white
    },
    paper: {
      marginTop: theme.spacing(30),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    avatar: {
      margin: 10
    },
    bigAvatar: {
      width: 60,
      height: 60
    },
    card: {
      maxWidth: 300
    }
  }));

  const classes = useStyles();

  const [open] = React.useState(true);

  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  function getUserDetails() {
    var details = JSON.parse(localStorage.getItem("user"));
    return details;
  }
  const [details] = React.useState(getUserDetails());

  const [selectedDate, handleDateChange] = React.useState(new Date());

  function sendToLocalStorage() {
    var userDetails = [];
    var businessname = document.getElementById("businessname").value;
    var birthday = document.getElementById("birthday").value;
    var city = document.getElementById("city").value;
    var acceptPp = document.getElementById("acceptPp").checked;
    userDetails.push(businessname, birthday, city, acceptPp);
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    history.push("/profile");
    window.location.reload();
  }

  return (
    <div>
      <Dialog fullScreen open={open} aria-labelledby="form-dialog-title">
        <Container>
          <img src="images/copil.jpg" alt="cover" id="logInBg" />
          <img src="images/s10.png" alt="cover" id="logInPhone" />
          <CssBaseline />
          <div className={classes.paper}>
            <div className="phoneContainer">
              <div className="dayTitle textForm">
                <img
                  src="images/launchscreen_logo.png"
                  alt="cover"
                  style={{ width: "90%" }}
                />
              </div>
              <Card className="textFormRegister">
                <Grid container justify="center" alignItems="center">
                  <Avatar
                    alt="Avatar"
                    src="images/user_placeholder_circle.png"
                    className={classes.bigAvatar}
                  />
                </Grid>
                {details.phoneNumber && (
                  <div>
                    <Grid container justify="center" alignItems="center">
                      <TextField
                        id="standard-name"
                        label="First name"
                        className={classes.textField}
                        margin="normal"
                        autoFocus
                      />
                    </Grid>
                    <Grid container justify="center" alignItems="center">
                      <TextField
                        id="standard-name"
                        label="Last name"
                        className={classes.textField}
                        margin="normal"
                      />
                    </Grid>
                  </div>
                )}
                {details.email && (
                  <div>
                    <Grid container justify="center" alignItems="center">
                      <TextField
                        id="businessname"
                        label="Business name"
                        className={classes.textField}
                        margin="normal"
                        autoFocus
                      />
                    </Grid>
                  </div>
                )}
                <Grid container justify="center" alignItems="center">
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                      id="birthday"
                      label="Birthday"
                      margin="normal"
                      value={selectedDate}
                      onChange={handleDateChange}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
                <Grid container justify="center" alignItems="center">
                  <TextField
                    id="city"
                    label="City"
                    className={classes.textField}
                    margin="normal"
                  />
                </Grid>
                {details.phoneNumber && (
                  <div>
                    <Grid
                      container
                      justify="center"
                      alignItems="center"
                      className="acceptConditions"
                    >
                      <Checkbox
                        checked={state.checkedA}
                        onChange={handleChange("checkedA")}
                        value="checkedA"
                        id="acceptAge"
                        inputProps={{
                          "aria-label": "primary checkbox"
                        }}
                      />
                      I am at least 16 years old.
                    </Grid>
                  </div>
                )}
                <Grid
                  container
                  justify="center"
                  alignItems="center"
                  className="acceptConditions"
                >
                  <Checkbox
                    checked={state.checkedB}
                    onChange={handleChange("checkedB")}
                    value="checkedB"
                    id="acceptPp"
                    inputProps={{
                      "aria-label": "secondary checkbox"
                    }}
                  />
                  I have read and accept the Privacy Policy
                </Grid>
                <Button
                  id="signIn"
                  color="secondary"
                  variant="contained"
                  className={classes.submit}
                  onClick={sendToLocalStorage}
                >
                  Sign in
                </Button>
              </Card>
            </div>
          </div>
        </Container>
      </Dialog>
    </div>
  );
}
