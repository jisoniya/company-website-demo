import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';
import {
    getLogoBoxStyle,
    getLogoImageStyle,
    getTechLabelStyle,
    getCTAStyle,
    containerStyle,
    getBlueWrapperStyle,
    getH2Style,
    marqueeWrapper,
    marqueeTrack,
} from '../style';

const techStack = [
    { name: 'LARAVEL', icon: '/assets/images/laravl.svg' },
    { name: 'PHP', icon: '/assets/images/php.svg' },
    { name: 'JAVA', icon: '/assets/images/java.svg' },
    { name: 'NODE', icon: '/assets/images/node.svg' },
    { name: 'JAVASCRIPT', icon: '/assets/images/js.svg' },
    { name: 'REACT', icon: '/assets/images/react.svg' },
    { name: 'RUBY', icon: '/assets/images/rubi.svg' },
    { name: 'GOLANG', icon: '/assets/images/gol.svg' },
];

const TechStackSection = () => {
    return (
        <Box sx={getBlueWrapperStyle()}>
             <Box sx={containerStyle()}>
            <Typography sx={{textAlign:"center",...getH2Style()}}>Our Tech Stack</Typography>

           <Box sx={marqueeWrapper} >
  <Box className="marquee-track" sx={marqueeTrack}>
    {[...techStack, ...techStack].map((tech, idx) => (
      <Box key={idx} sx={{ px: 2 }}>
        <Box sx={getLogoBoxStyle()}>
          <Box component="img" src={tech.icon} alt={tech.name} sx={getLogoImageStyle()} />
        </Box>
        <Typography sx={getTechLabelStyle()}>{tech.name}</Typography>
      </Box>
    ))}
  </Box>
</Box>


            <Box mt={4} textAlign="center">
                <Link href="#" underline="hover" sx={getCTAStyle()}>
                    Explore All Technologies
                </Link>
            </Box>
            </Box>
        </Box>
    );
};

export default TechStackSection;
