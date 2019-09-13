import React from 'react';
import AppDrawer from './AppDrawer.js';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

export default function People() {
  
  return (
    <div>
      <AppDrawer/>
      <Container>
        <h1>People</h1>
        <Grid container>
          <Button variant="contained">
            Popular
          </Button>
          <Button variant="contained">
            Friends
          </Button>
        </Grid>
      </Container>
    </div>
  );
}
