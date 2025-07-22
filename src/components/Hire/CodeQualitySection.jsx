import React, { useState } from 'react';
import { Box, Typography, Grid, Container, Collapse } from '@mui/material';
import {
    leftTextWrapper,
    checklistBox,
    listItem,
    imageStyle,
    getH2Style,
    getSubPStyle,
    containerStyle,
    getWhiteWrapperStyle,
    blackCard,
    collapsibleTitle,
    collapsibleContent,
} from '../style';

const items = [
    {
        title: 'Upholding Coding Best Practices',
        content:
            'We follow consistent naming conventions, modular architecture, and clean code principles to ensure long-term maintainability.',
    },
    {
        title: 'Rigorous Unit Testing',
        content:
            'We write unit tests for core functionalities using modern frameworks like Jest and Mocha to catch regressions early.',
    },
    {
        title: 'Effective Code Review Practices',
        content:
            'Every code change goes through peer review to ensure quality, catch bugs, and share knowledge across the team.',
    },
    {
        title: 'Actionable Code Quality Metrics',
        content: (
            <ul style={{ paddingLeft: '1rem', color: '#ccc', marginTop: 8 }}>
                <li>
                    <strong>Complexity Metrics:</strong> Adopting measures to identify overly complex code,
                    aiming for simplicity and readability to ease maintenance and testing.
                </li>
                <li style={{ marginTop: 8 }}>
                    <strong>Technical Debt Tracking:</strong> Quantifying the cost of rework (quick fixes vs. proper solutions)
                    to guide our teams toward sustainable, long-term code health.
                </li>
            </ul>
        ),
    },
];

const CodeQualitySection = () => {
   const [openIndex, setOpenIndex] = useState(3);
   
const handleToggle = (index) => {
    if (index === openIndex) return;
    setOpenIndex(index);
};

    return (
        <Box sx={{ ...getWhiteWrapperStyle(), textAlign: "left", pt: { xs: 6, md: "2%" }, }}>
            <Container sx={containerStyle()}>
                <Grid container spacing={4} >
                    {/* Left Content */}
                    <Grid item xs={12} md={6}>
                        <Box sx={leftTextWrapper}>
                            <Typography component="h2" sx={getH2Style}>
                                How do we ensure the <br />
                                <Box component="span">code quality?</Box>
                            </Typography>
                               <Typography sx={{...getSubPStyle(),color:"#000000"}}>
                                At Octagon Coders, code quality isn’t just a buzzword – it’s the bedrock of our development
                                process. We implement rigorous testing, detailed reviews, and industry-best practices to
                                deliver software that truly excels in both functionality and longevity.
                            </Typography>

                            <Box sx={imageStyle}>
                                <img
                                    src="/assets/images/code-img.svg"
                                    alt="Code Quality"
                                    width="100%"
                                />
                            </Box>
                        </Box>
                    </Grid>

                    {/* Right Content */}
                    <Grid item xs={12} md={6} sx={{backgroundColor:"#000000"}}>
                        <Box sx={blackCard}>
                            {items.map((item, idx) => (
                                <Box key={idx} sx={{ mb: 2 }}>
                                    <Box
                                        sx={collapsibleTitle}
                                        onClick={() => handleToggle(idx)}
                                    >
                                        {item.title}
                                    </Box>
                                    <Collapse in={openIndex === idx}>
                                        <Box sx={collapsibleContent}>{item.content}</Box>
                                    </Collapse>
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default CodeQualitySection;
