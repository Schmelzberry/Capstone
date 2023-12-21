import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";
import { styled } from '@mui/system';

const StyledCardMedia = styled(CardMedia)({
  width: "100%",
  objectFit: "cover",
  border: "3px solid lightblue", // Add a light blue border
  borderRadius: "5px", // Add border-radius for a rounded border
  boxShadow: "0 0 5px black", // Add a black accent border using box-shadow
});

const StyledSlider = styled(Slider)(({ theme }) => ({
  width: '50%',
  marginTop: '20px',
  '& .MuiSlider-mark': {
    display: 'none', // Hide the marks
  },
}));


export default function ComposedTextField() {
  const [sliderValue, setSliderValue] = React.useState(50);


  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  const marks = Array.from({ length: 10 }, (_, index) => ({
    value: index + 1,
    label: (index + 1).toString(),
  }));

  

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
        p: 2, // p = padding
        border: "1px solid #ccc",
        display: "flex",
        flexDirection: "column", // display items in a column layout
        alignItems: "center",
      }}
      noValidate
      autoComplete="off"
    >
      <StyledCardMedia
        component="img"
        alt="Form Image"
        height="300"
        image={process.env.PUBLIC_URL + "/assets/tattoo.jpg"}
        sx={{ width: "100%", objectFit: "cover" }} // Set image width and maintain aspect ratio
      />

      {/* FORM */}
      <Typography>Looking to get some work done?</Typography>
      <Typography>Fill out the form below!</Typography>

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
      <Typography>How stoked are you?</Typography>

      {/* SLIDER */}
      <StyledSlider
  value={sliderValue}
  onChange={handleSliderChange}
  aria-labelledby="continuous-slider"
  marks={marks}
  step={1}
  valueLabelDisplay="no" // Display value label
  valueLabelFormat={(value) => value.toString()} // Format the value label
/>


      <Button variant="contained" sx={{ width: "15%", marginTop: "20px" }}>
        Submit
      </Button>
    </Box>
  );
}
