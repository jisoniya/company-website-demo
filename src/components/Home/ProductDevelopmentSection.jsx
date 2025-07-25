import React, { useState } from 'react';
import { Box, Typography, Grid, Button, Divider } from '@mui/material';
import {
  getTabNavStyle,
  getActiveTabStyle,
  getTabStyle,
  getCardWrapper,
  getCardRightImage,
  getCardTitle,
  getCardText,
  getServiceButton,
  containerStyle,
  getWhiteWrapperStyle,
  getH2Style,
} from '../style';

const tabContent = {
  'Blockchain Development': {
    title: 'Blockchain Development',
    desc: 'We help businesses adopt blockchain technology with secure, scalable, and efficient solutions, including smart contracts and decentralized apps.',
    services: ['Smart Contract Development', 'DeFi Platform Development', 'Token Creation', 'Crypto Wallet Development'],
    image: '/assets/images/app-img.svg',
  },
  'App Development': {
    title: 'App Development',
    desc: 'We design scalable apps across platforms, ensuring transparency, automation, and reduced operational costs.',
    services: ['Custom Mobile App Development', 'Cross-Platform App Development', 'Clone App Development', 'Android App Development'],
    image: '/assets/images/app-img.svg',
  },
  'Website Development': {
    title: 'Website Development',
    desc: 'Build responsive, fast, and SEO-friendly websites with modern UI/UX to elevate your brand\'s online presence.',
    services: ['Corporate Website', 'Landing Page Design', 'CMS Development', 'eCommerce Solutions'],
   image: '/assets/images/app-img.svg',
  },
  'Digital Development': {
    title: 'Digital Development',
    desc: 'Enhance your digital infrastructure with marketing automation, CRM integrations, and custom dashboards.',
    services: ['CRM Integration', 'Marketing Automation', 'Analytics Dashboard', 'Workflow Builders'],
   image: '/assets/images/app-img.svg',
  },
};

const ProductDevelopmentSection = () => {
  const [activeTab, setActiveTab] = useState('App Development');
  const { title, desc, services, image } = tabContent[activeTab];

  return (
    <Box sx={getWhiteWrapperStyle()}>
       <Box sx={containerStyle()}>
      <Typography sx={getH2Style()}>
        Market-Ready Product Development Services
      </Typography>

     <Box sx={getTabNavStyle()}>
  {Object.keys(tabContent).map((tab, idx) => (
    <React.Fragment key={idx}>
      <Typography
        onClick={() => setActiveTab(tab)}
        sx={tab === activeTab ? getActiveTabStyle() : getTabStyle()}
      >
        {tab}
      </Typography>

      {idx < Object.keys(tabContent).length - 1 && (
        <Divider
          orientation="vertical"
          flexItem
          sx={{ mx: 1, border: '2px solid #000000' ,}}
        />
      )}
    </React.Fragment>
  ))}
</Box>

      <Grid container spacing={4} mt={4}>
        {/* Left */}
        <Grid item xs={12} md={6}>
          <Box sx={getCardWrapper()}>
            <Typography sx={getCardTitle()}>{title}</Typography>
            <Typography sx={getCardText()}>{desc}</Typography>

            <Grid container spacing={2} mt={2}>
              {services.map((service, idx) => (
                <Grid item xs={12} sm={6} key={idx}>
                  <Button sx={getServiceButton()}>{service}</Button>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>

        {/* Right */}
        <Grid item xs={12} md={6}>
          <Box component="img" src={image} alt={title} sx={getCardRightImage()} />
         
        </Grid>
      </Grid>
   </Box>
    </Box>
  );
};

export default ProductDevelopmentSection;
