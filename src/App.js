import React from 'react';
import './App.css';
import AppBar from './AppBar.js';
import Firebase from './Firebase.js'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CreateEvent from './CreateEvent.js'
import AddGift from './AddGift.js'
import Profile from './Profile.js'
import { PrivateRoute } from "./Routes.js";
import Home from './Home.js'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {}
    }
  }

  componentDidMount () {
    this.authListener()
  }

  authListener () {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        this.setState({
          user
        })
        localStorage.setItem("user", user.uid);
        console.log('user logat')
      } else {
        // No user is signed in.
        this.setState({
          user:null
        })
        localStorage.removeItem("user");
        console.log('user nu este logat')
      }
    });
  }
  render () {
    return (
      <div className="App">
        {/* <AppBar/> */}
        <Router>
          <Switch>
            <Route path='/' exact component={Home}/>
            <PrivateRoute path='/createEvent' component={CreateEvent}/>
            <PrivateRoute path='/addGift' component={AddGift}/>
            <PrivateRoute path='/profile' component={Profile}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
