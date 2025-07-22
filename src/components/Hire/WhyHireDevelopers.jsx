import React from 'react';
import { Box, Typography, Grid, List, ListItem, ListItemText, Container } from '@mui/material';
import { listItemStyle, logoStyle, containerStyle, getBlueWrapperStyle, getSubPStyle, getH2Style } from '../style';

const bullets = [
  'Workstatus™ powered Proof of Work',
  'Top 1% developers, rigorously vetted',
  'Dedicated project manager',
  'Flexible contracts, transparent pricing',
  'Zero hiring fee, quick onboarding',
  'Comprehensive code documentation',
  'Adherence to data security practices',
  'Language/time-zone compatible staff',
];

const logos = [
  '/assets/images/logo1.svg',
  'assets/images/panasonic.svg',
  'assets/images/crescent1.svg',
  'assets/images/magicbricks.svg',
  'assets/images/crescent1.svg',
  'assets/images/yale.svg',
  'assets/images/panasonic.svg',
  'assets/images/yale.svg',
  'assets/images/save.svg',
  'assets/images/magicbricks.svg',
];

const WhyHireDevelopers = () => {
  return (
    <Box sx={getBlueWrapperStyle}>
        <Container sx={containerStyle}>
      <Grid container spacing={4}>
        {/* Left Content */}
        <Grid item xs={12} md={6}>
          <Typography variant='h2' sx={getH2Style}>
            Why Hire Developers From <br /> Octagon Coders?
          </Typography>

          <Typography variant='p' sx={getSubPStyle}>
            We bring you 200+ rigorously vetted developers, each selected via a 7-stage technical assessment. Trained
            for your specific project and working in our Agile framework, they're ready to deliver.
          </Typography>

          <List dense>
            {bullets.map((text, idx) => (
              <ListItem key={idx} disablePadding>
                <ListItemText primary={text} sx={listItemStyle} />
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Right Content: Logos */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={3}>
            {logos.map((logo, index) => (
              <Grid item xs={4} sm={3} md={4} key={index}>
                <Box
                  component="img"
                  src={logo} //  replace path as needed
                  alt={`logo-${index}`}
                  sx={logoStyle}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      </Container>
    </Box>
  );
};

export default WhyHireDevelopers;
