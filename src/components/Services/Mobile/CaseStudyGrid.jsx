import React from 'react';
import { Box, Grid, Typography, Chip } from '@mui/material';
import {
  gridContainer,
  cardBox1,
  overlayBox,
  chipStyle,
  titleStyle,
  techStyle,
  learnMoreStyle,
  descStyle
} from '../../style'; // make sure path is correct

const CaseStudyGrid = () => {
  const data = [
    {
      label: 'Case Study',
      title: 'Donation Management Software',
      description:
        'This one-stop solution is mainly developed to manage the complete donor profile, donation transactions, events, calling, user management, and finance.',
      tech: 'ASP.NET MVC, SQL Server',
      image: '/assets/images/dmc.jpg',
    },
    {
      label: 'Blog',
      title: 'How AI Improves Software Development Efficiency and Innovation',
      description:
        'Human intelligence has driven the software development process for decades, with software engineers writing long codes, debugging, testing, and optimizing...',
      tech: '',
      image: '/assets/images/onlinestartup.jpg',
    },
    {
      label: 'Case Study',
      title: 'Retail Chain: Enhanced Customer Lifetime Value',
      description:
        '25% increase in mobile conversion, 15% AOV growth, and improved retention.',
      tech: 'AWS, iOS, Android',
      image: '/assets/images/clv.jpg',
    },
    {
      label: 'Case Study',
      title: 'Healthcare: Secure Telemedicine Platform',
      description:
        'AI-powered triage, Azure Cloud deployment, HIPAA-compliant consultations.',
      tech: 'Azure, WebRTC, AI, FHIR',
      image: '/assets/images/dmc.jpg',
    },
  ];
  

  return (
    <Grid container spacing={0} sx={gridContainer}>
      {data.map((item, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Box sx={cardBox1(item.image)}>
            <Box sx={overlayBox}>
              <Chip label={item.label} size="small" sx={chipStyle} />
              <Typography variant="h6" sx={titleStyle}>
                {item.title}
              </Typography>
              <Typography sx={{...descStyle,color:"#ffffff"}}>{item.description}</Typography>
              {item.tech && (
                <Typography sx={techStyle}>
                  <strong>Core tech:</strong> {item.tech}
                </Typography>
              )}
              <Typography sx={learnMoreStyle}>Learn More →</Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default CaseStudyGrid;
