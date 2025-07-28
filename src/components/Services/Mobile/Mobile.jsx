import React from 'react'
import HeroSection from './HeroSection'
import MobileAppServices from './MobileAppServices'
import MobileAppProcessChain from './MobileAppProcessChain';
import TechStackSection from '../../Home/TechStackSection'
import ValidateAppIdea from '../../Home/ValidateAppIdea'
import OurWorkEthics from './OurWorkEthics';
import IndustryCards from './IndustryCards';
import TrustedLogos from '../../TrustedLogos';
import LeadMagnetBanner from './LeadMagnetBanner';
import CaseStudyGrid from './CaseStudyGrid';

const Mobile = () => {
  return (
    <div>
 <HeroSection />
 <TrustedLogos />
 <MobileAppServices />
 <TechStackSection />
 <LeadMagnetBanner />
 <MobileAppProcessChain />
<ValidateAppIdea />
<OurWorkEthics />
<CaseStudyGrid />
<IndustryCards />
    </div>
  )
}

export default Mobile
