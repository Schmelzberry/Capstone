import React from 'react';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";

const theme = createTheme();

const HeroPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" sx={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={2}
          sx={{ color: 'text.primary', textAlign: 'center', height: '100%', width: '100%' }}
        >
          <Typography variant="h1" component="div">
            Ohp
          </Typography>
          <CardMedia
            component="img"
            alt="Tattoo Image"
            height="360"
            image={process.env.PUBLIC_URL + '/assets/tattoo.jpg'}
          />
          <Typography variant="h5" component="div">
           Connect with local tattoo professionals
          </Typography>
          <Link to="/sign-in"> {/* Use Link component to navigate to /sign-in */}
            <Button variant="contained" color="primary">
              Create account
            </Button>
          </Link>
        </Stack>
      </Container>
    </ThemeProvider>
  );
};

export default HeroPage;