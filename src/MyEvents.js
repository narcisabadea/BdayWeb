import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 300,
    marginTop: 30
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  title: {
    color: "red",
    fontSize: "16px",
    textAlign: "left"
  },
  subheader: {
    fontSize: "14px",
    textAlign: "left"
  }
}));

export default function MyEvents() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Card className={classes.card}>
            <CardHeader
              classes={{
                title: classes.title,
                subheader: classes.subheader
              }}
              title="Bday Treasure Hunt #1"
              subheader="Thursday, August 8, 2019, 6:45 PM"
            />
            <CardMedia className={classes.media} image="/images/event.jpg" />
          </Card>
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Card className={classes.card}>
            <CardHeader
              classes={{
                title: classes.title,
                subheader: classes.subheader
              }}
              title="Bday Treasure Hunt #1"
              subheader="Thursday, August 8, 2019, 6:45 PM"
            />
            <CardMedia className={classes.media} image="/images/event.jpg" />
          </Card>
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Card className={classes.card}>
            <CardHeader
              classes={{
                title: classes.title,
                subheader: classes.subheader
              }}
              title="Bday Treasure Hunt #1"
              subheader="Thursday, August 8, 2019, 6:45 PM"
            />
            <CardMedia className={classes.media} image="/images/event.jpg" />
          </Card>
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Card className={classes.card}>
            <CardHeader
              classes={{
                title: classes.title,
                subheader: classes.subheader
              }}
              title="Bday Treasure Hunt #1"
              subheader="Thursday, August 8, 2019, 6:45 PM"
            />
            <CardMedia className={classes.media} image="/images/event.jpg" />
          </Card>
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Card className={classes.card}>
            <CardHeader
              classes={{
                title: classes.title,
                subheader: classes.subheader
              }}
              title="Bday Treasure Hunt #1"
              subheader="Thursday, August 8, 2019, 6:45 PM"
            />
            <CardMedia className={classes.media} image="/images/event.jpg" />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
