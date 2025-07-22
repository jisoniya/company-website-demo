import React from 'react';
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  InputAdornment,
  Container,
  FormLabel,
} from '@mui/material';

import {
  locationBlock,
  locationTitle,
  locationText,
  formContainer,
  formBox,
  inputField,
  submitButton,
  getBrStyle,
  contactButton,
  iconWrapper,
  getStartedButton,
} from '../style'; // adjust path as needed
import { containerStyle, getBlackWrapperStyle, getH2Style, getSubPStyle } from '../style';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const locations = [
  { city: 'British Columbia', note: 'Book a Call or Fill Out the Form Below! Our experts are pleased to deliver inclusive guidance.' },
  { city: 'Chandigarh', note: 'Book a Call or Fill Out the Form Below! Our experts are pleased to deliver inclusive guidance.' },
  { city: 'Bengaluru', note: 'Book a Call or Fill Out the Form Below! Our experts are pleased to deliver inclusive guidance.' },
];

const ContactSection = () => {
  return (
    <Box sx={getBlackWrapperStyle()}>
      <Container sx={containerStyle}>
        <Grid container spacing={4} alignItems="center">
          {/* Left - Locations */}
          <Grid item xs={12} md={5} alignItems="space-between" >
            {locations.map((loc, i) => (
              <Box key={i} sx={locationBlock}>
                <Typography sx={locationTitle}>{loc.city}</Typography>
                <Typography sx={locationText}>{loc.note}</Typography>
              </Box>
            ))}
          </Grid>

          {/* Right - Contact Form */}
          <Grid item xs={12} md={7}>
            <Box sx={{ mb: 2 }}>   <Typography variant='h2' sx={getH2Style()}>
              We Love to Build!<Box component="br" sx={getBrStyle()} /> Just Ask and It’s Yours
            </Typography>
              <Typography variant='p' sx={getSubPStyle()}>
                Book a Call or Fill Out the Form Below! Our experts are<Box component="br" sx={getBrStyle()} /> pleased to deliver inclusive guidance.
              </Typography></Box>
            <Box sx={formContainer}>
              <Box sx={formBox}>
                <FormLabel>Name*</FormLabel>
                <TextField fullWidth size="small" sx={inputField} />

                <FormLabel sx={{ mt: 2 }}>Phone Number*</FormLabel>
                <TextField fullWidth size="small" sx={inputField} />

                <FormLabel sx={{ mt: 2 }}>Email address*</FormLabel>
                <TextField
                  fullWidth
                  size="small"
                  sx={inputField}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">+1</InputAdornment>,
                  }}
                />

                <FormLabel sx={{ mt: 2 }}>Your Requirement Message Box</FormLabel>
                <TextField fullWidth size="small" sx={inputField} />

                <FormLabel sx={{ mt: 2 }}>Browse/ Drop Your Files - Attachments</FormLabel>
                <TextField fullWidth size="small" sx={inputField} />
                <Box sx={{ display: "flex" }}>
                  <Button sx={getStartedButton}>
                    <Typography sx={{ mr: 1 }}>Submit</Typography>
                    <Box className="iconWrapper" sx={iconWrapper}>
                      <ArrowForwardIcon sx={{ fontSize: 18, color: '#fff' }} />
                    </Box>
                  </Button></Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
