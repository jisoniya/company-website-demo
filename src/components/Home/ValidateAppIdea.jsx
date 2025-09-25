import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
    getValidateDescriptionStyle,
    containerStyle,
    getBlueWrapperStyle,
    getH2Style,
    contactButton,
    iconWrapper,
} from '../style';

const ValidateAppIdea = () => {
    return (
        <Box sx={{ ...getBlueWrapperStyle(), textAlign: "center", position: "relative" }}>
            <Box sx={containerStyle()}>
                <Box
                    component="img"
                    src="/assets/images/left-doodle.svg"
                    sx={{
                        position: 'absolute',
                        left: 0,
                        bottom: 90,
                        // width: 60,
                        opacity: 0.8,
                    }}
                />

                <Box
                    component="img"
                    src="/assets/images/right-doodle.svg"
                    sx={{
                        position: 'absolute',
                        right: 50,
                        bottom: 80,
                        // width: 60,
                        opacity: 0.8,
                    }}
                />

                <Typography sx={{ ...getH2Style(), textAlign: "center" }}>
                    Validate Your App Idea with Our<br />Marketing Experts
                </Typography>
                <Typography sx={getValidateDescriptionStyle()}>
                    You’ve got a great MVP/product idea. Now, let’s make sure the market’s ready for it.<br />
                    Don’t let uncertainty derail your launch! Our marketing experts will swiftly evaluate your product’s market fit.
                </Typography>
                {/* <Button variant="contained" sx={getValidateButtonStyle()}>
                Validate Now
            </Button> */}
                  <Box sx={{ display:"flex",justifyContent:"center" }}>
                <Button sx={{...contactButton,borderColor:"#fff"}}>
                    <Typography sx={{ mr: 1 ,color:"#fff"}}> Validate Now</Typography>
                    <Box className="iconWrapper" sx={iconWrapper}>
                        <ArrowForwardIcon sx={{ fontSize: 18, color: '#fff' }} />
                    </Box>
                </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default ValidateAppIdea;
