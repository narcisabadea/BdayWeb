import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 300,
    marginTop: 30
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
}));

export default function MyEvents() {
  const classes = useStyles();

  return (
    <div>
      <Container>
        <Grid container spacing={5}>
          <Grid item md={3}>
            <Card className={classes.card}>
              <CardHeader title="Event title" subheader="September 14, 2016" />
              <CardMedia className={classes.media} image="/images/event.jpg" />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Event description
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card className={classes.card}>
              <CardHeader title="Event title" subheader="September 14, 2016" />
              <CardMedia className={classes.media} image="/images/event.jpg" />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Event description
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
