import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Container,
  Stack, Button
} from '@mui/material';

import {
  getLeftWrapper,
  getWhiteBoxStyle,
  getRadioGroupStyle,
  getRadioLabelStyle,
  getStartupTitleStyle,
  getImageWrapperStyle,
  containerStyle,
  getBlueWrapperStyle,
  getH2Style,
  getSubPStyle,
} from '../style';
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ApartmentIcon from "@mui/icons-material/Apartment";
import GroupsIcon from "@mui/icons-material/Groups";

const WeWorkWithSection = () => {
  const [selected, setSelected] = useState("Startups");


  
  const content = {
    Startups: {
      title: "Start up ",
      description:
        "We help startup to build their market & investor ready products, so that they can accelerate their growth in this extreme competitive environment ",
      items: [
        "Product Discovery",
        "Product Development",
        "MVP Development",
        "Idea Evaluation",
      ],
    },
    Enterprises: {
      title: "Enterprises",
      description:
        "We empower enterprises to scale innovation, optimize processes, and drive efficiency with modern digital solutions.",
      items: [
        "Enterprise Software",
        "Legacy Modernization",
        "Cloud Migration",
        "Dedicated Teams",
      ],
    },
    Agencies: {
      title: "Agencies",
      description:
        "We partner with agencies to deliver exceptional digital products and experiences for their clients.",
      items: [
        "White-label Solutions",
        "Team Augmentation",
        "UX/UI Design",
        "Consulting Services",
      ],
    },
  };

  const current = content[selected];
  return (
    <Box sx={getBlueWrapperStyle()}>
      <Container sx={containerStyle()}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Box sx={getLeftWrapper()}>
              <Box>
                <Typography sx={getH2Style()}>We Work With</Typography>

                <Typography sx={getSubPStyle()}>
                  "We empower startups, enterprises, and agencies to boost their tech portfolio and improve profitability
                  with tailored software engineering and IT solutions."
                </Typography>
              </Box>
              {/* Buttons */}
              <Box sx={getWhiteBoxStyle()} >
                <Stack direction="row" spacing={2} >
                  <Button
                    variant={selected === "Startups" ? "contained" : "contained"}
                    startIcon={<BusinessCenterIcon />}
                    onClick={() => setSelected("Startups")}
                    sx={{
                      textTransform: "none",
                      backgroundColor:
                        selected === "Startups" ? "#1A237E" : "transparent",


                      color: selected === "Startups" ? "#fff" : "#000",
                      "&:hover": {
                        backgroundColor:
                          selected === "Startups" ? "#283593" : "#f5f5f5",
                      },
                    }}
                  >
                    Startups
                  </Button>
                  <Button
                    variant={selected === "Enterprises" ? "contained" : "contained"}
                    startIcon={<ApartmentIcon />}
                    onClick={() => setSelected("Enterprises")}
                    sx={{
                      textTransform: "none",
                      backgroundColor:
                        selected === "Enterprises" ? "#1A237E" : "transparent",
                      color: selected === "Enterprises" ? "#fff" : "#000",
                      "&:hover": {
                        backgroundColor:
                          selected === "Enterprises" ? "#283593" : "#f5f5f5",
                      },
                    }}
                  >
                    Enterprises
                  </Button>
                  <Button
                    variant={selected === "Agencies" ? "contained" : "contained"}
                    startIcon={<GroupsIcon />}
                    onClick={() => setSelected("Agencies")}
                    sx={{
                      textTransform: "none",
                      backgroundColor:
                        selected === "Agencies" ? "#1A237E" : "transparent",
                      color: selected === "Agencies" ? "#fff" : "#000",
                      "&:hover": {
                        backgroundColor:
                          selected === "Agencies" ? "#283593" : "#f5f5f5",
                      },
                    }}
                  >
                    Agencies
                  </Button>
                </Stack>
              </Box>

              <Typography
                variant="subtitle1"
                fontWeight={600}
                sx={{ color: "#ffffff", mb: 1 }}
              >
                {current.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#fffff",
                  mb: 2,
                  maxWidth: 550,
                  lineHeight: 1.6,
                }}

                
              >
                {current.description}
              </Typography>

              <Stack
                direction="row"
                spacing={4}
                flexWrap="wrap"
                useFlexGap
                rowGap={1}
              >
                {current.items.map((item) => (
                  <Stack
                    key={item}
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    sx={{ minWidth: 200 }}
                  >
                    <Box
                      sx={{
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        backgroundColor: "#FFC107",
                      }}
                    />
                    <Typography variant="body2">{item}</Typography>
                  </Stack>
                ))}
              </Stack>

            </Box>
            </Grid>


          {/* Right Image */}
          <Grid item xs={12} md={6} textAlign="center" order={{ xs: 1, md: 2 }}>
            <Box component="img" src="/assets/images/work-img.svg" alt="girl" sx={getImageWrapperStyle()} />

          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default WeWorkWithSection;


























