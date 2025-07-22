// Global styles for container
export const containerStyle = () => ({
  maxWidth: {
    xs: "100%", // Full width on small screens
    md: "1160px", // 960px on medium screens
    lg: "1260px", // 1280px on large screens
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
  fontFamily: "Poppins, sans-serif",
  color: "#F8F6F6",
    mb: { xs: 1, md: "15px" },
});

export const getSubPStyle = () => ({
  fontWeight: 400,
  fontSize: { xs: "14px", sm: "16px", md: "16px", lg: "18px" },
  fontFamily: "Poppins, sans-serif",
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
  fontFamily: "Poppins, sans-serif",
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
  fontFamily: "Poppins, sans-serif",
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
  fontFamily: 'Poppins, sans-serif',
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
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent black
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
  color: '#000000',
  fontFamily: "poppins, sans-serif", fontWeight: 500,
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

export const getCardWrapperStyle = () => ({
  mb: { xs: "2%", md: "10%" }
});

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
  fontFamily: "poppins, sans-serif"
});

export const getCardDescStyle = (type) => ({
  fontSize: '0.95rem',
  lineHeight: 1.6,
  color: type === 'primary' ? '#fff' : '#00000',
  fontFamily: "poppins, sans-serif"
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

export const locationBlock = {
  mb: 4,
};

export const locationTitle = {
  fontSize: '16px',
  fontWeight: 600,
  mb: 0.5,
};

export const locationText = {
  fontSize: '14px',
  color: '#ccc',
};

export const formContainer = {
  backgroundColor: '#fff',
  color: '#000',
  borderRadius: '8px',
  p: { xs: 3, md: 4 },
};


export const formBox = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
};

export const inputField = {
  '& .MuiInputBase-root': {
    backgroundColor: '#f5f5f5',
  },
};

export const submitButton = {
  backgroundColor: '#0046FF',
  color: '#fff',
  fontWeight: 600,
  fontSize: '15px',
  px: 4,
  py: 1.5,
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#0034cc',
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
  width: { xs: '100%', md: 'auto' },
  maxWidth: { xs: '100%', md: '700px' },
};

export const logosGrid = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: 3,
};

export const logoBar = {
  mt: 8,
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
  fontFamily: "poppins, sans-serif",
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
  color: '#ffffff',
  fontSize: '14px',
  py: 0.5,
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
  fontFamily: 'Poppins, sans-serif',
};

export const mobileAppServicesGrid = {
  mt: 2,
  mb: 6,
};

export const mobileAppServicesCard = {
  backgroundColor: '#f5f7fa',
  borderRadius: 3,
  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
  p: 3,
  minHeight: 120,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  transition: 'all 0.5s',
  '&:hover': {
    backgroundColor: '#3243FF',
    color: '#fff',
    boxShadow: '0 4px 16px rgba(50,67,255,0.18)',
    transform: 'translateY(-10px)',
  },
  '& .MuiTypography-root, & .MuiSvgIcon-root': {
    transition: 'color 0.5s',
    transform: 'translateY(10px)',
  },
  '&:hover .MuiTypography-root, &:hover .MuiSvgIcon-root': {
    color: '#fff',
  },
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
  fontSize: '15px',
  fontFamily: 'Poppins, sans-serif',
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
  fontFamily: 'Poppins, sans-serif',
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
  fontFamily: 'Poppins, sans-serif',
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
  fontFamily: 'Poppins, sans-serif',
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
  fontFamily: 'Poppins, sans-serif',
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
  minHeight: { xs: 260, md: 340 },
  overflow: 'hidden',
};

export const mobileAppProcessChainCardHighlight = {
  width: '100%',
  height: 48,
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
  fontFamily: 'Poppins, sans-serif',
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




