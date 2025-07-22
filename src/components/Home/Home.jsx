import React from 'react'
import { globalMarqueeKeyframes } from '../style';
import { Box, GlobalStyles } from '@mui/material';
import HeroBanner from './HeroBanner';
import TrustedBySection from './TrustedBySection';
import WeWorkWithSection from './WeWorkWithSection';
import ProductDevelopmentSection from './ProductDevelopmentSection';
import TechStackSection from './TechStackSection';
import ProjectSuccessSection from './ProjectSuccessSection';
import IndustrySolutionsSection from './IndustrySolutionsSection';
import CustomerTestimonials from './CustomerTestimonials';
import BlogSection from './BlogSection';
import ContactSection from './ContactSection';

const Home = () => {
  return (
    <Box >
      <GlobalStyles styles={globalMarqueeKeyframes} />
      <HeroBanner />
      <TrustedBySection />
      <WeWorkWithSection />
      <ProductDevelopmentSection />
      <TechStackSection />
      <ProjectSuccessSection />
      <IndustrySolutionsSection />
      <CustomerTestimonials />
      <BlogSection />
      <ContactSection />
    </Box>
  )
}

export default Home;