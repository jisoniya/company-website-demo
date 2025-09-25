import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import {
  sectionWrapper,
  subtitleStyle,
  tileWrapper,
  iconBox,
  tileTitle,
  tileDesc,
  getWhiteWrapperStyle,
  containerStyle,
  getH2Style,
  getSubPStyle,
  descStyle,
  getBrStyle,
} from '../../style';

const tiles = [
  {
    icon: <SecurityIcon color="primary" fontSize="large" />,
    title: 'Uncompromising Security & Privacy',
    description:
      'Your data’s safety is paramount. We implement multi-layered security, end-to-end encryption, and adhere strictly to GDPR, HIPAA, PCI DSS, and other global standards, ensuring robust IP protection.',
  },
  {
    icon: <EmojiEventsIcon color="primary" fontSize="large" />,
    title: 'World-Class Work Ethic',
    description:
      'Experience transparency, accountability, and excellence. Our team ensures proactive communication, meticulous quality, and solution-oriented delivery with professionalism.',
  },
  {
    icon: <GroupsIcon color="primary" fontSize="large" />,
    title: 'Access to Top Talent & Innovation',
    description:
      'We invest in training and emerging tech to provide you with skilled digital experts and innovative solutions that future-proof your projects.',
  },
  {
    icon: <SyncAltIcon color="primary" fontSize="large" />,
    title: 'Flexible Working Models',
    description:
      'Adaptable engagement models — Dedicated Teams, Fixed-Price, or Time & Material — ensure seamless collaboration across time zones.',
  },
  {
    icon: <AttachMoneyIcon color="primary" fontSize="large" />,
    title: 'Transparent Value & Pricing',
    description:
      'Our pricing is clear and flexible. You’ll receive exceptional value with no hidden fees while optimizing your investment with total clarity.',
  },
];

const OurWorkEthics = () => {
  return (
    <Box sx={getWhiteWrapperStyle}>
         <Container sx={containerStyle}>
         <Typography sx={getH2Style}>
          Partnering with Octagon Coders: Your <Box component="br" sx={getBrStyle()} />Global Advantage
         </Typography>
         <Typography sx={{...getSubPStyle, color: "#00000"}}>
        Choosing an overseas development partner requires trust. Octagon Coders ensures seamless collaboration, uncompromising security, and exceptional <Box component="br" sx={getBrStyle()} />results for clients worldwide
         </Typography>
   

      <Grid container spacing={4} sx={{mt:4}}>
        {tiles.map((tile, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Box sx={tileWrapper}>
              <Box sx={iconBox}>{tile.icon}</Box>
              <Box>
                <Typography sx={tileTitle}>{tile.title}</Typography>
                <Typography sx={descStyle}>{tile.description}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      </Container>
    </Box>
  );
};

export default OurWorkEthics;
