import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Container,
} from '@mui/material';

import {
  getLeftWrapper,
  getWhiteBoxStyle,
  getRadioGroupStyle,
  getRadioLabelStyle,
  getStartupTitleStyle,
  getImageWrapperStyle,
  containerStyle,
  getBlueWrapperStyle,
  getH2Style,
  getSubPStyle,
} from '../style';

const WeWorkWithSection = () => {
  return (
    <Box sx={getBlueWrapperStyle()}>
        <Container sx={containerStyle()}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Content */}
        <Grid item xs={12} md={6}>
          <Box sx={getLeftWrapper()}>
            <Box>
            <Typography sx={getH2Style()}>We Work With</Typography>

            <Typography sx={getSubPStyle()}>
              "We empower startups, enterprises, and agencies to boost their tech portfolio and improve profitability
              with tailored software engineering and IT solutions."
            </Typography>
</Box>
            <Box sx={getWhiteBoxStyle()} />

            <RadioGroup row sx={getRadioGroupStyle()}>
              <FormControlLabel value="idea" control={<Radio sx={{color:"#fff",fontWeight:800}} />} label="Idea Evaluation" sx={getRadioLabelStyle()} />
              <FormControlLabel value="mvp" control={<Radio sx={{color:"#fff",fontWeight:800}} />} label="MVP Development" sx={getRadioLabelStyle()} />
              <FormControlLabel value="discovery" control={<Radio sx={{color:"#fff",fontWeight:800}} />} label="Product Discovery" sx={getRadioLabelStyle()} />
              <FormControlLabel value="development" control={<Radio sx={{color:"#fff",fontWeight:800}} />} label="Product Development" sx={getRadioLabelStyle()} />
            </RadioGroup>
<Box>
            <Typography sx={getStartupTitleStyle()}>Startup</Typography>
            <Typography sx={getSubPStyle()}>
              Start up – We help startup to build their market & investor ready products, so that they can accelerate
              their growth in this extreme competitive environment
            </Typography></Box>
          </Box>
        </Grid>

        {/* Right Image */}
        <Grid item xs={12} md={6} textAlign="center">
            <Box component="img" src="/assets/images/work-img.svg" alt="girl" sx={getImageWrapperStyle()} />
           
        </Grid>
      </Grid>
      </Container>
    </Box>
  );
};

export default WeWorkWithSection;
