import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: "#ECECEC",
    marginTop: theme.spacing(2),
    padding: theme.spacing(2, 0)
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div>
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Powered by Koding
          </Typography>
        </Container>
      </footer>
    </div>
  );
}
