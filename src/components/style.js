import { styled } from '@mui/material/styles';
import { Box, Typography, TextField, Button } from '@mui/material';

// Global styles for container
export const containerStyle = () => ({
  maxWidth: {
    xs: "100%", // Full width on small screens
    md: "1160px", // 960px on medium screens
    lg: "1160px", // 1280px on large screens
    xl: "1480px", // Custom width for extra large screens
  },
  margin: "0 auto",
  px: { xs: 2, sm: 3 }, // Padding
});

export const getWhiteWrapperStyle = () => ({
  backgroundColor: '#F5F5F5',
  color: '#000000',
  py: { xs: 6, md: "10%" },
});

export const getBlueWrapperStyle = () => ({
  backgroundColor: '#3243FF',
  color: '#FFFFFF',
  py: { xs: 6, md: "8%" },
});

export const getBlackWrapperStyle = () => ({
  backgroundColor: '#000000',
  color: '#FFFFFF',
  py: { xs: 6, md: "6%" },
});

export const getH1Style = () => ({
  fontWeight: 600,
  fontSize: {
    xs: "28px",
    sm: "55px",
    md: "62px",
    lg: "70px",
  },
  mb: { xs: 1, md: "15px" },
  fontFamily: "Roboto, sans-serif",
  lineHeight: 1.2,
});

export const getH2Style = () => ({
  fontWeight: 600,
  fontSize: {
    xs: "32px",
    sm: "48px",
    md: "55px",
    lg: "60px",
  },
  mb: { xs: 0, md: 2 },
  fontFamily: "Roboto, sans-serif",
  lineHeight: 1.3,
});

export const getPStyle = () => ({
  fontWeight: 400,
  fontSize: { xs: "18px", sm: "26px", md: "18px" },
  color: "#F8F6F6",
    mb: { xs: 1, md: "15px" },
});

export const getSubPStyle = () => ({
  fontWeight: 400,
  fontSize: { xs: "14px", sm: "16px", md: "16px", lg: "18px" },
  color: "#F8F6F6",
  lineHeight: "30px",
});

export const getBrStyle = () => ({
  display: { xs: 'none', sm: 'block', md: 'block', lg: "block" },
});

export const contactButton = {
  display: 'flex',
  alignItems: 'center',
  px: 2,
  py: 1.4,
  borderRadius: '40px',
  border: '2px solid #0010C2',
  backgroundColor: 'transparent',
  color: '#0010C2',
  fontWeight: 700,
  fontSize: '20px',
  textTransform: 'uppercase',
  overflow: 'hidden',
  transition: 'all 0.4s ease',
  '&:hover': {
    backgroundColor: '#3243FF',
    color: '#001444', // navy/dark
    borderColor: '#3243FF',
  },
  '&:hover .iconWrapper': {
    backgroundColor: '#001444',
    transform: 'rotate(360deg)',
  },
};

export const iconWrapper = {
  backgroundColor: '#0010C2',
  borderRadius: '50%',
  width: 32,
  height: 32,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.4s ease',
};

//header
export const appBarStyle = (scrolled) => ({
  top: 0,
  zIndex: 1100,
  width: '100%',
  bgcolor: scrolled ? 'white' : 'transparent',
  color: scrolled ? 'black' : 'white',
  // border:"1px solid #fff",
  transition: 'all 0.3s ease',
  p: 2,
  '.menu-button': {
    color: scrolled ? 'black' : 'white',
  },
});

export const desktopMenuWrapper = {
  display: 'flex',
  gap: 3,
  alignItems: 'center',
};

export const menuButtonStyle = {
  color: 'inherit',
  fontWeight: 500,
  fontSize: '18px',
  textTransform: 'capitalize',
};

export const megaMenuBox = {
  position: 'absolute',
  top: '100%',
  left: 0,
  width: '600px',
  bgcolor: '#23364B',
  color: '#fff',
  p: 3,
  display: 'flex',
  justifyContent: 'space-between',
  borderRadius: 1,
  zIndex: 1000,
};

export const submenuBox = {
  position: 'absolute',
  top: '100%',
  left: 0,
  bgcolor: '#23364B',
  color: '#fff',
  px: 2,
  py: 1,
  borderRadius: 1,
  zIndex: 1000,
  width:"255px"
};

export const getStartedButton = {
  display: 'flex',
  alignItems: 'center',
  px: 3,
  py: 1.2,
  borderRadius: '40px',
  border: '2px solid #ffad00',
  backgroundColor: '#ffad00',
  color: '#000000',
  fontWeight: 500,
  fontSize: '18px',
  textTransform: 'capitalize',
  overflow: 'hidden',
  transition: 'all 0.4s ease',
  '&:hover': {
    backgroundColor: '#3243FF',
    color: '#000000',
    borderColor: '#3243FF',
  },
  '&:hover .iconWrapper': {
    backgroundColor: '#ffad00',
    transform: 'rotate(360deg)',
  },
};

export const hoverWrapper = {
  '&:hover .hover-appbar': {
    bgcolor: 'white',
    '.menu-button': { color: 'black' },
  },
};

///


export const getRootStyle = () => ({
  position: 'relative',
  width: '100%',
  height: "100vh",
  overflow: 'hidden',
  color: '#fff',
  minHeight: "calc(100vh - 120px)",

  background: {
    xs: "#3243FF", 
    sm: "#3243FF",
    md: "rgba(4,12,23,.5)",
  },
});



