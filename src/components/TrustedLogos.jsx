import React from 'react';
import { Box, Typography,  Divider } from '@mui/material';
import {logosWrapper, logoBar, logosMarquee, logoItem, getLogoImageStyle, getSubPStyle,getWhiteWrapperStyle } from './style';

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

const TrustedLogos = () => {
    return (
        <Box component="section" sx={{background:"#F5F5F5", pb: { xs: 4, md: "5%" },}}>
            <Box sx={logoBar}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center',
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

export default TrustedLogos;