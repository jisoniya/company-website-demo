
import React from 'react';
import { Box, Grid, Typography,  Button, Container,  } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { leftColumn, rightColumn, developerImg,containerStyle, getWhiteWrapperStyle, getH2Style,  getSubPStyle, getBrStyle, contactButton, iconWrapper } from '../../style';



const HeroSection = () => {
    return (
        <Box component="section" sx={getWhiteWrapperStyle()}>
            <Container sx={containerStyle}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={7}>
                        <Box sx={leftColumn}>
                            <Typography variant="h4" sx={{...getH2Style(),}}>
                             Your Vision, Our  <Box component="br" sx={getBrStyle()} /> Code-Future-Ready Mobile Apps  <Box component="br" sx={getBrStyle()} />
                            </Typography>
                            <Typography color="text.secondary" mb={2}>
                                Access Top 1% Pre-Vetted Experts – No Freelancers.
                            </Typography>
                            <Typography sx={{ ...getSubPStyle(), color: "#00000" }}>         Ineffective mobile product planning leads to costly delays and budget overruns. Our consultants, with 10+ years of expertise, guide businesses across 30+ industries. We reduce project costs significantly while ensuring full compliance with PCI DSS, HIPAA, GDPR, and other critical standards.</Typography>
                           
                            <Box sx={{ mt: 2 }}>
                                <Button sx={contactButton}>
                                    <Typography sx={{ mr: 1 }}>Get Free consultation</Typography>
                                    <Box className="iconWrapper" sx={iconWrapper}>
                                        <ArrowForwardIcon sx={{ fontSize: 18, color: '#fff' }} />
                                    </Box>
                                </Button>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={5}>
                        <Box sx={{...rightColumn,display:{xs:"none",md:"block"}}}>
                            <Box component="img" src="/assets/images/hire-img.svg" alt="developer" sx={developerImg} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
</Box>
    );
};

export default HeroSection;