export const getVideoStyle = () => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: -1,
  display: {
    xs: 'none',
    sm: 'none',
    md: 'block'
  }
});

export const getOverlayStyle = () => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.64)', // semi-transparent black
  zIndex: 0,
});



export const getBannerContentStyle = () => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  zIndex: 1,
  px: { xs: '20px', md: '5%' }, // Visible padding around banner text
  py: { xs: '20px', md: '4%' },
  // background: { xs: "transparent", sm: "transparent", md: "transparent", lg: "rgba(0, 0, 0, 0.5)" },
  borderRadius: "27px"
});



// trusted

export const trustedcontainerStyle = () => ({
  maxWidth: "1050px",

  margin: "0 auto",
  px: { xs: 2, sm: 3 }, // Padding
});

// work with
export const getSectionStyle = () => ({
  backgroundColor: '#2D4EFF',
  color: '#fff',
  px: { xs: 2, md: 10 },
  py: { xs: 6, md: 12 },
});



export const getLeftWrapper = () => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
});


export const getWhiteBoxStyle = () => ({
  maxWidth:"400px",
  backgroundColor: '#fff',
  borderRadius: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  p:"15px",
  gap:"20px"
});

export const getRadioGroupStyle = () => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 2,
  mb: 3,
});

export const getRadioLabelStyle = () => ({
  color: '#fff',
  width: { xs: '100%', sm: '45%' },
  '& .MuiFormControlLabel-label': {
    fontSize: '0.95rem',
  },
});

export const getStartupTitleStyle = () => ({
  fontWeight: 700,
  fontSize: '22px',
});

export const getImageWrapperStyle = () => ({

  width: '100%',
  maxWidth: 400,
  mx: 'auto',
});

export const getGirlImageStyle = () => ({
  width: '100%',
  borderRadius: '50%',
  border: '6px solid white',
});

export const getBadgeTextStyle = () => ({
  position: 'absolute',
  top: '22%',
  left: '32%',
  fontSize: '1.1rem',
  fontWeight: 600,
});

export const getAvatarStyle = () => ({
  position: 'absolute',
  bottom: '25%',
  left: '8%',
  width: 90,
});

export const getArrowStyle = () => ({
  position: 'absolute',
  bottom: -10,
  right: -50,
  width: 160,
});

//product


export const getHeadingStyle1 = () => ({
  fontWeight: 700,
  fontSize: { xs: '2rem', md: '2.8rem' },
  lineHeight: 1.2,
  mb: 4,
});

export const getTabNavStyle = () => ({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: 3,
  pb: 2,
  py: { xs: 1, md: 6 }
});

export const getTabStyle = () => ({
  fontWeight: 700,
  fontSize: '22px',
  color: '#000000',
  cursor: 'pointer',
  px: "3%",
  fontFamily: "Roboto, sans-serif"
});

export const getActiveTabStyle = () => ({
  fontWeight: 700,
  fontSize: '22px',
  color: '#2D4EFF',
  pb: 0.5,
  cursor: 'pointer',
  px: "3%",
  fontFamily: "Roboto, sans-serif"
});

export const getCardWrapper = () => ({
  border: '1px solid #eee',
  borderRadius: 2,
  p: 3,
  textAlign: 'left',
  backgroundColor: "#FFFFFF",
  py: 5,
  height: "100%"
});

export const getCardTitle = () => ({
  fontWeight: 700,
  fontSize: '28px',
  color: '#3243FF',
  fontFamily: "Roboto, sans-serif",
  mb: 1.5,
});

export const getCardText = () => ({
  fontSize: '18px',
  lineHeight: 1.7,
  color: '#000000', fontWeight: 500,
});

export const getServiceButton = () => ({
  width: '100%',
  background: '#F8F6F6',
  color: '#000',
  textTransform: 'none',
  fontWeight: 500,
  borderRadius: 2,
  justifyContent: 'flex-start',
  px: 2,
  py: 1.2,
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#eee',
  },
});

export const getCardRightImage = () => ({
  width: '100%',
  borderRadius: 2,
  //   objectFit: 'cover',
  maxHeight: 400,
});

//techstack

export const getLogoBoxStyle = () => ({
  backgroundColor: '#fff',
  borderRadius: 2,
  py: 1,
  px: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: 98,
  width: 98,
  boxShadow: 1,
});

export const getLogoImageStyle = () => ({
  objectFit: 'contain',
  mb: 1,
});
export const getLogoImageStyle1 = () => ({
 width:"100%",
  mb: 1,
});

export const getTechLabelStyle = () => ({
  fontSize: '16px',
  fontWeight: 600,
  color: '#fff',
  textAlign: "center",
  pt: 1
});

export const getCTAStyle = () => ({
  color: '#fff',
  fontWeight: 700,
  fontSize: '20px',
  textAlign: "center",
  textDecoration: 'none',
  '&:hover': {
    color: '#ddd',
  },
});

export const marqueeWrapper = {
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  width: '100%',
  '&:hover .marquee-track': {
    animationPlayState: 'paused',
  }

};

export const marqueeTrack = {
  display: 'inline-flex',
  animation: 'scrollLeft 25s linear infinite',
  minWidth: '200%',
};


//project

export const getCardBoxStyle = () => ({
  p: 3,
  textAlign: 'left',
  borderRadius: 2,
  backgroundColor: '#ffffff',
  border: '1px solid #eee',
  boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
  //   height: '100%',
});

