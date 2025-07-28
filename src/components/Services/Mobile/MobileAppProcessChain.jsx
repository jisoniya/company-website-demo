import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import Slider from 'react-slick';
import {
  mobileAppProcessChainRow6,
  mobileAppProcessChainCard6,
  mobileAppProcessChainCardHighlight,
  mobileAppProcessChainStepNumber6,
  mobileAppProcessChainConnector6,
  mobileAppProcessChainTitle6,
  mobileAppProcessChainDesc6,
  mobileAppProcessChainReadMore,
  containerStyle,
  getWhiteWrapperStyle,
} from '../../style';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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

const DashedArrow = () => (
  <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 12 Q30 12 58 12" stroke="#3243FF" strokeWidth="2" strokeDasharray="5,5" fill="none" />
    <polygon points="54,8 60,12 54,16" fill="#3243FF" />
  </svg>
);

const Description = ({ text, expanded, onToggle }) => {
  const descRef = useRef(null);
  const [showReadMore, setShowReadMore] = useState(false);

  useEffect(() => {
    if (descRef.current) {
      setShowReadMore(descRef.current.scrollHeight > descRef.current.clientHeight + 2);
    }
  }, [text]);

  return (
    <>
      <Typography
        ref={descRef}
        sx={{
          ...mobileAppProcessChainDesc6,
          maxHeight: expanded ? 'none' : '6.2em', // ~4 lines
          overflow: expanded ? 'visible' : 'hidden',
          WebkitLineClamp: expanded ? 'unset' : 4,
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
        }}
      >
        {text}
      </Typography>
      {showReadMore && (
        <Button sx={mobileAppProcessChainReadMore} onClick={onToggle} size="small">
          {expanded ? 'Read less' : 'Read more'}
        </Button>
      )}
    </>
  );
};

const MobileAppProcessChain = () => {
  const [expanded, setExpanded] = useState(Array(steps.length).fill(false));

  const handleReadMore = (idx) => {
    setExpanded((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Disable next/prev arrows
    autoplay: true,
    autoplaySpeed: 3000, // Slide interval
  };

  return (
    <Box component="section" sx={{ ...getWhiteWrapperStyle() }}>
      <Container sx={containerStyle}>
        <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, fontFamily: 'Roboto, sans-serif', textAlign: 'center' }}>
          Our App Development Process: From Concept to Launch and Beyond
        </Typography>
        <Typography sx={{ color: '#555', fontSize: { xs: '15px', md: '18px' }, mb: 4, fontFamily: 'Poppins, sans-serif', textAlign: 'center' }}>
          At Octagon Coders, we believe a successful mobile app is built on a foundation of clear strategy, meticulous execution, and continuous partnership.
        </Typography>
        
        {/* Add the slider here */}
        <Slider {...sliderSettings}>
          {steps.map((step, idx) => (
            <Box key={idx} sx={{ position: 'relative', width: '100%' }}>
              {/* Numbered circle and connector */}
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', mb: 1 }}>
                <Box sx={mobileAppProcessChainStepNumber6}>{idx + 1}</Box>
              </Box>
              {/* Card */}
              <Box sx={mobileAppProcessChainCard6}>
                <Box sx={mobileAppProcessChainCardHighlight} >
                <Typography sx={mobileAppProcessChainTitle6}>{step.title}</Typography>
                </Box>
                <Description
                  text={step.desc}
                  expanded={expanded[idx]}
                  onToggle={() => handleReadMore(idx)} sx={{mt:5}}
                />
              </Box>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default MobileAppProcessChain;
