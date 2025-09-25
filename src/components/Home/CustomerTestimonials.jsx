import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { containerStyle, getH2Style, getWhiteWrapperStyle } from '../style';


const testimonials = [
  {
    name: 'Preet',
    quote: 'Amazing service and support. Highly recommend!',
    rating: 5,
    image: '/assets/images/customer.svg',
  },
  {
    name: 'Aditi',
    quote: 'Great communication and results!',
    rating: 5,
    image: '/assets/images/customer.svg',
  },
  {
    name: 'Preet',
    quote: 'Amazing service and support. Highly recommend!',
    rating: 5,
    image: '/assets/images/customer.svg',
  },
  {
    name: 'Aditi',
    quote: 'Great communication and results!',
    rating: 5,
    image: '/assets/images/customer.svg',
  },
];

const TestimonialCard = ({ name, quote, rating, image }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'column', md: 'row' }, //  Stacks on small, horizontal on medium+
        borderRadius: 2,
        overflow: 'hidden',
        backgroundColor: '#2D4EFF',
        color: 'white',
        minHeight: { xs: 400, md: 407 }, //  Dynamic height for mobile
        width: '100%',
      }}
    >
      <Box sx={{
        flex: 1,
        p: { xs: 3, sm: 4 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <Typography fontSize={{ xs: '1.5rem', md: '2rem' }} mb={1}>&ldquo;</Typography>
        <Typography fontSize={{ xs: '0.9rem', md: '1rem' }} lineHeight={1.6} mb={2}>
          {quote}
        </Typography>
        <Typography fontWeight={700}>{name}</Typography>
        <Box sx={{ display: 'flex', gap: 0.5, mt: 1 }}>
          {Array.from({ length: rating }).map((_, i) => (
            <StarIcon key={i} sx={{ color: '#FFD700', fontSize: 18 }} />
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          flex: 1,
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: { xs: 250, md: 'auto' }, //  Adjusts on small screens
          width: '100%',
        }}
      />
    </Box>
  );
};


const CustomerTestimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box sx={getWhiteWrapperStyle()}>
       <Box sx={containerStyle()}>
      <Typography variant="h2" sx={{...getH2Style(),mb:{xs:0,md:"6%"}}} textAlign="center" >
        Customer video testimonials to build trust
      </Typography>
      <Slider {...settings}>
        {testimonials.map((item, idx) => (
          <div key={idx}>
            <TestimonialCard {...item} /> {/* JSX component, not object */}
          </div>
        ))}
      </Slider>
    </Box>
    </Box>
  );
};

export default CustomerTestimonials;