export const getCardBoxPrimaryStyle = () => ({
  ...getCardBoxStyle(),
  backgroundColor: '#3243FF',
  color: '#fff',
});

export const getCardTitleStyle = (type) => ({
  fontSize: '22px',
  fontWeight: 700,
  mb: 1,
  color: type === 'primary' ? '#fff' : '#000',
});

export const getCardDescStyle = (type) => ({
  fontSize: '0.95rem',
  lineHeight: 1.6,
  color: type === 'primary' ? '#fff' : '#00000',
});

// Scoped styles for IndustrySolutionsSection

export const getIndustryContainerStyle = () => ({
  backgroundColor: '#fff',
  color: '#000',
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  borderRadius: 2,
  overflow: 'hidden',
});

export const getIndustrySidebarStyle = () => ({
  width: { xs: '100%', md: '220px' },
  backgroundColor: '#f5f5f5',
  borderRight: { md: '1px solid #e0e0e0' },
});

export const getIndustryTabStyle = () => ({
  justifyContent: 'flex-start',
  px: 3,
  py: 1.8,
  textAlign: 'left',
  '&:hover': {
    backgroundColor: '#eaeaea',
  },
});

export const getIndustryTabActiveStyle = () => ({
  ...getIndustryTabStyle(),
  backgroundColor: '#2D4EFF',
  color: '#fff',
  '& .MuiTypography-root': {
    color: '#fff',
  },
});

export const getIndustryContentWrapper = () => ({
  flex: 1,
  px: { xs: 3, md: 5 },
  py: { xs: 3, md: 4 },
  textAlign: 'left',
});

export const getIndustryParagraphStyle = () => ({
  fontSize: '1rem',
  color: '#444',
  mb: 2,
});

export const getIndustryBulletStyle = () => ({
  fontSize: '0.95rem',
  color: '#222',
});

//validate

export const getValidateDescriptionStyle = () => ({
  fontSize: '0.95rem',
  maxWidth: 700,
  mx: 'auto',
  mb: 4,
  lineHeight: 1.6,
  fontWeight: 500,
});

export const getValidateButtonStyle = () => ({
  backgroundColor: '#fff',
  color: '#2D4EFF',
  fontWeight: 600,
  textTransform: 'none',
  px: 4,
  py: 1.2,
  borderRadius: 1,
  '&:hover': {
    backgroundColor: '#f0f0f0',
  },
});

//testimonial

export const getTestimonialWrapperStyle = () => ({
  px: { xs: 2, md: 8 },
  py: { xs: 6, md: 10 },
  backgroundColor: '#fff',
});

export const getTestimonialCardStyle = () => ({
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  backgroundColor: '#2D4EFF',
  borderRadius: 2,
  overflow: 'hidden',
});

export const getQuoteIconStyle = () => ({
  fontSize: '2rem',
  mb: 1,
});

export const getTestimonialTextStyle = () => ({
  fontSize: '1rem',
  lineHeight: 1.7,
  mb: 2,
  maxWidth: 500,
});

export const getTestimonialNameStyle = () => ({
  fontWeight: 700,
  fontSize: '1rem',
  mb: 0.5,
});

export const getStarRowStyle = () => ({
  display: 'flex',
  gap: 0.5,
});

export const getTestimonialImageStyle = (imageUrl) => ({
  flex: 1,
  backgroundImage: `url(${imageUrl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: 300,
});

//blog

export const blogCardStyle = () => ({
  backgroundColor: '#fff',
  borderRadius: 2,
  overflow: 'hidden',
  color: '#000',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
});

export const blogImageStyle = (url) => ({
  backgroundColor: '#2D4EFF',
  height: 180,
  backgroundImage: `url(${url})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});
export const blogBanner = {
  width: "100%",           // Makes it fully responsive
  minWidth: "300px",       // Prevents it from being too large
  aspectRatio: "16/9",  
  objectFit: "cover",      // Prevents distortion
  mx: "auto",  
}
  export const serviceTitle = {
    fontSize: { xs: "24px", sm: "32px", md: "50px" }, // Responsive font sizes
    fontFamily: "Roboto, sans-serif",
    fontWeight: 600,
    lineHeight: 1.2,
    textTransform: "uppercase",
    color: "#FF9B0F",
    mb: { xs: 0, sm: 0, md: 5 }, // Responsive margin between Typography
    mt: { xs: 0, md: 5 },
  };
  
export const blogContentStyle = () => ({
  p: 2,
  flexGrow: 1,
});

export const blogTitleStyle = () => ({
  fontWeight: 'bold',
  fontSize: '0.9rem',
  mb: 1,
});

export const blogDescriptionStyle = () => ({
  fontSize: '0.85rem',
  color: '#666',
});

export const blogButtonStyle = () => ({
  textTransform: 'none',
  fontSize: '0.8rem',
  color: '#2D4EFF',
  '&:hover': {
    color: '#1B39C2',
  },
});

//contact
export const addressBlock = {
  mb: 3,
};

export const iconStyle1 = {
  fontSize: 70,
  color: '#fff',
  mb: 1,
};

export const formBox = {
  backgroundColor: '#fff',
  borderRadius: '6px',
  p: 3,
  color: '#000',
};

export const formTitle = {
  fontSize: '13px',
  fontWeight: 500,
  mt: 2,
  mb: 0.5,
};

