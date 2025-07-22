import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import {
  getRootStyle,
  getVideoStyle,
  getBannerContentStyle,getOverlayStyle,
  getH1Style,
  getBrStyle,
  getPStyle
} from '../style';

const HeroBanner = () => {
  return (
    <Box sx={getRootStyle()}>
      {/* Background Video */}
      <video autoPlay loop muted playsInline style={getVideoStyle()}>
        <source src="/assets/images/banner-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.

      </video>
      
 <Box sx={getOverlayStyle()} />

      {/* Banner Text Content */}
      <Container sx={getBannerContentStyle()}>
        <Typography variant="h1" sx={getH1Style()}>
          Software Engineering,  <Box component="br" sx={getBrStyle()} />Consulting & Outsourcing
        </Typography>
        <Typography variant="p" sx={getPStyle()}>
          Welcome to the frontier of innovation where every line of<br />
          code shapes the future of digital trust
        </Typography>
      </Container>
    </Box>
  );
};

export default HeroBanner;
