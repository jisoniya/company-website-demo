import React from 'react';
import { Box, Grid, Typography, List, ListItem, ListItemIcon, ListItemText, Button, Container, Divider } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { leftColumn, rightColumn, developerImg, logosWrapper, logoBar, logosMarquee, logoItem, containerStyle, getWhiteWrapperStyle, getH2Style, getLogoImageStyle, getSubPStyle, getBrStyle, contactButton, iconWrapper } from '../style';

const features = [
    'Tap into 1% & NDA protection for your peace of mind.',
    'Pre-vetted full-time developers (for faster scalability).',
    'Flexible contracts and transparent pricing.',
    'Pay after trial only when you’re 100% satisfied.',
];

const logos = [
    { name: 'LARAVEL', icon: '/assets/images/laravl.svg' },
    { name: 'PHP', icon: '/assets/images/php.svg' },
    { name: 'NODE', icon: '/assets/images/node.svg' },
    { name: 'JAVASCRIPT', icon: '/assets/images/js.svg' },
    { name: 'REACT', icon: '/assets/images/react.svg' },
    { name: 'RUBY', icon: '/assets/images/rubi.svg' },
    { name: 'GOLANG', icon: '/assets/images/gol.svg' },
     { name: 'LARAVEL', icon: '/assets/images/laravl.svg' },
    { name: 'PHP', icon: '/assets/images/php.svg' },
    { name: 'NODE', icon: '/assets/images/node.svg' },
    { name: 'JAVASCRIPT', icon: '/assets/images/js.svg' },
    { name: 'REACT', icon: '/assets/images/react.svg' },
    { name: 'RUBY', icon: '/assets/images/rubi.svg' },
    { name: 'GOLANG', icon: '/assets/images/gol.svg' },
];

const HireDevelopers = () => {
    return (
        <Box component="section" sx={getWhiteWrapperStyle()}>
            <Container sx={containerStyle}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Box sx={leftColumn}>
                            <Typography variant="h4" sx={{...getH2Style(),fontSize:"60px"}}>
                                Hire Dedicated  <Box component="br" sx={getBrStyle()} />Developers
                            </Typography>
                            <Typography color="text.secondary" mb={2}>
                                Access Top 1% Pre-Vetted Experts – No Freelancers.
                            </Typography>
                            <Typography sx={{ ...getSubPStyle(), color: "#00000" }}>Unlock your business's full potential with our dedicated software experts. We build customized solutions that guarantee success in a rapidly evolving market.</Typography>
                            <List>
                                {features.map((item, index) => (
                                    <ListItem key={index} disableGutters>
                                        <ListItemIcon>
                                            <CheckCircleIcon sx={{ color: '#3243FF' }} />
                                        </ListItemIcon>
                                        <ListItemText primary={item} />
                                    </ListItem>
                                ))}
                            </List>
                            <Box sx={{ mt: 2 }}>
                                <Button sx={contactButton}>
                                    <Typography sx={{ mr: 1 }}>Contact Us</Typography>
                                    <Box className="iconWrapper" sx={iconWrapper}>
                                        <ArrowForwardIcon sx={{ fontSize: 18, color: '#fff' }} />
                                    </Box>
                                </Button>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box sx={{...rightColumn,display:{xs:"none",md:"block"}}}>
                            <Box component="img" src="assets/images/hire-img.svg" alt="developer" sx={developerImg} />
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
                        sx={{ ...getSubPStyle(), color: "#00000" ,fontWeight:"bold"}}
                    >
                         {" "} {" "}Trusted by startups and Fortune 500 companies  {" "}  {" "}
                    </Typography>
                    <Divider sx={{ flex: 1, borderColor: '#000000' }} />
                </Box>

                <Box sx={logosWrapper} >
                    <Box sx={logosMarquee}>
                        {[...logos, ...logos].map((logo, i) => (
                            <Box key={i} sx={logoItem}>
                                <Box component="img" src={logo.icon} alt={logo.name} sx={getLogoImageStyle()} />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>


        </Box>
    );
};

export default HireDevelopers;