export const inputField = {
  backgroundColor: '#f2f2f2',
  borderRadius: '4px',
  mb: 2,
  '& input, & textarea': {
    fontSize: '13px',
  },
};

export const submitButton = {
  mt: 2,
  backgroundColor: '#0079F2',
  color: '#fff',
  textTransform: 'none',
  fontSize: '14px',
  px: 4,
  '&:hover': {
    backgroundColor: '#005fcc',
  },
};

export const textFieldStyles = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "black" },              // default border
    "&:hover fieldset": { borderColor: "black" },        // hover border
    "&.Mui-focused fieldset": { borderColor: "black" },  // focused border
  },
  "& .MuiInputBase-input::placeholder": {
    color: "#000000",   // black placeholder
    opacity: 1,
  },
};


//hire styles

export const leftColumn = {
  textAlign: { xs: 'center', md: 'left' },
};

export const rightColumn = {
  display: 'flex',
  justifyContent: 'center',
};

export const developerImg = {
  width:  '100%',
  maxWidth:"700px",};

export const logosGrid = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: 3,
};

export const logoBar = {
  textAlign: 'center',
};

export const logosWrapper = {
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  width: '100%',
};

export const logosMarquee = {
  display: 'inline-flex',
  gap: 4,
  animation: 'scrollLeft 25s linear infinite',
  '&:hover .marquee-track': {
    animationPlayState: 'paused',
  }
};

export const logoItem = {
  fontSize: 14,
  px: 4,
  flexShrink: 0,
  whiteSpace: 'nowrap',
};

export const globalMarqueeKeyframes = `
@keyframes scrollLeft {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
`;


//tybefore section

export const buttonBox = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 2,
  flexWrap: 'wrap',
};

export const callLink = {
  color: '#cecaca',
  fontWeight: 600,
  textTransform: 'none',
  fontSize: '18px',
  textDecoration: 'underline',
  '&:hover': {
    color: '#fff',
    textDecoration: 'underline',
  },
};

//technology dection

export const tabListStyle = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#1A37FF',
  borderRadius: 1,
  p: 2,
  width: { xs: '100%', md: '200px' },
};

export const tabButtonStyle = {
  color: '#fff',
  justifyContent: 'flex-start',
  px: 2,
  py: 1.2,
  borderRadius: 2,
  fontWeight: 500,
  fontSize: '14px',
  textTransform: 'none',
  mb: 1,
  '&:hover': {
    backgroundColor: '#3a4cff',
  },
};

export const activeTabStyle = {
  backgroundColor: '#fff',
  color: '#1A37FF',
  fontWeight: 700,
};

export const techCardStyle = {
  backgroundColor: '#e6e6e6',
  borderRadius: '8px',
  p: 1.5,
  textAlign: 'center',
  fontSize: '14px',
  fontWeight: 500,
};

//hire by role

export const cardBox = {
  backgroundColor: '#000',
  color: '#fff',
  borderRadius: 2,
  p: 3,
  textAlign: 'left',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
};

export const cardTitle = {
  fontSize: '16px',
  fontWeight: 600,
  mb: 1,
};

export const cardText = {
  fontSize: '14px',
  lineHeight: 1.6,
  color: '#ddd',
};

//code quality



export const leftTextWrapper = {
  pr: { md: 0 },
};
export const descStyle = {
  fontSize: '16px',
  color: '#555',
  mb: 3,
  lineHeight: 1.7,
};

export const imageStyle = {
  display: { xs: 'none', md: 'block' },
};

export const checklistBox = {
  backgroundColor: '#000',
  color: '#fff',
  borderRadius: 2,
  p: { xs: 3, md: 4 },
  minHeight: '100%',
};

export const listItem = {
  borderBottom: '1px solid #333',
  py: 1,
  fontWeight: 500,
  fontSize: '15px',
};

export const blackCard = {
  backgroundColor: '#000',
  color: '#fff',
  p: { xs: 3, md: 4 },
};

export const collapsibleTitle = {
  fontSize: '15px',
  fontWeight: 600,
  py: 1.5,
  borderBottom: '1px solid #333',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: '#1A37FF',
  },
};

export const collapsibleContent = {
  fontSize: '14px',
  color: '#ccc',
  mt: 1,
  lineHeight: 1.6,
};

//why hire 

export const listItemStyle = {
  fontSize: '1rem',
  color: '#fff', // Change if needed
  marginBottom: '8px',
  listStyleType: 'disc',
  marginLeft: '1.5em',
};


export const logoStyle = {
  width: '100%',
  maxWidth: '200px',
  objectFit: 'contain',
  mx: 'auto',
  display: 'block',
  // filter: 'brightness(0) invert(1)',
};


//footer

export const footerColumn = {
  display: 'flex',
  flexDirection: 'column',
  gap: 1.2,
};

export const footerHeading = {
  fontWeight: 600,
  fontSize: '16px',
  mb: 1.5,
};

export const footerLink = {
  fontSize: '14px',
  color: '#e0e0e0',
  transition: 'color 0.2s',
  '&:hover': {
    color: '#fff',
  },
};

// Mobile App Services Section Styles
export const mobileAppProcessChainCard61 = {
  backgroundColor: '#fff',
  borderRadius: '16px',
  p: 3,
  minHeight: '320px', // Equal height for all cards
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  mx: 1,
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
};

export const mobileAppProcessChainCardHighlight1 = {
  background: '#f3f4ff',
  padding: '10px',
  borderRadius: '10px 10px 0 0',
  fontWeight: 600,
  textAlign: 'center',
  mb:2
};

