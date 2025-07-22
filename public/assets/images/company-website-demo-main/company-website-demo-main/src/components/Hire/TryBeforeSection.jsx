import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { buttonBox, contactButton, callLink, containerStyle, getBlueWrapperStyle, getValidateDescriptionStyle, getH2Style, iconWrapper } from '../style';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const TryBeforeSection = () => {
  return (
    <Box sx={{ ...getBlueWrapperStyle(), textAlign: "center" }}>
      <Container sx={containerStyle}>
        <Typography sx={{ ...getH2Style(), textAlign: "center" }}>Try Before, Commit Later</Typography>
        <Typography sx={getValidateDescriptionStyle}>
          You’ve got a great MVP/product idea. Now, let’s make sure the market’s ready for it.
          <br />
          Don’t let uncertainty derail your launch! Our marketing experts will swiftly evaluate
          your product’s market fit.
        </Typography>

        <Box sx={buttonBox}>
          <Button sx={{ ...contactButton, borderColor: "#fff" }}>
            <Typography sx={{ mr: 1, color: "#fff" }}> Validate Now</Typography>
            <Box className="iconWrapper" sx={iconWrapper}>
              <ArrowForwardIcon sx={{ fontSize: 18, color: '#fff' }} />
            </Box>
          </Button>
          <Button variant="text" sx={callLink}>
            Book A Call
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TryBeforeSection;
