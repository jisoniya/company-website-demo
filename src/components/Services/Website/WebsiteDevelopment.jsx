import React from 'react'
import WebsiteServices from './WebsiteServices'
import WebsiteProcessChain from './WebsiteProcessChain';
import TechStackSection from '../../Home/TechStackSection'
import ValidateAppIdea from '../../Home/ValidateAppIdea'
import TrustedLogos from '../../TrustedLogos';
import LeadMagnetBanner from './LeadMagnetBanner';
import CaseStudyGrid from './CaseStudyGrid';
import ContactSection from '../../Home/ContactSection';
import HeroSection from './HeroSection';
import CustomerTestimonials from '../../Home/CustomerTestimonials';
import OurWorkEthics from '../Mobile/OurWorkEthics';
import IndustryCards from '../Mobile/IndustryCards';

const WebsiteDevelopment = () => {
  return (
    <div>
 <HeroSection />
 <TrustedLogos />
 <WebsiteServices />
 <TechStackSection />
 <WebsiteProcessChain />
<ValidateAppIdea />
<OurWorkEthics />
<CaseStudyGrid />
<LeadMagnetBanner />
<IndustryCards />
<CustomerTestimonials />
<ContactSection />
    </div>
  )
}

export default WebsiteDevelopment



