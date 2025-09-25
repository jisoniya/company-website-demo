import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import {
  cardBox,
  cardTitle,
  cardText,
  getWhiteWrapperStyle,
  containerStyle,
  getH2Style,
  getSubPStyle,
} from '../style';

const roles = [
  {
    title: 'Hire IT Consultants',
    desc: 'Get expert advice for your digital projects, from strategy to execution. Our IT consultants help you make smart, scalable, and cost-effective tech decisions.',
  },
  {
    title: 'Hire Web App Developers',
    desc: 'Build fast, secure, and custom web apps for your business. We provide skilled developers with strong coding abilities and real-world problem-solving experience.',
  },
  {
    title: 'Hire App Developers',
    desc: 'Create smooth and reliable mobile apps for Android, iOS, or cross-platform. Our developers bring proven skills and a user-focused approach to mobile experiences.',
  },
  {
    title: 'Hire BI Consultants',
    desc: 'Turn raw data into smart insights with the help of our business intelligence consultants. They support better decision-making through custom dashboards and tools.',
  },
  {
    title: 'Hire Cloud Developers',
    desc: 'Move your infrastructure to the cloud with confidence. Our cloud developers build secure, flexible, and high-performance cloud-based software and systems.',
  },
  {
    title: 'Hire Maintenance Engineers',
    desc: 'Keep your software running smoothly with dedicated support engineers. We handle updates, fixes, and improvements with minimal downtime and full attention.',
  },
  {
    title: 'Hire Big Data Experts',
    desc: 'Manage large-scale data with smart solutions. Our big data developers know how to work with Hadoop, Spark, and other complex data processing tools.',
  },
  {
    title: 'Hire AI/ML Experts',
    desc: 'Integrate intelligent features into your apps. Our experts develop custom models to automate tasks, personalize experiences, and drive innovation.',
  },
  {
    title: 'Hire AR/VR Experts',
    desc: 'Create powerful virtual and augmented reality apps for different industries. Our AR/VR experts build immersive experiences that engage and excite users.',
  },
  {
    title: 'Hire API Developers',
    desc: 'Connect your apps and systems the right way. We offer API developers skilled in secure, scalable, and fast integration using REST, GraphQL, and more.',
  },
  {
    title: 'Hire eCommerce Developers',
    desc: 'Sell online with feature-rich, user-friendly stores. Our eCommerce developers work with platforms like Magento, Shopify, and custom frameworks as needed.',
  },
  {
    title: 'Hire CMS Developers',
    desc: 'Launch dynamic websites with easy content control. We help you hire CMS experts who specialize in WordPress, Drupal, Joomla, and other top platforms.',
  },
];

const HireByRoleSection = () => {
  return (
    <Box sx={{ ...getWhiteWrapperStyle(), textAlign: "left" }}>
      <Container sx={containerStyle}>
        <Typography sx={getH2Style}>Hire Developers by Role</Typography>
        <Typography sx={{ ...getSubPStyle(), color: "#000000" }}>
          Build your next software solution with our top 1% developers. Whether it’s web or mobile apps,
          cloud computing, or data analytics, hire developers from India by role to secure the exact expertise your project needs.
        </Typography>

        <Grid container spacing={3} mt={4}>
          {roles.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box sx={{ m: 1, }}> {/*  Adds space around each card */}
                <Box sx={cardBox}>
                  <Typography sx={cardTitle}>{item.title}</Typography>
                  <Typography sx={cardText}>{item.desc}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
};

export default HireByRoleSection;
