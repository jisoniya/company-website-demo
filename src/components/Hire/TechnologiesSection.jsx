import React, { useState } from 'react';
import { Box, Typography, Button, Grid, Container } from '@mui/material';
import { tabListStyle, tabButtonStyle, activeTabStyle, techCardStyle, containerStyle, getBlackWrapperStyle, getH2Style, getSubPStyle } from '../style';

const tabs = ['Trending', 'Platforms', 'Programming'];

const techData = {
  Trending: [
    'Artificial Intelligence', 'Data Science', 'Big Data',
    'Machine Learning', 'Computer Vision', 'Chatbot',
    'Data Analytics', 'RPA', 'AR/VR',
    'OTT', 'Internet of Things', 'Blockchain',
    'Serverless',
  ],
  Platforms: ['AWS', 'Azure', 'Google Cloud', 'Salesforce', 'Shopify', 'Magento', 'Salesforce', 'Microsoft Dynamics', 'SharePoint'],
  Programming: ['JavaScript', 'Python', 'Java', 'Node.js', 'React', 'Next.js', 'Drupal', 'WordPress', 'React Native'],
};

const TechnologiesSection = () => {
  const [activeTab, setActiveTab] = useState('Trending');

  return (
    <Box sx={{ ...getBlackWrapperStyle(), textAlign: "center" }}>
      <Container sx={containerStyle}>
        <Typography sx={getH2Style}>Technologies We Are Working With</Typography>
        <Typography sx={getSubPStyle}>
          We leverage the most advanced technologies to deliver world-class solutions and
          meet diverse client demands efficiently and rapidly.
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'flex start', mt: 4, gap: 2 }}>
          {/* Sidebar Tabs */}
          <Box sx={tabListStyle}>
            {tabs.map((tab) => (
              <Button
                key={tab}
                sx={tab === activeTab ? { ...tabButtonStyle, ...activeTabStyle } : tabButtonStyle}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </Button>
            ))}
          </Box>

          {/* Tech Cards */}
          <Grid container spacing={2} sx={{ backgroundColor: '#fff', borderRadius: 1, p: 2, flex: 1, color: "#000000" }}>
            {techData[activeTab].map((tech, index) => (
              <Grid item xs={6} sm={4} md={3} key={index}>
                <Box sx={techCardStyle}>{tech}</Box>

              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default TechnologiesSection;







