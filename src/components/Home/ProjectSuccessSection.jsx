import React from 'react';
import { Box, Typography, Grid,Container } from '@mui/material';
import {
  getCardWrapperStyle,
  getCardBoxStyle,
  getCardBoxPrimaryStyle,
  getCardTitleStyle,
  getCardDescStyle,
  containerStyle,
  getWhiteWrapperStyle,
  getH2Style,
  getSubPStyle,
  getBrStyle,
} from '../style';

const cards = [
  {
    title: 'Analysis',
    desc: 'We gather precise requirements, define clear scope, and prevent scope creep.',
    type: 'primary',
  },
  {
    title: 'Resource Planning',
    desc: 'We assemble top-tier experts to build a scalable and robust product.',
  },
  {
    title: 'Costing',
    desc: 'We provide detailed cost estimates and optimize project expenses for maximum value.',
  },
  {
    title: 'Success Review',
    desc: 'We rigorously review Key Performance Indicators (KPIs) to consistently gauge project health and success.',
  },
  {
    title: 'Risk Management',
    desc: 'We proactively identify potential threats to ensure smooth development and launch.',
    type: 'primary',
  },
  {
    title: 'Change Management',
    desc: 'We implement structured change management processes to keep your projects on track and adaptable.',
  },
  {
    title: 'Project Reporting',
    desc: 'We deliver comprehensive project reports with detailed performance analysis.',
  },
  {
    title: 'Collaboration',
    desc: 'We utilize seamless tools for effective project collaboration and communication.',
    type: 'primary',
  },
];

const ProjectSuccessSection = () => {
  return (
    <Box sx={{...getWhiteWrapperStyle(),textAlign:"center"}}>
       <Container sx={containerStyle()}>
      <Typography sx={getH2Style()}>
        Ensuring Your Project Success at Every Step
      </Typography>
      <Typography sx={{...getSubPStyle(),color:"#000000"}}>
        From initial consultation to final delivery, we ensure every phase of your software development<Box component="br" sx={getBrStyle()} /> journey is smooth,
        strategic, and focused on your ROI. Get end-to-end support that keeps your<Box component="br" sx={getBrStyle()} /> projects on track and within budget.
      </Typography>

      <Grid container spacing={3} mt={4} display="flex" justifyContent="center">
        {cards.map((card, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx} >
            <Box sx={card.type === 'primary' ? getCardBoxPrimaryStyle() : getCardBoxStyle()}>
              <Typography sx={getCardTitleStyle(card.type)}>{card.title}</Typography>
              <Typography sx={getCardDescStyle(card.type)}>{card.desc}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
    </Box>
  );
};

export default ProjectSuccessSection;
