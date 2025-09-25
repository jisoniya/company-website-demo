import React from 'react'
import SoftwareServices from './SoftwareServices'
import SoftwareProcessChain from './SoftwareProcessChain';
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

const SoftwareDevelopment = () => {
  return (
    <div>
 <HeroSection />
 <TrustedLogos />
 <SoftwareServices />
 <TechStackSection />
 <SoftwareProcessChain />
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

export default SoftwareDevelopment



