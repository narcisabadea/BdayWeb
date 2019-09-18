import React from 'react';
import AppDrawer from './AppDrawer.js';
import Popular from './Popular.js';
import Friends from './Friends.js';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function People() {
  
  return (
    <div>
      <AppDrawer/>
      <Container>
        <div className="peopleTitle">People</div>
        <Router>
          <div className="peopleButtonsContainer">
            <Button>
              <Link to="/popular" className="peopleButtons">Popular</Link>
            </Button>
            <Button>
              <Link to="/friends" className="peopleButtons">Friends</Link>
            </Button>
            <Route path="/popular" component={Popular} />
            <Route path="/friends" component={Friends} />
          </div>
        </Router>
        <Popular/>
      </Container>
    </div>
  );
}
