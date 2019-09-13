import React from 'react';
import AppDrawer from './AppDrawer.js';
import Popular from './Popular.js';
import Friends from './Friends.js';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default function People() {
  
  return (
    <div>
      <AppDrawer/>
      <Container>
        <h1>People</h1>
        <Router>
          <div>
            <Button color="secondary">
              <Link to="/popular">Popular</Link>
            </Button>
            <Button color="secondary">
              <Link to="/friends">Friends</Link>
            </Button>
            <Route path="/popular" component={Popular} />
            <Route path="/friends" component={Friends} />
          </div>
        </Router>
      </Container>
    </div>
  );
}
