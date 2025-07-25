import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import {
  getAboutBannerStyle,
  getVideoStyle,
  getBannerContentStyle, getOverlayStyle,
  getH1Style,
  getBrStyle,
  getPStyle,
  iconWrapper,
  getStartedButton
} from '../../style';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HeroSection = () => {
  return (
    <Box sx={getAboutBannerStyle()}>
        <Box sx={getOverlayStyle()} />

      {/* Banner Text Content */}
      <Container sx={getBannerContentStyle()}>
        <Typography variant="h1" sx={getH1Style()}>
          Your Vision, Our Code- Future-Ready Mobile Apps.
        </Typography>
        <Typography sx={getPStyle()}>
        Ineffective mobile product planning leads to costly delays and budget overruns. Our consultants, with 10+<Box component="br" sx={getBrStyle()} /> years of expertise, guide businesses across 30+ industries. We reduce project costs significantly while <Box component="br" sx={getBrStyle()} />ensuring full compliance with PCI DSS, HIPAA, GDPR, and other critical standards.

        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" ,mt:{xs:2, sm:3, md:4}}}>
          <Button sx={getStartedButton}>
            <Typography sx={{ mr: 1, fontWeight: 800 }}>Get Free consultation</Typography>
            <Box className="iconWrapper" sx={iconWrapper}>
              <ArrowForwardIcon sx={{ fontSize: 18, color: '#fff' }} />
            </Box>
          </Button></Box>
      </Container>
    </Box>

  );
};

export default HeroSection;







