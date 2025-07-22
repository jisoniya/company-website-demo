import React from 'react';
import { Box, Grid, Typography, List, ListItem, ListItemIcon, ListItemText, Button, Container, Divider } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { leftColumn, rightColumn, developerImg, logosWrapper, logoBar, logosMarquee, logoItem, containerStyle, getWhiteWrapperStyle, getH2Style, getLogoImageStyle, getLogoImageStyle1, getSubPStyle, getBrStyle, contactButton, iconWrapper } from '../../style';


const features = [
    'Tap into 1% & NDA protection for your peace of mind.',
    'Pre-vetted full-time developers (for faster scalability).',
    'Flexible contracts and transparent pricing.',
    'Pay after trial only when you’re 100% satisfied.',
];



const HeroSection = () => {
    return (
        <Box component="section" sx={{ ...getWhiteWrapperStyle(), paddingBottom: { xs: 0, md: "0%" } }}>
            
            <Container sx={containerStyle}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={7}>
                        <Box sx={leftColumn}>
                            <Typography variant="h4" sx={{ ...getH2Style(), }}>
                                Your Vision, Our Code - Future-Ready Mobile Apps.
                            </Typography>
                            <Typography sx={{ ...getSubPStyle(), color: "#00000" }}>Ineffective mobile product planning leads to costly delays and budget overruns. Our consultants, with 10+ years of expertise, guide businesses across 30+ industries. We reduce project costs significantly while ensuring full compliance with PCI DSS, HIPAA, GDPR, and other critical standards.</Typography>

                            <Box sx={{ mt:{xs:2,md:"50px"}}}>
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
                        <Box sx={{ ...rightColumn, display: { xs: "none", md: "block" } }}>
                            <Box component="img" src="/assets/images/hire-img.svg" alt="developer" sx={developerImg} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Box sx={logoBar}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center',
                        mt: { xs: 4, md: "8%" },
                         mb: { xs: 4, md: "5%" },
                    }}
                >
                    <Divider sx={{ flex: 1, borderColor: '#000000' }} />
                    <Typography
                        sx={{ ...getSubPStyle(), color: "#00000", fontWeight: "bold" }}
                    >
                         {" "} {" "}Trusted by startups and Fortune 500 companies  {" "}  {" "}
                    </Typography>
                    <Divider sx={{ flex: 1, borderColor: '#000000' }} />
                </Box>

                <Box sx={containerStyle} >
                    {/* <Box sx={logosMarquee}> */}
                    <Box sx={logoItem}>
                        <Box component="img" src="/assets/images/company-logo1.png" alt="company logo" sx={getLogoImageStyle1()} />
                    </Box>
                    {/* </Box> */}
                </Box>
            </Box>


        </Box>
    );
};

export default HeroSection;
