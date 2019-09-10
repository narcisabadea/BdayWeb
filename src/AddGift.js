import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function AddGift() {
  
  return (
    <div>
      <h2>Choose gift images</h2>
      <TextField
        id="standard-name"
        label="Gift name"
        margin="normal"
        autoFocus
      />
      <TextField
        id="standard-name"
        label="Gift link"
        margin="normal"
      />
      <TextField
        id="standard-name"
        label="Gift description"
        margin="normal"
      />
    </div>
  );
}
