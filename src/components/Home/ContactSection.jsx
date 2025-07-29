import React from 'react';
import { Box, Grid, Typography, TextField, Button } from '@mui/material';
import { LocationCity, Directions, LocationOn } from '@mui/icons-material';
import { containerStyle, getBlackWrapperStyle , addressBlock,
  iconStyle1,
  formBox,
  formTitle,
  submitButton,
  descStyle,
  getH2Style,
  getSubPStyle,
  getStartedButton,
  iconWrapper,} from '../style';
  import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ContactSection = () => {
  return (
    <Box sx={getBlackWrapperStyle}>
      <Grid container spacing={4} sx={containerStyle}>
         <Grid item xs={12} md={6}> </Grid>
         <Grid item xs={12} md={6} justifyContent="flex-end">
          <Typography variant="h5" sx={getH2Style}>
            We Love To Build! Just Ask And It’s Yours.
          </Typography>
          <Typography sx={getSubPStyle}>
            Book a Call or Fill Out the Form Below! Our experts are pleased to deliver inclusive guidance.
          </Typography></Grid>
        {/* Left Column */}
        <Grid item xs={12} md={6}>
          <Box sx={addressBlock}>
            <LocationCity sx={iconStyle1} />
            <Typography variant="subtitle1" fontWeight={600}>
              British Columbia
            </Typography>
            <Typography sx={{...descStyle,color:"#ffffff"}}>
              7404 King George Blvd, suite 200 Surrey British Columbia, V3W 1N6 Canada
            </Typography>
          </Box>

          <Box sx={addressBlock}>
            <LocationOn sx={iconStyle1} />
            <Typography variant="subtitle1" fontWeight={600}>
              Chandigarh
            </Typography>
            <Typography sx={{...descStyle,color:"#ffffff"}}>
              Plot No E 275, 3rd Floor, Phase 8-A, Industrial Area, Sahibzada Ajit Singh Nagar, Mohali, Punjab 140308
            </Typography>
            <Box display="flex" alignItems="center" mt={1}>
              <Directions sx={{ fontSize: 16, mr: 1 }} />
              <Typography sx={{...descStyle,color:"#ffffff"}}>Get Direction</Typography>
            </Box>
          </Box>

          <Box sx={addressBlock}>
            <LocationCity sx={iconStyle1} />
            <Typography variant="subtitle1" fontWeight={600}>
              Bengaluru
            </Typography>
            <Typography sx={{...descStyle,color:"#ffffff"}}>
              Arakere Bannerghatta Road, Arekere, Bangalore, Karnataka – 560076
            </Typography>
          </Box>

        
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={6}>
          <Box component="form" sx={formBox}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography sx={formTitle}>Name *</Typography>
                <TextField fullWidth size="small" placeholder="Enter your name" />
              </Grid>

              <Grid item xs={12}>
                <Typography sx={formTitle}>Phone Number *</Typography>
                <TextField fullWidth size="small" placeholder="Enter your mobile" />
              </Grid>

              <Grid item xs={12}>
                <Typography sx={formTitle}>Email Address *</Typography>
                <TextField fullWidth size="small" placeholder="Enter your email" />
              </Grid>

              <Grid item xs={12}>
                <Typography sx={{ fontSize: '11px', mb: 1, color: '#555' }}>
                  We’ll never share your email with anyone else.
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography sx={formTitle}>Message (Optional)</Typography>
                <TextField multiline rows={3} fullWidth size="small" placeholder="Type your message" />
              </Grid>

              <Grid item xs={12}>
               <Box sx={{ display: "flex",  }}>
                       <Button sx={getStartedButton}>
                         <Typography sx={{ mr: 1, fontWeight: 800 }}>Submit</Typography>
                         <Box className="iconWrapper" sx={iconWrapper}>
                           <ArrowForwardIcon sx={{ fontSize: 18, color: '#fff' }} />
                         </Box>
                       </Button></Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;