export const mobileAppProcessChainStepNumber61 = {
  background: '#3243FF',
  color: '#fff',
  borderRadius: '50%',
  width: '32px',
  height: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  fontSize: '16px',
  marginBottom: '8px',
};

export const mobileAppServicesHeading = {
  fontWeight: 800,
  fontSize: { xs: '28px', md: '40px' },
  mb: 2,
  fontFamily: 'Roboto, sans-serif',
};

export const mobileAppServicesHighlight = {
  color: '#1976d2',
  fontWeight: 900,
  fontFamily: 'Roboto, sans-serif',
};

export const mobileAppServicesSubtitle = {
  color: '#555',
  fontSize: { xs: '15px', md: '18px' },
  mb: 4,
};

export const mobileAppServicesGrid = {
  mt: 2,
  mb: 6,
};

export const mobileAppServicesCard = {
  border: '1px solid #ececec',
  borderRadius: '10px',
  p: 3,
  minHeight: '100%',
};
export const mobileAppServicesCardTitle = {
  fontWeight: 700,
  fontSize: '18px',
  mb: 1,
  color: '#222',
  fontFamily: 'Roboto, sans-serif',
};

export const mobileAppServicesCardDesc = {
  color: '#555',
  fontSize: '16px',
  fontWeight:400
};

export const mobileAppServicesArrow = {
  color: '#bdbdbd',
  fontSize: 22,
  ml: 1,
  verticalAlign: 'middle',
};

// Mobile App Process Section Styles
export const mobileAppProcessContainer = {
  mt: 8,
  mb: 8,
  px: { xs: 1, md: 0 },
};

export const mobileAppProcessHeading = {
  fontWeight: 800,
  fontSize: { xs: '24px', md: '36px' },
  mb: 2,
  fontFamily: 'Roboto, sans-serif',
};

export const mobileAppProcessSubtitle = {
  color: '#555',
  fontSize: { xs: '15px', md: '18px' },
  mb: 4,
};

export const mobileAppProcessGrid = {
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  alignItems: { xs: 'stretch', md: 'flex-start' },
  justifyContent: 'center',
  gap: { xs: 4, md: 2 },
  position: 'relative',
};

export const mobileAppProcessStep = {
  backgroundColor: '#f5f7fa',
  borderRadius: 3,
  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
  p: 3,
  minWidth: { xs: 'auto', md: 220 },
  minHeight: 180,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  position: 'relative',
  zIndex: 2,
};

export const mobileAppProcessIcon = {
  backgroundColor: '#3243FF',
  color: '#fff',
  borderRadius: '50%',
  width: 56,
  height: 56,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 32,
  mb: 2,
};

export const mobileAppProcessStepTitle = {
  fontWeight: 700,
  fontSize: '17px',
  mb: 1,
  color: '#222',
  fontFamily: 'Roboto, sans-serif',
};

export const mobileAppProcessStepDesc = {
  color: '#555',
  fontSize: '15px',
};

export const mobileAppProcessConnector = {
  display: { xs: 'none', md: 'block' },
  position: 'absolute',
  top: '50%',
  left: '100%',
  width: 40,
  height: 2,
  background: 'repeating-linear-gradient(90deg, #bdbdbd, #bdbdbd 8px, transparent 8px, transparent 16px)',
  zIndex: 1,
  transform: 'translateY(-50%)',
};

// Mobile App Process Flow (reference style)
export const mobileAppProcessFlowContainer = {
  mt: 8,
  mb: 8,
  px: { xs: 1, md: 0 },
};

export const mobileAppProcessFlowGrid = {
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr) 40px repeat(3, 1fr)' },
  gridTemplateRows: { xs: 'auto', md: 'repeat(2, 1fr)' },
  gap: { xs: 4, md: 3 },
  alignItems: 'center',
  justifyItems: 'center',
  position: 'relative',
  width: '100%',
  maxWidth: 1400,
  mx: 'auto',
};

export const mobileAppProcessFlowStep = {
  backgroundColor: '#f5f7fa',
  borderRadius: 3,
  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
  p: 2.5,
  minWidth: 220,
  minHeight: 90,
  display: 'flex',
  alignItems: 'center',
  gap: 2,
  position: 'relative',
  zIndex: 2,
  width: '100%',
};

export const mobileAppProcessFlowIconBox = {
  backgroundColor: '#1976d2',
  color: '#fff',
  borderRadius: '8px',
  width: 56,
  height: 56,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 32,
  mr: 2,
};

export const mobileAppProcessFlowTitle = {
  fontWeight: 700,
  fontSize: '18px',
  color: '#222',
  fontFamily: 'Roboto, sans-serif',
};

export const mobileAppProcessFlowConnectorH = {
  display: { xs: 'none', md: 'block' },
  position: 'absolute',
  top: '50%',
  left: '100%',
  width: 40,
  height: 0,
  borderTop: '2px dashed #bdbdbd',
  zIndex: 1,
  transform: 'translateY(-50%)',
};

export const mobileAppProcessFlowConnectorV = {
  display: { xs: 'none', md: 'block' },
  position: 'absolute',
  left: '50%',
  top: '100%',
  width: 0,
  height: 40,
  borderLeft: '2px dashed #bdbdbd',
  zIndex: 1,
  transform: 'translateX(-50%)',
};

