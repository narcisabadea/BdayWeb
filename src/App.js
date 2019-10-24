import React from "react";
import "./App.css";
import Firebase from "./Firebase.js";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import CreateEvent from "./CreateEvent.js";
import AddGift from "./AddGift.js";
import Profile from "./Profile.js";
import MyGifts from "./MyGifts.js";
import MyEvents from "./MyEvents.js";
import People from "./People.js";
import Gifts from "./Gifts.js";
import PersonProfile from "./PersonProfile.js";
import { PrivateRoute } from "./Routes.js";
import Home from "./Home.js";
import Events from "./Events.js";
import GiftDetails from "./GiftDetails.js";
import Register from "./Register.js";
import Alerts from "./Alerts.js";
import Friends from "./Friends.js";
import Whispers from "./Whispers.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        this.setState({
          user: {
            uid: user.uid,
            email: user.email
          }
        });
        localStorage.setItem("user", JSON.stringify(user));
        console.log("user logat", user.email || user.phoneNumber);
      } else {
        // No user is signed in.
        this.setState({
          user: null
        });
        localStorage.clear();
        console.log("user nu este logat");
      }
    });
  }
  render() {
    return (
      <div className="App">
        {/* <AppBar /> */}
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <PrivateRoute path="/createEvent" component={CreateEvent} />
            <PrivateRoute path="/addGift" component={AddGift} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/myGifts" component={MyGifts} />
            <PrivateRoute path="/myEvents" component={MyEvents} />
            <PrivateRoute path="/people" component={People} />
            <PrivateRoute path="/gifts" component={Gifts} />
            <PrivateRoute path="/events" component={Events} />
            <PrivateRoute path="/giftDetails" component={GiftDetails} />
            <PrivateRoute path="/personProfile" component={PersonProfile} />
            <PrivateRoute path="/register" component={Register} />
            <PrivateRoute path="/alerts" component={Alerts} />
            <PrivateRoute path="/friends" component={Friends} />
            <PrivateRoute path="/whispers" component={Whispers} />
            <Redirect to="/" />
          </Switch>
        </Router>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
