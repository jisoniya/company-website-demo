import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import {
  getRootStyle,
  getVideoStyle,
  getBannerContentStyle, getOverlayStyle,
  getH1Style,
  getBrStyle,
  getPStyle,
  iconWrapper,
  getStartedButton
} from '../style';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HeroBanner = () => {
  return (
    <Box sx={getRootStyle()}>
      {/* Background Video */}
      <Box
        component="video"
        autoPlay
        loop
        muted
        playsInline
        sx={getVideoStyle()}
      >
        <source src="/assets/images/banner-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </Box>


      {/* <Box sx={getOverlayStyle()} /> */}

      {/* Banner Text Content */}
      <Container sx={getBannerContentStyle()}>
        <Typography variant="h1" sx={getH1Style()}>
          Software Development,  <Box component="br" sx={getBrStyle()} />Digital Consulting & Scalable <Box component="br" sx={getBrStyle()} />IT Outsourcing
        </Typography>
        <Typography sx={getPStyle()}>
          We are a team of 200+ Hand- Picked Coders, Product Developers, and Marketing Strategists<Box component="br" sx={getBrStyle()} /> who know how to build market ready products using the latest technologies.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button sx={getStartedButton}>
            <Typography sx={{ mr: 1, fontWeight: 800 }}>Discuss your Idea!</Typography>
            <Box className="iconWrapper" sx={iconWrapper}>
              <ArrowForwardIcon sx={{ fontSize: 18, color: '#fff' }} />
            </Box>
          </Button></Box>
      </Container>
    </Box>

  );
};

export default HeroBanner;