// Mobile App Process Card Row Styles
export const mobileAppProcessCardsContainer = {
  mt: 8,
  mb: 8,
  px: { xs: 1, md: 0 },
  textAlign: 'center',
};

export const mobileAppProcessCardsRow = {
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  alignItems: 'stretch',
  justifyContent: 'center',
  gap: { xs: 3, md: 0 },
  width: '100%',
  maxWidth: 1600,
  mx: 'auto',
};

export const mobileAppProcessCard = {
  backgroundColor: '#fff',
  borderRadius: 4,
  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
  p: { xs: 3, md: 4 },
  flex: 1,
  minWidth: 240,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  mb: { xs: 2, md: 0 },
};

export const mobileAppProcessCardIcon = {
  backgroundColor: '#1976d2',
  color: '#fff',
  borderRadius: '50%',
  width: 56,
  height: 56,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 32,
  mb: 2,
};

export const mobileAppProcessCardTitle = {
  fontWeight: 700,
  fontSize: '18px',
  color: '#111',
  fontFamily: 'Roboto, sans-serif',
  mb: 1,
  textAlign: 'center',
};

export const mobileAppProcessCardDesc = {
  color: '#444',
  fontSize: '15px',
  textAlign: 'center',
};

export const mobileAppProcessCardDivider = {
  display: { xs: 'block', md: 'block' },
  width: { xs: '60%', md: '2px' },
  height: { xs: '2px', md: '60%' },
  background: '#e0e0e0',
  alignSelf: 'center',
  mx: { xs: 'auto', md: 2 },
  my: { xs: 2, md: 0 },
  borderRadius: 1,
};

// Mobile App Process Chain Styles
export const mobileAppProcessChainContainer = {
  mt: 8,
  mb: 8,
  px: { xs: 1, md: 0 },
  textAlign: 'center',
};

export const mobileAppProcessChainRow = {
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  alignItems: 'center',
  justifyContent: 'center',
  gap: { xs: 3, md: 0 },
  width: '100%',
  maxWidth: 1600,
  mx: 'auto',
  position: 'relative',
};

export const mobileAppProcessChainStep = {
  backgroundColor: '#fff',
  borderRadius: 4,
  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
  p: { xs: 3, md: 4 },
  minWidth: 240,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  mb: { xs: 2, md: 0 },
  position: 'relative',
  zIndex: 2,
};

export const mobileAppProcessChainIcon = {
  backgroundColor: '#1976d2',
  color: '#fff',
  borderRadius: '50%',
  width: 56,
  height: 56,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 32,
  mb: 2,
};

export const mobileAppProcessChainTitle = {
  fontWeight: 700,
  fontSize: '18px',
  color: '#111',
  fontFamily: 'Roboto, sans-serif',
  mb: 1,
  textAlign: 'center',
};

export const mobileAppProcessChainDesc = {
  color: '#444',
  fontSize: '15px',
  textAlign: 'center',
};

export const mobileAppProcessChainConnectorH = {
  display: { xs: 'none', md: 'flex' },
  alignItems: 'center',
  justifyContent: 'center',
  mx: 0,
  my: 0,
  height: 0,
  minWidth: 48,
  position: 'relative',
  zIndex: 1,
};

export const mobileAppProcessChainConnectorV = {
  display: { xs: 'flex', md: 'none' },
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  minHeight: 32,
  position: 'relative',
  zIndex: 1,
};

// Mobile App Process Chain Grid Styles (2 rows, 3 columns)
export const mobileAppProcessChainGrid = {
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
  gridTemplateRows: { xs: 'repeat(6, auto)', md: 'repeat(2, 1fr)' },
  gap: { xs: 3, md: 4 },
  alignItems: 'center',
  justifyItems: 'center',
  width: { xs: '100%', md: 'auto' },
  maxWidth: { xs: '100%', md: 1200 },
  mx: 'auto',
  position: 'relative',
};

export const mobileAppProcessChainStepGrid = {
  backgroundColor: '#fff',
  borderRadius: 4,
  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
  p: { xs: 3, md: 4 },
  minWidth: 240,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  textAlign: 'center',
  position: 'relative',
  zIndex: 2,
};

export const mobileAppProcessChainStepNumber = {
  width: 36,
  height: 36,
  borderRadius: '50%',
  background: '#1976d2',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 700,
  fontSize: 18,
  mb: 1.5,
  boxShadow: '0 2px 8px rgba(25,118,210,0.12)',
};

export const mobileAppProcessChainIconLarge = {
  backgroundColor: '#e3eafd',
  color: '#1976d2',
  borderRadius: '50%',
  width: 56,
  height: 56,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 32,
  mb: 2,
  boxShadow: '0 2px 8px rgba(25,118,210,0.10)',
};

export const mobileAppProcessChainConnectorGridH = {
  display: { xs: 'none', md: 'flex' },
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: '50%',
  left: '100%',
  width: 48,
  height: 0,
  zIndex: 1,
  transform: 'translateY(-50%)',
};

export const mobileAppProcessChainConnectorGridV = {
  display: { xs: 'none', md: 'flex' },
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  left: '50%',
  top: '100%',
  width: 0,
  height: 48,
  zIndex: 1,
  transform: 'translateX(-50%)',
};

export const mobileAppProcessChainConnectorGridMobile = {
  display: { xs: 'flex', md: 'none' },
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  minHeight: 32,
  position: 'relative',
  zIndex: 1,
};

