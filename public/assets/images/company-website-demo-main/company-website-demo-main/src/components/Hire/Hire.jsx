
import { Box, GlobalStyles } from '@mui/material';
import HireDevelopers from './HireDevelopers';
import TryBeforeSection from './TryBeforeSection';
import TechnologiesSection from './TechnologiesSection';
import HireByRoleSection from './HireByRoleSection';
import CodeQualitySection from './CodeQualitySection';
import { globalMarqueeKeyframes } from '../style';
import WhyHireDevelopers from './WhyHireDevelopers';
import CustomerTestimonials from '../Home/CustomerTestimonials';

const Hire = () => {
  return (
    <Box >
      <GlobalStyles styles={globalMarqueeKeyframes} />
      <HireDevelopers />
      <TryBeforeSection />
      <TechnologiesSection />
      <HireByRoleSection />
      <CodeQualitySection/>
      <WhyHireDevelopers />
       <CustomerTestimonials />
    </Box>
  )
}

export default Hire;