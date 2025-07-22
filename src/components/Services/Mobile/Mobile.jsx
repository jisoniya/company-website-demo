import React from 'react'
import HeroSection from './HeroSection'
import TrustedBySection from '../../Home/TrustedBySection'
import MobileAppServices from './MobileAppServices'
import MobileAppProcessChain from './MobileAppProcessChain';
import TechStackSection from '../../Home/TechStackSection'
import ValidateAppIdea from '../../Home/ValidateAppIdea'


const Mobile = () => {
  return (
    <div>
 <HeroSection />
 <TrustedBySection />
 <MobileAppServices />
 <TechStackSection />
 <MobileAppProcessChain />
<ValidateAppIdea />
    </div>
  )
}

export default Mobile
