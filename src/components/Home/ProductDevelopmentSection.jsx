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
  'Software Development': {
    title: 'Software Development',
    desc: 'Our team creates custom, scalable, and secure software solutions. We design and build robust software that helps businesses solve complex challenges and drive digital transformation through strategic innovation and cutting-edge technology.',
    services: ['Custom Software Development', 'CRM Software Development', 'Offshore Software Development', 'Enterprise Software Development'],
    image: '/assets/images/software.jpg',
  },
  'App Development': {
    title: 'App Development',
    desc: 'We build high-performing mobile apps for iOS and Android, specifically tailored to startups needs. Our solutions are designed to enhance user engagement, accelerate sales, and drive revenue, empowering you to achieve long-term growth with user-centric designs.',
    services: ['Custom Mobile App Development', 'Cross-Platform App Development', 'Clone App Development', 'iOS and Android App Development'],
    image: '/assets/images/app-img.svg',
  },
  'Website Development': {
    title: 'Website Development',
    desc: 'We provide tailored website development solutions that cater to your unique business needs. Our team specializes in creating user-friendly, responsive websites designed to enhance your online presence and grow your business digitally.',
    services: ['Custom Web Development', 'UI/UX Design Services', 'Custom Web App Development', 'Custom E-commerce Development','CMS Development Services','Web Portal Development'],
   image: '/assets/images/software.jpg',
  },
  'Digital Development': {
    title: 'Digital Development',
    desc: 'Our service extends beyond product launch. We deliver expert digital marketing solutions that drive growth, establish credibility, and create market value for your tech product . We strategically position your brand for consistent success in the market.',
    services: ['Search Engine Optimization (SEO)', 'Social Media Optimization (SMO)', 'PPC Marketing', 'GMB Management','Reputation Management','Content Marketing',],
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

            <Grid container spacing={2} mt={2} >
              {services.map((service, idx) => (
                <Grid item xs={12} sm={6} key={idx}>
                  <Button sx={getServiceButton()} textAlign="left">{service}</Button>
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
