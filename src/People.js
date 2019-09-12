import React from 'react';
import AppDrawer from './AppDrawer.js';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default function People() {
  
  return (
    <div>
      <AppDrawer/>
      <h1>People</h1>
      <Grid container justify="center" alignItems="center">
        <Button variant="contained" color="secondary">
          Popular
        </Button>
        <Button variant="contained" color="secondary">
          Friends
        </Button>
      </Grid>
    </div>
  );
}
