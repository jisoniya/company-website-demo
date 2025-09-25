
import { Box, Typography,  Container } from '@mui/material';
import Slider from 'react-slick';
import {
  mobileAppProcessChainCard61,
  mobileAppProcessChainCardHighlight1,
  mobileAppProcessChainStepNumber61,
  mobileAppProcessChainTitle6,
  containerStyle,
  getWhiteWrapperStyle,
  getBrStyle,
  descStyle,
} from '../../style';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Description } from '@mui/icons-material';


const steps = [
  {
    title: 'Discovery & Strategy',
    desc: 'We deeply understand your vision, objectives, and market through consultations and analysis, defining a clear strategic roadmap for your app.'
  },
  {
    title: 'UI/UX Design & Prototyping',
    desc: 'Our experts craft intuitive UI/UX, creating wireframes and interactive prototypes. Visualize and refine your app’s look and feel before development begins.'
  },
  {
    title: 'Development & Engineering',
    desc: 'Skilled developers build your app with clean, scalable code for frontend and backend. We integrate APIs and follow best practices for native or cross-platform development.'
  },
  {
    title: 'Quality Assurance (QA) & Testing',
    desc: 'Our dedicated QA team performs rigorous functional, performance, and security testing. We ensure your app is bug-free, performs optimally, and delivers a seamless user experience.'
  },
  {
    title: 'Deployment & Launch',
    desc: 'After approval, we manage the entire app deployment process. This includes app store submissions, navigating approvals, and ensuring a smooth, successful launch.'
  },
  {
    title: 'Maintenance & Ongoing Support',
    desc: 'Our partnership continues post-launch with comprehensive maintenance. We provide bug fixes, performance monitoring, security updates, and enhancements to ensure your app evolves.'
  },
];


const MobileAppProcessChain = () => {
 

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    centerMode: true,
    centerPadding: '0px',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };


  return (
    <Box component="section" sx={{ ...getWhiteWrapperStyle() }}>
      <Container sx={containerStyle}>
        <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, fontFamily: 'Roboto, sans-serif', textAlign: 'center' }}>
          Our App Development Process: From <Box component="br" sx={getBrStyle()} />Concept to Launch and Beyond
        </Typography>
        <Typography sx={{ color: '#555', fontSize: { xs: '15px', md: '18px' }, mb: 4, fontFamily: 'Poppins, sans-serif', textAlign: 'center' }}>
          At Octagon Coders, we believe a successful mobile app is built on a foundation of clear strategy, <Box component="br" sx={getBrStyle()} />meticulous execution, and continuous partnership.
        </Typography>

        {/* Add the slider here */}
        <Slider {...sliderSettings}>
          {steps.map((step, idx) => (
            <Box key={idx} sx={{ position: 'relative', width: '100%' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', mb: 1 }}>
                <Box sx={mobileAppProcessChainStepNumber61}>{idx + 1}</Box>
              </Box>
              <Box sx={mobileAppProcessChainCard61}>
                <Box sx={mobileAppProcessChainCardHighlight1}>
                  <Typography sx={mobileAppProcessChainTitle6}>{step.title}</Typography>
                </Box>
                   <Typography sx={descStyle}>{step.desc}</Typography>
              </Box>
            </Box>
          ))}
        </Slider>

      
      </Container>
    </Box>
  );
};

export default MobileAppProcessChain;
