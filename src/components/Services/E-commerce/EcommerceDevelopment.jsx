import React from 'react'
import EcommerceServices from './EcommerceServices'
import EcommerceProcessChain from './EcommerceProcessChain';
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

const EcommerceDevelopment = () => {
  return (
    <div>
 <HeroSection />
 <TrustedLogos />
 <EcommerceServices />
 <TechStackSection />
 <EcommerceProcessChain />
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

export default EcommerceDevelopment



