import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import {
  blogCardStyle,
  blogImageStyle,
  blogContentStyle,
  blogTitleStyle,
  blogDescriptionStyle,
  blogButtonStyle,
  containerStyle,
  getBlackWrapperStyle,
  getH2Style,
} from '../style';

const blogData = [
  {
    title: 'Crypto Banking Software Vs. Traditional Banking Apps: Which Wins In 2025?',
    description: 'Masai does a great job of attracting ambitious folk and it shows in the hunger with which the grads',
    image: '/placeholder.jpg',
  },
  {
    title: 'Crypto Banking Software Vs. Traditional Banking Apps: Which Wins In 2025?',
    description: 'Masai does a great job of attracting ambitious folk and it shows in the hunger with which the grads',
    image: '/placeholder.jpg',
  },
  {
    title: 'Crypto Banking Software Vs. Traditional Banking Apps: Which Wins In 2025?',
    description: 'Masai does a great job of attracting ambitious folk and it shows in the hunger with which the grads',
    image: '/placeholder.jpg',
  },
];

const BlogSection = () => {
  return (
    <Box sx={getBlackWrapperStyle()}>
 <Box sx={containerStyle()}>
      <Typography variant="h5" textAlign="center" sx={getH2Style()} mb={6}>
        Our Blogs
      </Typography> <Grid container spacing={3} justifyContent="center">
        {blogData.map((blog, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Box sx={blogCardStyle()}>
              <Box sx={blogImageStyle(blog.image)} />
              <Box sx={blogContentStyle()}>
                <Typography sx={blogTitleStyle()}>{blog.title}</Typography>
                <Typography sx={blogDescriptionStyle()}>{blog.description}</Typography>
              </Box>
              <Box sx={{ px: 2, pb: 2 }}>
                <Button size="small" sx={blogButtonStyle()}>
                  Read More
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
    </Box>
  );
};

export default BlogSection;
