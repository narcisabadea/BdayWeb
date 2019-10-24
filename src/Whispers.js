import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import { BrowserRouter as Route, Link } from "react-router-dom";
import PersonProfile from "./PersonProfile.js";
import * as firebase from "firebase/app";
import "firebase/auth";
import { useCollection } from "react-firebase-hooks/firestore";

const useStyles = makeStyles(theme => ({
  bigAvatar: {
    marginTop: 15,
    marginRight: 10,
    marginBottom: 10,
    width: 60,
    height: 60
  }
}));

export default function Whispers(props) {
  const classes = useStyles();
  const [users] = useCollection(firebase.firestore().collection("users"));
  const allBdays = [];

  return (
    <div>
      {users && (
        <span>
          {users.docs.map((doc, index) => {
            const userId = doc.data().userId;
            const userBday = doc.data().birthday;
            allBdays.push(userBday);
            console.log(allBdays);
            return (
              <span key={index}>
                <Grid container>
                  <Link
                    to={`/personProfile/${userId}`}
                    className="personProfile"
                  >
                    <Avatar
                      alt="Avatar"
                      src={doc.data().photoUrl}
                      className={classes.bigAvatar}
                    />
                    <Grid item>
                      <div className="profileDetails">
                        {doc.data().businessname || doc.data().name}'s Bday
                      </div>
                      <div className="dateOfBirth">{doc.data().birthday}</div>
                    </Grid>
                  </Link>
                  <Route
                    exact
                    path="/personProfile/:userId"
                    component={PersonProfile}
                  />
                </Grid>
                <Divider></Divider>
              </span>
            );
          })}
        </span>
      )}
    </div>
  );
}
