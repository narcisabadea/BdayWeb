import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import * as firebase from "firebase/app";
import "firebase/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import EventDetails from "./EventDetails";

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
    textAlign: "left",
    fontFamily: "Open Sans"
  },
  subheader: {
    fontSize: "14px",
    textAlign: "left",
    fontFamily: "Open Sans"
  }
}));

export default function FutureEvents(props) {
  const classes = useStyles();
  const [events] = useCollection(firebase.firestore().collection("events"));

  return (
    <div>
      {events && (
        <span>
          <Grid container spacing={3}>
            {events.docs.map((doc, index) => {
              const details = doc.data();
              console.log(details);
              return (
                <Grid item xl={4} lg={4} md={6} sm={6} xs={6} key={index}>
                  <Card className={classes.card}>
                    <CardHeader
                      classes={{
                        title: classes.title,
                        subheader: classes.subheader
                      }}
                      title={doc.data().eventName}
                      subheader={doc.data().eventDate}
                    />
                    <div style={{ fontFamily: "Open Sans" }}>
                      {doc.data().eventLocation}
                    </div>
                    <CardMedia
                      className={classes.media}
                      image={doc.data().eventUrl}
                    />
                    <EventDetails details={details} />
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </span>
      )}
    </div>
  );
}
