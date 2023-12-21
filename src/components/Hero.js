import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
          <Typography variant="h2" component="div">
            Welcome to Ohp
          </Typography>
          <Typography variant="h5" component="div">
           Connect with local tattoo professionals
          </Typography>
          <Button variant="contained" color="primary">
            Get Started
          </Button>
        </Stack>
      </Container>
    </ThemeProvider>
  );
};

export default HeroPage;