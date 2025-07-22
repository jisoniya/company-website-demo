import React, { useState } from 'react';
import { Box, Typography, Grid, List, ListItemButton, ListItemText } from '@mui/material';
import {
  getIndustryContainerStyle,
  getIndustrySidebarStyle,
  getIndustryTabStyle,
  getIndustryTabActiveStyle,
  getIndustryContentWrapper,
  getIndustryParagraphStyle,
  getIndustryBulletStyle,
  containerStyle,
  getBlackWrapperStyle,
  getH2Style,
} from '../style';

const industryData = {
  Healthcare: {
    desc:
      'We provide digital health solutions that streamline patient care, enhance medical operations, and improve service efficiency, contributing to better healthcare delivery.',
    points: [
      'Electronic Health Records (EHR)',
      'Telemedicine Solutions',
      'Data Security & Compliance',
      'AI-driven Diagnostics',
      'Patient Management Systems',
      'Mobile Health Apps',
      'Appointment Scheduling Systems',
      'Health Data Analytics',
    ],
  },
  Retail: {
    desc: 'Retail-focused platforms that improve customer engagement, supply chain visibility, and POS integrations.',
    points: ['POS Systems', 'Inventory Management', 'Customer Loyalty Apps', 'Omnichannel Commerce'],
  },
  Finance: {
    desc: 'Secure and scalable fintech solutions including payment processing, loan management, and fraud detection.',
    points: ['Online Banking', 'Fraud Detection', 'Robo-Advisors', 'eWallet Development'],
  },
  Transportation: {
    desc: 'End-to-end digital transport systems improving fleet tracking, route optimization, and logistics automation.',
    points: ['Fleet Management', 'Route Optimization', 'Logistics Automation', 'Real-time Tracking'],
  },
  Education: {
    desc: 'E-learning platforms, LMS systems, and virtual classroom integrations tailored for student success.',
    points: ['LMS Systems', 'Online Exams', 'Video Streaming', 'Student Progress Dashboards'],
  },
  Manufacturing: {
    desc: 'Smart factory tech, production monitoring, and predictive maintenance tools.',
    points: ['IoT Dashboards', 'SCADA Systems', 'Factory Monitoring', 'Predictive Maintenance'],
  },
  Technology: {
    desc: 'Custom apps, SaaS platforms, and API-first architectures for tech startups and enterprise systems.',
    points: ['SaaS Portals', 'API Integrations', 'DevOps Automation', 'Platform Engineering'],
  },
  Travel: {
    desc: 'Solutions to streamline bookings, customer engagement, and travel experience management.',
    points: ['Booking Systems', 'Itinerary Generators', 'Loyalty Program Integration', 'Travel Chatbots'],
  },
};

const IndustrySolutionsSection = () => {
  const [selected, setSelected] = useState('Healthcare');
  const industry = industryData[selected];

  return (
     <Box sx={getBlackWrapperStyle()}>
    <Box sx={containerStyle()}>
      <Typography sx={{...getH2Style(),textAlign:"center"}}>
        Tech Solutions That Drive Growth<br />Across Industries
      </Typography>

      <Box sx={getIndustryContainerStyle()}>
        {/* Sidebar Tabs */}
        <Box sx={getIndustrySidebarStyle()}>
          <List disablePadding>
            {Object.keys(industryData).map((name) => (
              <ListItemButton
                key={name}
                sx={selected === name ? getIndustryTabActiveStyle() : getIndustryTabStyle()}
                onClick={() => setSelected(name)}
              >
                <ListItemText
                  primary={name}
                  primaryTypographyProps={{ fontWeight: selected === name ? 600 : 500 }}
                />
              </ListItemButton>
            ))}
          </List>
        </Box>

        {/* Right Content */}
        <Box sx={getIndustryContentWrapper()}>
          <Typography variant="h6" fontWeight={600} mb={1}>{selected}</Typography>
          <Typography sx={getIndustryParagraphStyle()}>{industry.desc}</Typography>

          <Grid container spacing={1} mt={2}>
            {industry.points.map((point, i) => (
              <Grid item xs={12} sm={6} key={i}>
                <Typography sx={getIndustryBulletStyle()}>• {point}</Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
    </Box>
  );
};

export default IndustrySolutionsSection;
