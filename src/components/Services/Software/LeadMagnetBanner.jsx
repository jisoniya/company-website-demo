import React from 'react';
import { Box, Typography, Stack, Button, Grid } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { contactButton, containerStyle, getH1Style, getWhiteWrapperStyle, iconWrapper } from '../../style';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const LeadMagnetBanner = () => {
    const points = [
        'Validate Your Idea & Market Need',
        'Map Your Tech Roadmap & Stack',
        'Strategize Your Lean MVP',
        'Identify Cost-Saving Opportunities',
        'Pinpoint Potential Pitfalls',
    ];

    return (
        <Box
            sx={getWhiteWrapperStyle}
        >
            <Grid container spacing={4} sx={containerStyle} alignItems="center">
                {/* Left: Image */}
                <Grid item xs={12} md={7}>
                    <Typography variant="h5" sx={getH1Style}>
                        Free Consultation Scheme for Startups!!!
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" mb={3}>
                        Turn your ambitious vision into a concrete digital roadmap.
                    </Typography>

                    <Stack spacing={1.5} mb={5}>
                        {points.map((point, index) => (
                            <Stack direction="row" spacing={1.5} alignItems="center" key={index}>
                                <CheckCircleIcon sx={{ color: '#3243FF' }} />
                                <Typography variant="body1">{point}</Typography>
                            </Stack>
                        ))}
                    </Stack>
                    <Box sx={{ mt: 2 }}>
                        <Button sx={contactButton}>
                            <Typography sx={{ mr: 1 }}> Book Your Slot</Typography>
                            <Box className="iconWrapper" sx={iconWrapper}>
                                <ArrowForwardIcon sx={{ fontSize: 18, color: '#fff' }} />
                            </Box>
                        </Button>
                    </Box>

                </Grid>
                {/* Right: Text Content */}
                <Grid item xs={12} md={5}>
                    <Box
                        component="img"
                        src="/assets/images/onlinestartup.jpg"
                        alt="Consultation Illustration"
                        sx={{
                            width: '100%',
                            maxWidth: 400,
                            mx: 'auto',
                            display: 'block',
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default LeadMagnetBanner;
