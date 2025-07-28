import React from 'react';
import { Box, Grid, Typography, List, ListItem, ListItemIcon, ListItemText, Button, Container,  } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { leftColumn, rightColumn, developerImg,containerStyle, getWhiteWrapperStyle, getH2Style,  getSubPStyle, getBrStyle, contactButton, iconWrapper } from '../style';

const features = [
    'Tap into 1% & NDA protection for your peace of mind.',
    'Pre-vetted full-time developers (for faster scalability).',
    'Flexible contracts and transparent pricing.',
    'Pay after trial only when you’re 100% satisfied.',
];


const HireDevelopers = () => {
    return (
        <Box component="section" sx={getWhiteWrapperStyle()}>
            <Container sx={containerStyle}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={7}>
                        <Box sx={leftColumn}>
                            <Typography variant="h4" sx={{...getH2Style(),}}>
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

export default HireDevelopers;