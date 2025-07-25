import React from 'react';
import { Box, Container, Grid, Typography,Divider } from '@mui/material';
import {
  getWhiteWrapperStyle,trustedcontainerStyle
} from '../style';

const TrustedBySection = () => {
  return (
    <Box component="section" sx={getWhiteWrapperStyle()}>
     <Container sx={trustedcontainerStyle()}>
   

      {/* Stats Section */}
      <Grid container spacing={3} justifyContent="center" sx={{ mb: { xs: 2, md: "10%" } }}>
          {[
            { value: '200+', label: 'Developers' },
            { value: '1000+', label: 'Projects Delivered' },
            { value: '97%', label: 'Client Satisfaction' },
          ].map((stat, index, arr) => (
            <React.Fragment key={index}>
              <Grid item xs={12} sm={6} md={3}>
                <Box textAlign="center">
                  <Typography variant="h4" sx={{ fontWeight: 700, fontSize: { xs: "35px", md: "56px" }, fontFamily: "Roboto, sans-serif" }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700, fontSize: "16px", fontFamily: "Roboto, sans-serif" }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
              {index < arr.length - 1 && (
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    display: { xs: "none", md: "block" },
                    mx: 0,
                    borderColor: "#D9D9D9",
                    borderWidth: 1,
                    alignSelf: "stretch",
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </Grid>

      {/* Bottom Section */}
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} sm={4} md={4}>
          <Box sx={bottomCardStyle}>
            <Box
              component="img"
                sx={trustedImg}
              src="/assets/images/trusted1.svg"
              // width="100%"
              height="auto"
              alt="award-1"
              loading="lazy"
            />
          </Box>
        </Grid>

       <Grid item xs={12} sm={4} md={4}>
          <Box sx={{ textAlign:"left", ...highlightCardStyle }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Trusted By
            </Typography>
            <Typography variant="h4" sx={{ lineHeight: 1.2 }}>
              2500 <br /> Companies
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Globally
            </Typography>
          </Box>
        </Grid>

       <Grid item xs={12} sm={4} md={4}>
          <Box sx={bottomCardStyle}>
            <Box
              component="img"
              sx={trustedImg}
              src="/assets/images/trusted2.svg"
              // width="100%"
              height="auto"
              alt="award-2"
              loading="lazy"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
    </Box>
  );
};

// MUI sx styles

const bottomCardStyle = {
  textAlign: 'center',
};

const highlightCardStyle = {
  backgroundColor: '#3243FF',
  borderRadius: "16px",
  py: 4,
  px: 2,
  color:"#fff"
};

const trustedImg = {
 width: '100%',
 maxWidth: '297px',
};
export default TrustedBySection;
