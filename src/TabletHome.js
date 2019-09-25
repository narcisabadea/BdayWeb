import React from "react";
import Dialog from "@material-ui/core/Dialog";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Login from "./Login.js";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

export default function Home() {
  const useStyles = makeStyles(theme => ({
    body: {
      backgroundColor: theme.palette.common.white
    },
    paper: {
      marginTop: theme.spacing(30),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }));

  const classes = useStyles();

  const [open] = React.useState(true);

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
                  style={{ width: "35%" }}
                />
              </div>
              <div className="phoneTitle">Alege Cadoul</div>
              <div className="phoneSubTitle">PERFECT</div>
              <br />
              <br />
              <br />
              <Login />
              <div className="phoneTitle">OR</div>
              <Button
                style={{
                  maxWidth: "250px",
                  maxHeight: "60px",
                  minWidth: "250px",
                  minHeight: "60px",
                  backgroundColor: "#ffffff",
                  color: "#ff0000",
                  fontSize: "16px",
                  border: "2px solid #e32c28",
                  borderRadius: "10px"
                }}
                variant="contained"
              >
                Register
              </Button>
              {/* <div className="gplay">
                <a href="https://play.google.com/store/apps/details?id=ro.bday.bday">
                  <img
                    src="images/google.png"
                    alt="cover"
                    style={{ width: "30%" }}
                  />
                </a>
              </div>
              <div className="gplay">
                <a href="https://apps.apple.com/ro/app/bday-social-birthdays/id1397522004">
                  <img
                    src="images/appstore.png"
                    alt="cover"
                    style={{ width: "30%" }}
                  />
                </a>
              </div> */}
            </div>
          </div>
        </Container>
      </Dialog>
    </div>
  );
}
