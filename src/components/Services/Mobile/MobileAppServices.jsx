import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  mobileAppServicesHeading,
  mobileAppServicesHighlight,
  mobileAppServicesSubtitle,
  mobileAppServicesGrid,
  mobileAppServicesCard,
  mobileAppServicesCardTitle,
  mobileAppServicesCardDesc,
  mobileAppServicesArrow,
  getWhiteWrapperStyle,
  containerStyle,
  getH2Style,
} from '../../style';

const services = [
    {
      title: 'Native iOS & Android App Development',
      desc: 'For unparalleled performance, seamless user experience, and full leverage of device-specific features, our experts build robust native applications for both iOS and Android. This ensures your app delivers the highest quality and responsiveness.',
    },
    {
      title: 'Cross-Platform App Development (Flutter, React Native, etc)',
      desc: 'Maximize your reach and optimize your investment with our cross-platform solutions. Using cutting-edge frameworks like Flutter and React Native, we develop high-performing apps that run flawlessly on both iOS and Android from a single codebase, accelerating your time-to-market and reducing costs.',
    },
    {
      title: 'Intuitive UI/UX Design & Prototyping',
      desc: 'An exceptional user experience is at the heart of every successful app. Our talented UI/UX designers craft intuitive, engaging, and visually stunning interfaces, ensuring your app is not just functional but also a delight to use, from initial concept to interactive prototype.',
    },
    {
      title: 'Robust Backend Development & API Integration',
      desc: 'Every powerful app needs a strong foundation. We build scalable, secure backend infrastructures and seamlessly integrate with essential APIs (payment gateways, analytics, cloud services like AWS, Azure, Google Cloud) to ensure your app runs smoothly and connects effortlessly with your existing systems.',
    },
    {
      title: 'App Modernization & Migration',
      desc: 'Keep your digital assets future-ready. Whether it’s updating legacy applications, migrating to new platforms, or re-architecting for enhanced performance and scalability, our team ensures a smooth, non-disruptive transition that revitalizes your mobile presence.',
    },
    {
      title: 'Rigorous Quality Assurance (QA) & Testing',
      desc: 'Quality is non-negotiable. Our dedicated QA specialists employ rigorous manual and automated testing protocols to guarantee your app is bug-free, secure, and performs flawlessly across all devices and operating systems before it ever reaches your users.',
    },
    {
      title: 'Comprehensive Post-Launch Maintenance & Support',
      desc: 'Our partnership extends beyond launch. We provide continuous maintenance, performance monitoring, timely updates, and proactive support to ensure your app remains secure, compatible with new OS versions, and continues to deliver value long after deployment.',
    },
    {
      title: 'Integration of Emerging Technologies',
      desc: 'Stay ahead of the curve. We seamlessly integrate advanced technologies like AI/Machine Learning for intelligent features, IoT connectivity for smart device interaction, AR/VR for immersive experiences, and Blockchain for enhanced security, transforming your app into a future-proof innovation.',
    },
  ];
  

const MobileAppServices = () => (
    <Box component="section" sx={{...getWhiteWrapperStyle(),paddingTop:{ xs: 0, md: "0%" }}}>
            <Container sx={containerStyle}>
    <Typography component="h2" sx={getH2Style}>
    Our Expert Mobile App Development Services
    </Typography>
    <Typography sx={mobileAppServicesSubtitle}>
    Our software consultants help businesses maximize the value of their software investments and make informed, future-proof decisions. With over 1,000 successful projects delivered globally, we provide results-driven software consulting services.

    </Typography>
    <Grid container spacing={3} sx={mobileAppServicesGrid}>
      {services.map((service, idx) => (
        <Grid item xs={12} sm={6} md={4} key={idx}>
          <Box sx={mobileAppServicesCard}>
            <Box>
              <Typography sx={mobileAppServicesCardTitle}>{service.title}</Typography>
              <Typography sx={mobileAppServicesCardDesc}>{service.desc}</Typography>
            </Box>
            <ArrowForwardIosIcon sx={mobileAppServicesArrow} />
          </Box>
        </Grid>
      ))}
    </Grid>
    </Container>
  </Box>
);

export default MobileAppServices; 