import React from 'react';
import { Box, Grid, Typography, Link, Container } from '@mui/material';
import {

    
  footerHeading,
  footerLink,
  footerColumn,
  containerStyle,
  getBlueWrapperStyle,
} from './style';

const footerData = [
  {
    title: 'Company',
    links: ['About Us', 'In Media', 'Case Studies', 'Our Blog', 'Testimonials & Clients'],
  },
  {
    title: 'Our Expertise',
    links: [
      'Software Product Engineers',
      'Application Development',
      'Staff Augmentation',
      'Ecommerce Development',
      'Cloud Services',
      'AI & ML',
    ],
  },
  {
    title: 'Hire Developers',
    links: [
      'Hire AI Engineers',
      'Hire Backend Developers',
      'Hire Frontend Developers',
      'Hire Ecommerce Developers',
      'Hire Blockchain Developers',
      'Hire Mobile Developers',
    ],
  },
  {
    title: 'Solutions',
    links: [
      'Offshore Development Centre',
      'Offshore Software Development',
      'Nearshore Software Development',
    ],
  },
  {
    title: 'Clients We Serve',
    links: ['For Startups', 'For Enterprises', 'For Agencies'],
  },
];

const Footer = () => {
  return (
    <Box sx={{ ...getBlueWrapperStyle(), textAlign: "left", }}>
               <Container sx={containerStyle()}>
      <Grid container spacing={4}>
        {footerData.map((section, idx) => (
          <Grid item xs={12} sm={6} md={2.4} key={idx}>
            <Box sx={footerColumn}>
              <Typography sx={footerHeading}>{section.title}</Typography>
              {section.links.map((link, i) => (
                <Link href="#" key={i} underline="none" sx={footerLink}>
                  {link}
                </Link>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
