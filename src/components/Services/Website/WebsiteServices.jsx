import React from 'react';
import { Box, Typography, Grid, Container, Divider } from '@mui/material';
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
  getBrStyle,
} from '../../style';

const services = [
  {
    title: 'Custom Web Application Development',
    desc: ' We build sophisticated, tailor-made web applications that address your unique business challenges, from complex enterprise portals and SaaS platforms to interactive B2B and B2C solutions. Our focus is on robust architecture, scalability, and seamless functionality.',
  },
  {
    title: 'Responsive UI/UX Design & Front-End Engineering',
    desc: 'Ensuring an exceptional user journey, our expert designers and front-end developers craft intuitive, engaging, and visually stunning interfaces. We prioritize responsive design for optimal performance across all devices and browsers, delivering pixel-perfect user experiences.',
  },
  {
    title: 'Robust Backend Development & API Integration',
    desc: 'The backbone of any powerful website, our backend solutions are built for performance, security, and scalability. We develop custom APIs and integrate seamlessly with third-party services, CRMs, ERPs, and payment gateways, ensuring your web platform connects effortlessly.',
  },
  {
    title: 'E-commerce & CMS Development',
    desc: 'Drive online sales and streamline content management with our specialized solutions. We develop secure, high-converting e-commerce platforms (e.g., custom storefronts, marketplace integrations) and implement flexible Content Management Systems (CMS) that empower you to manage your digital content with ease.',
  },
  {
    title: 'Cloud Integration & Scalability Solutions',
    desc: ' Leverage the full potential of cloud computing. We design and implement cloud-native web architectures on leading platforms like AWS, Azure, and Google Cloud, ensuring your website is highly available, scalable, and cost-efficient, ready to handle fluctuating traffic.',
  },
  {
    title: 'Performance Optimization & SEO Foundations',
    desc: 'Speed and visibility are critical. We optimize your website for lightning-fast loading times and smooth performance. Our development practices incorporate SEO best practices from the ground up, ensuring your site is technically sound for search engine discoverability.',
  },
  {
    title: 'Enterprise-Grade Security & Compliance',
    desc: 'Protecting your data and users is paramount. We embed robust security measures throughout the development lifecycle and ensure your website adheres to critical global standards such as PCI DSS, HIPAA, and GDPR, building trust and mitigating risks.',
  },
  {
    title: 'Integration of Emerging Web Technologies',
    desc: ' Stay ahead of the curve with cutting-edge innovations. We integrate advanced capabilities like AI/Machine Learning for personalization and automation, Progressive Web Apps (PWAs) for app-like experiences, and Voice Search Optimization for future-ready interactions.',
  },
    {
    title: 'Continuous Maintenance & Support',
    desc: ' Our partnership extends beyond launch. We provide comprehensive post-deployment maintenance, including performance monitoring, security updates, bug fixes, and feature enhancements, ensuring your website remains secure, current, and performs optimally.',
  },
];


const WebsiteServices = () => (
  <Box component="section" sx={{ ...getWhiteWrapperStyle(), }}>
    <Container sx={containerStyle}>
      <Typography component="h2" sx={getH2Style}>
        Our Expert Website Development Services
      </Typography>
      <Typography sx={mobileAppServicesSubtitle}>
       Businesses are increasingly seeking specialized partners to build bespoke web solutions that stand out, perform flawlessly, and scale strategically. At Octagon Coders, we engineer cutting-edge websites and web applications designed to meet the precise demands of these dynamic markets.

      </Typography>
      <Grid container spacing={3} sx={mobileAppServicesGrid}>    
        {services.map((service, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Box sx={mobileAppServicesCard}>
              <Typography variant="h6" sx={mobileAppServicesCardTitle}>
                {service.title}
              </Typography>
              <Divider sx={{
                borderBottom: '2px solid #3243FF',
                width: '100%',
                mb: 2,
              }} />
              <Typography sx={mobileAppServicesCardDesc}>{service.desc}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default WebsiteServices; 