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
    title: 'Enterprise Software Development',
    desc: 'We build robust, scalable, and secure enterprise-grade applications (e.g., CRM, ERP, SCM, HRM systems) tailored to streamline complex business processes, enhance internal efficiencies, and support large-scale operations. This includes modernizing legacy systems for improved performance and agility.',
  },
  {
    title: 'Web Application Development',
    desc: 'From sophisticated web portals and B2B platforms to high-traffic consumer-facing applications, we develop dynamic, responsive, and secure web solutions. Our focus is on intuitive user experiences (UX) and powerful backend architectures that ensure seamless functionality across all devices.',
  },
  {
    title: 'Cloud-Native Development & Migration',
    desc: 'Leverage the power of the cloud for unparalleled scalability, flexibility, and cost-efficiency. We specialize in designing and migrating applications to cloud-native architectures (AWS, Azure, GCP), utilizing microservices, containers (Docker, Kubernetes), and serverless functions for resilient and high-performing solutions.',
  },
  {
    title: 'API Development & Integration',
    desc: 'Unlock seamless connectivity across your digital ecosystem. We develop robust, secure, and well-documented APIs that enable your custom software to integrate effortlessly with third-party services, existing systems, and diverse platforms, fostering data flow and interoperability.',
  },
  {
    title: 'Software Product Development (MVP to Full Scale)',
    desc: ' Whether you were validating a new idea with a Minimum Viable Product (MVP) or building a full-scale, market-ready software product, we guide you through every phase. Our product-centric approach ensures your software meets market demands and achieves product-market fit.',
  },
  {
    title: 'AI & Machine Learning Solutions',
    desc: 'Transform your business with intelligent capabilities. We integrate AI and ML to deliver solutions for predictive analytics, intelligent automation, natural language processing (NLP), computer vision, and personalized user experiences, driving data-driven decision-making and innovation.',
  },
  {
    title: 'Data Analytics & Business Intelligence',
    desc: 'Turn raw data into actionable insights. Our services include building custom data warehousing solutions, implementing advanced analytics tools, and developing interactive dashboards that provide real-time visibility into your operations, customer behavior, and market trends.',
  },
  {
    title: 'DevSecOps Implementation',
    desc: 'Security and speed are paramount. We integrate DevSecOps practices throughout the development lifecycle, embedding automated security checks and compliance measures (PCI DSS, HIPAA, GDPR) into CI/CD pipelines. This ensures rapid, secure, and reliable software delivery.',
  },
    {
    title: 'Quality Assurance (QA) & Testing Automation',
    desc: 'Our dedicated QA team ensures the highest quality and reliability. We employ comprehensive manual and automated testing strategies, including functional, performance, security, and usability testing, to deliver a bug-free and high-performing software product.',
  },
];


const SoftwareServices = () => (
  <Box component="section" sx={{ ...getWhiteWrapperStyle(), }}>
    <Container sx={containerStyle}>
      <Typography component="h2" sx={getH2Style}>
        Our Custom Software development <Box component="br" sx={getBrStyle()} /> Services
      </Typography>
      <Typography sx={mobileAppServicesSubtitle}>
        Our software consultants help businesses maximize the value of their software investments and make informed, future-proof decisions. With over 1,000 successful projects delivered globally, we provide results-driven software consulting services.

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

export default SoftwareServices; 