// eCommerce-like Process Chain Styles (single row, 6 steps)
export const mobileAppProcessChainRow6 = {
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: { xs: 4, md: 3 },
  width: '100%',
  maxWidth: 1600,
  mx: 'auto',
  position: 'relative',
};

export const mobileAppProcessChainCard6 = {
  backgroundColor: '#fff',
  borderRadius: 6,
  boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
  p: { xs: 3, md: 4 },
  minWidth: 220,
  maxWidth: 270,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  textAlign: 'center',
  position: 'relative',
  zIndex: 2,
  minHeight: { xs: 260, md: 200 },
  overflow: 'hidden',
};

export const mobileAppProcessChainCardHighlight = {
  width: '100%',
  mb:5,
  background: '#3243ff1a',
  borderTopLeftRadius: 24,
  borderTopRightRadius: 24,
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1,
};

export const mobileAppProcessChainStepNumber6 = {
  width: 32,
  height: 32,
  borderRadius: '50%',
  background: '#3243FF',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 700,
  fontSize: 16,
  mb: 1.5,
  boxShadow: '0 2px 8px rgba(255,184,0,0.12)',
  position: 'relative',
  zIndex: 3,
};

export const mobileAppProcessChainConnector6 = {
  display: { xs: 'none', md: 'block' },
  position: 'absolute',
  top: 16,
  left: '100%',
  width: 60,
  height: 24,
  zIndex: 2,
};

export const mobileAppProcessChainTitle6 = {

  fontWeight: 700,
  fontSize: '20px',
  color: '#222',
  fontFamily: 'Roboto, sans-serif',
  mb: 1.5,
  mt: 0,
  zIndex: 2,
  position: 'relative',
  background: 'transparent',
};

export const mobileAppProcessChainDesc6 = {
  color: '#444',
  fontSize: '15px',
  textAlign: 'center',
  zIndex: 2,
  position: 'relative',
  display: '-webkit-box',
  WebkitLineClamp: 4,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  minHeight: '4.8em', // ensures 4 lines space
};

export const mobileAppProcessChainReadMore = {
  color: '#3243FF',
  fontWeight: 600,
  fontSize: '15px',
  mt: 1,
  cursor: 'pointer',
  textDecoration: 'underline',
  background: 'none',
  border: 'none',
  outline: 'none',
};




//style mobile banner

export const getAboutBannerStyle = () => ({
  position: 'relative',
  width: '100%',
  // height: "100vh",
  overflow: 'hidden',
  color: '#fff',
  minHeight: "calc(100vh - 80px)",
  backgroundImage: "url('/assets/images/mobileApp.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
});


//our ethics
export const sectionWrapper = {
  px: 3,
  py: 6,
  maxWidth: '1200px',
  mx: 'auto',
};

export const subtitleStyle = {
  maxWidth: 700,
  mb: 4,
  color: 'text.secondary',
};

export const tileWrapper = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: 2,
};

export const iconBox = {
  minWidth: '40px',
  mt: '4px',
};

export const tileTitle = {
  fontWeight: 600,
  fontSize: '16px',
  mb: '4px',
};

export const tileDesc = {
  fontSize: '14px',
  color: 'text.secondary',
};


//industry cards

export const industryBox = {
  borderRadius: '10px',
  p: 3,
  minHeight: '200px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
};

export const iconStyle = {
  fontSize: '28px',
  mb: 1,
};

export const industryTitle = {
  fontWeight: '600',
  fontSize: '16px',
  mb: 1,
};


//case study


export const cardBox1 = (imageUrl) => ({
  position: 'relative',
  height: '300px',
  overflow: 'hidden',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'flex-end',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'all 0.9s ease-in-out',
    transform: 'scale(1)', // initial scale
    zIndex: 1,
  },

  '&:hover::before': {
    transform: 'scale(1.3)', // zoom on hover
  },

  // overlay content remains above
  '& .MuiBox-root': {
    position: 'relative',
    zIndex: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: '#fff',
    width: '100%',
    padding: '20px',
  },
});


export const overlayBox = {
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  color: '#fff',
  width: '100%',
  padding: '20px',
};

export const chipStyle = {
  backgroundColor: '#1a73e8',
  color: '#fff',
  fontSize: '12px',
  mb: 1,
};

export const titleStyle = {
  fontWeight: 600,
  fontSize: '18px',
  mb: 1,
};

export const techStyle = {
  fontSize: '13px',
  mb: 1.5,
  color: '#ccc',
};

export const learnMoreStyle = {
  fontSize: '13px',
  textDecoration: 'underline',
  cursor: 'pointer',
  '&:hover': {
    color: '#1a73e8',
  },
};


