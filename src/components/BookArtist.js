import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Typography } from '@mui/material';

export default function ComposedTextField() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
        p: 2, // p = padding
        border: '1px solid #ccc',
        display: 'flex',
        flexDirection: 'column', // display items in a column layout
        alignItems: 'center',
        
      }}
      noValidate
      autoComplete="off"
    >

<CardMedia
        component="img"
        alt="Form Image"
        height="300"
        image={process.env.PUBLIC_URL + '/assets/tattoo.jpg'}
        sx={{ width: '100%', objectFit: 'cover' }} // Set image width and maintain aspect ratio
      />
    
      <Typography>
        Looking to get some work done?
      </Typography>
      <Typography>
        Fill out the form below!
      </Typography>
      <FormControl>
        <InputLabel htmlFor="component-outlined">First Name</InputLabel>
        <OutlinedInput
          id="component-outlined"
          defaultValue="first name"
          label="Name"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="component-outlined">Last Name</InputLabel>
        <OutlinedInput
          id="component-outlined"
          defaultValue="last name"
          label="Name"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="component-outlined">Design Idea</InputLabel>
        <OutlinedInput
          id="component-outlined"
          defaultValue="placement/sizing/color"
          label="Name"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="component-outlined">Artist to Book</InputLabel>
        <OutlinedInput
          id="component-outlined"
          defaultValue="artist"
          label="Name"
        />
      </FormControl>
      <Button variant="contained" sx={{ width: '15%', marginTop: '20px' }}>
    Submit
  </Button>
   
    </Box>
  );
}