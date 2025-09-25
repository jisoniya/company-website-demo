import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import {
  industryBox,
  iconStyle,
  industryTitle,
  getWhiteWrapperStyle,
  containerStyle,
  getH2Style,
  getSubPStyle,
  getBrStyle,
  descStyle,
} from '../../style';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SchoolIcon from '@mui/icons-material/School';
import StoreIcon from '@mui/icons-material/Store';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import FlightIcon from '@mui/icons-material/Flight';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const industries = [
  {
     icon: <LocalHospitalIcon fontSize="large" />,
    title: 'Healthcare',
    desc: 'We develop apps that streamline patient management, enable telemedicine, and provide easy access to medical records, improving healthcare delivery.',
    bg: '#eefcfe',
  },
  {
  icon: <AccountBalanceIcon fontSize="large" />,
    title: 'Finance and Banking',
    desc: 'Our secure mobile apps allow users to manage their finances, track investments, and complete transactions with ease.',
    bg: '#ffe8cc',
  },
  {
       icon: <SchoolIcon fontSize="large" />,
    title: 'Education',
    desc: 'We offer mobile learning platforms that enhance engagement with interactive content, virtual classrooms, and personalized learning experiences.',
    bg: '#f6f1ff',
  },
  {
   icon: <StoreIcon fontSize="large" />,
    title: 'Retail',
    desc: 'Our retail apps boost e-commerce with features like virtual try-ons, personalized shopping, and simplified checkout processes.',
    bg: '#fff0ee',
  },
  {
     icon: <LiveTvIcon fontSize="large" />,
    title: 'Entertainment',
    desc: 'We develop mobile apps to stream video, music, and interactive content, providing personalized media experiences to users globally.',
    bg: '#f5ffd9',
  },
  {
      icon: <FlightIcon fontSize="large" />,
    title: 'Travel and Hospitality',
    desc: 'Our solutions improve booking, navigation, and personalized travel experiences, enhancing convenience for travelers.',
    bg: '#d4e8ff',
  },
  {
    icon: <HomeWorkIcon fontSize="large" />,
    title: 'Real Estate',
    desc: 'We develop apps that simplify property searches, virtual tours, and transactions, fostering seamless communication between buyers and sellers.',
    bg: '#ffddeb',
  },
  {
     icon: <SportsEsportsIcon fontSize="large" />,
    title: 'Transportation',
    desc: 'We offer route optimization, real-time vehicle tracking, and booking services, improving logistics and transportation efficiency.',
    bg: '#eefcfe',
  },
  {
 icon: <AgricultureIcon fontSize="large" />,
    title: 'Gaming',
    desc: 'Our gaming apps engage users with interactive, fun and immersive experiences that cater to various interests.',
    bg: '#f6f1ff',
  },
  {
    icon: <ElectricBoltIcon fontSize="large" />,
    title: 'Agriculture',
    desc: 'We craft apps that assist farmers with crop management, weather tracking, and providing farming advice, boosting productivity.',
    bg: '#eefcfe',
  },
  {
     icon: <DirectionsCarIcon fontSize="large" />,
    title: 'Environmental Services',
    desc: 'We design apps that promote sustainability with features like recycling information, environmental impact tracking, and conservation tips.',
    bg: '#f5ffd9',
  },
];

const IndustryCards = () => {
  return (
    <Box sx={getWhiteWrapperStyle}>
      <Container sx={containerStyle}>
      <Typography sx={getH2Style}>
        Industries We Serve:{' '}Tailored <Box component="br" sx={getBrStyle()} /> Mobile Innovation
      </Typography>
      <Typography sx={{...getSubPStyle, color: "#00000"}}>
       At Octagon Coders, we understand that each industry has its distinct challenges and opportunities. We don't just build apps; we engineer custom <Box component="br" sx={getBrStyle()} />mobile solutions that address your sector's most pressing needs, driving efficiency, engagement, and growth.
      </Typography>

      <Grid container spacing={3} mt={4}>
        {industries.map((industry, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Box sx={{ ...industryBox, backgroundColor: industry.bg }}>
              <Typography sx={iconStyle}>{industry.icon}</Typography>
              <Typography sx={industryTitle}>{industry.title}</Typography>
              <Typography sx={descStyle}>{industry.desc}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      </Container>
    </Box>
  );
};

export default IndustryCards;