// contact us
const styles = {
  sectionWrap: {
    py: { xs: "30%", md: "8%" },
    px: { xs: 2, sm: 3, md: 6 },
    background: "#000000", // deep navy background to match screenshot
  },

  shell: {
    maxWidth: "1400px",
    mx: "auto",
  },

  formCard: {
    p: { xs: 2.5, sm: 3, md: 4 },
    borderRadius: 3,
    backgroundColor: "#fff",
    color: "#1a73e8",
  },

  headerRow: {
    display: "flex",
    alignItems: { xs: "flex-start", md: "center" },
    gap: 2,
    mb: 3,
    position: "relative",
  },

  logoWrap: {
    width: 56,
    height: 56,
    borderRadius: "14px",
    background: "linear-gradient(135deg,#FFB102,#FF6A00)",
    display: "grid",
    placeItems: "center",
    mr: 1,
    flexShrink: 0,
  },

  logoCube: {
    width: 26,
    height: 26,
    borderRadius: "6px",
    background: "#0C244A",
    boxShadow: "inset 0 0 0 2px rgba(255,255,255,0.6)",
  },

  title: { fontWeight: 800, color: "#000000", letterSpacing: 0.3 },
  subtitle: { color: "rgba(20, 19, 19, 0.24)", mt: 0.5 },

  actionsRow: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    mt: 1.5,
  },
  actionBtn: {
    color: "#FFB102",
    border: "1px solid rgba(255,177,2,0.35)",
    mr: 0.5,
  },
  actionText: { color: "#000000", fontSize: 14, mr: 1.5 },
  actionDot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "rgba(255,255,255,0.25)",
    mx: 0.5,
  },

  badgeWrap: {
    ml: "auto",
    display: { xs: "none", md: "flex" },
    gap: 1,
  },
  badge: {
    color: "#C7D3EA",
    borderColor: "rgba(255,255,255,0.25)",
    "& .MuiChip-icon": { color: "#6BE675" },
  },

  uploadBtn: {
    borderColor: "rgba(255,255,255,0.25)",
    color: "#C7D3EA",
    "&:hover": { borderColor: "#FFB102" },
  },

  submitCol: {
    display: "flex",
    justifyContent: { xs: "flex-start", md: "flex-end" },
    alignItems: "center",
  },

  ctaBtn: {
    px: 4,
    py: 1.5,
    fontWeight: 700,
    borderRadius: 999,
    textTransform: "none",
    background:
      "linear-gradient(90deg, rgba(255,177,2,1) 0%, rgba(255,158,0,1) 100%)",
    boxShadow: "0 8px 24px rgba(255,177,2,0.25)",
    "&:hover": {
      background:
        "linear-gradient(90deg, rgba(255,177,2,0.9) 0%, rgba(255,158,0,0.9) 100%)",
      boxShadow: "0 8px 24px rgba(255,177,2,0.35)",
    },
  },

  sideCol: {
    pl: { md: 3 },
    mt: { xs: 3, md: 0 },
  },

  sideInner: {
    background: "transparent",
    borderRadius: 3,
    p: { xs: 2.5, sm: 3, md: 4 },
    color: "#C7D3EA",
    height: "100%",
  },

  sideTitle: {
    fontWeight: 700,
    color: "#E7EEFF",
    mb: 2.5,
    lineHeight: 1.3,
  },

  pointRow: {
    display: "flex",
    gap: 1.5,
    mb: 1.75,
    alignItems: "flex-start",
  },
pointIcon: {
  width: 40,
  height: 40,
  borderRadius: "50%",
  background: "rgba(255,255,255,0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
},
pointIconSvg: {
  color: "#FFB102", // matches accent gradient
  fontSize: 22,
},

  pointHead: { color: "#fff", fontWeight: 700, mb: 0.25 },
  pointText: { color: "rgba(255,255,255,0.75)" },

  logoGrid: {
    mt: 3,
    display: "grid",
    gridTemplateColumns: {
      xs: "repeat(2, 1fr)",
      sm: "repeat(3, 1fr)",
      md: "repeat(3, 1fr)",
    },
    gap: 1,
  },
  logoCell: {
    height: 52,
    borderRadius: 2,
    background: "rgba(255,255,255,0.06)",
    display: "grid",
    placeItems: "center",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  logoText: {
    fontSize: 13,
    color: "rgba(255,255,255,0.85)",
    textAlign: "center",
  },
};

export default styles;

// blogs

export const HeroWrapper = styled(Box)(({ theme }) => ({
  textAlign: 'left',
  padding: '100px 5%',
  maxWidth: 1300,
  margin: '0 auto',
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
    padding: '60px 20px',
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: '3.8rem',
  fontWeight: 800,
  color: '#1a1a1a',
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
  },
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  color: '#3d3d3d',
  lineHeight: 1.6,
  maxWidth: 800,
  marginBottom: theme.spacing(6),
}));

export const SearchContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  maxWidth: 700,
  marginTop: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
}));

export const StyledInput = styled(TextField)(() => ({
  flex: 1,
  backgroundColor: '#fff',
  borderRadius: '12px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    fontSize: '1rem',
    paddingRight: '10px',
  },
}));

export const StyledButton = styled(Button)(() => ({
  backgroundColor: '#ffb400',
  color: '#fff',
  fontWeight: 600,
  borderRadius: '12px',
  fontSize: '1rem',
  padding: '14px 32px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#e6a100',
  },
}));

export const ArrowGraphic = styled(Box)(() => ({
  position: 'absolute',
  top: '80px',
  right: '120px',
  width: '100px',
  height: '100px',
  backgroundImage:
    "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><path d=\"M20,20 C80,20 60,80 90,90\" stroke=\"orange\" stroke-width=\"4\" fill=\"none\"/></svg>')",
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  [ '@media (max-width: 800px)' ]: {
    display: 'none',
  },
}));

export const FeaturedIn = styled(Typography)(() => ({
  fontSize: '1.1rem',
  fontWeight: 600,
  color: '#1a1a1a',
  marginBottom: '16px',
}));

export const LogoRow = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '30px',
  alignItems: 'center',
  marginTop: '12px',
}));

export const LogoImage = styled('img')(() => ({
  height: 30,
  objectFit: 'contain',
  opacity: 0.7,
}));
