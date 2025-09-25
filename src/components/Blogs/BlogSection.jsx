import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import {
  blogCardStyle,
  blogContentStyle,
  blogTitleStyle,
  getH2Style,
} from '../style';

const BlogSection = ({ blogs = [] }) => {
  return (
    <>
      <Typography variant="h5" textAlign="center" sx={getH2Style()} my={6}>
        Our Blogs
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <Grid item xs={12} sm={6} md={4} key={blog._id}>
              <Box
                sx={blogCardStyle()}
                component={RouterLink}
                to={`/blog/${blog.slug}`}
              >
                <Box
                  component="img"
                  src={blog.featuredImage}
                  alt={blog.title}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <Box sx={blogContentStyle()}>
                  <Typography sx={blogTitleStyle()}>
                    {blog.title}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))
        ) : (
          <Typography variant="body2" textAlign="center">No blogs found.</Typography>
        )}
      </Grid>
    </>
  );
};

export default BlogSection;


// import React, { useEffect, useState } from 'react';
// import { Box, Typography, Button, Grid } from '@mui/material';
// import { Link as RouterLink } from "react-router-dom";
// import {
//   blogCardStyle,
//   blogImageStyle,
//   blogContentStyle,
//   blogTitleStyle,
//   blogDescriptionStyle,
//   blogButtonStyle,
//   getH2Style,
// } from '../style';
// import apiUrl from '../../common';

// const BlogSection = () => {
//     const [publishedBlogs, setPublishedBlogs] = useState([]);

//     useEffect(() => {
//       const fetchPublishedBlogs = async () => {
//         try {
//           const response = await axios.get(`${apiUrl}/getBlogData?nocache=${new Date().getTime()}`);
//           if (response.status === 200) {
//             const published = response.data.blogs.filter(blog => blog.published);
//             setPublishedBlogs(published);
//           }
//         } catch (error) {
//           console.error("Error fetching published blogs:", error);
//         }
//       };
//       fetchPublishedBlogs();
//     }, []);
//   return (
 
//       <>
//         <Typography variant="h5" textAlign="center" sx={getH2Style()} my={6}>
//           Our Blogs
//         </Typography>
//         <Grid container spacing={3} justifyContent="center">
//             {publishedBlogs.map((blog) => (
//                   <Grid item xs={12} sm={6} md={4} key={blog._id}>
//               <Box sx={blogCardStyle()} component={RouterLink} to={`/blog/${blog.slug}`}>
//                 <Box component="image"  src={blog.featuredImage}
//                           alt={blog.title}
//                           style={{ maxWidth: "100%", height: "auto" }} />
//                 <Box sx={blogContentStyle()}>
//                   <Typography sx={blogTitleStyle()}> {blog.title}</Typography>
//                   {/* <Typography sx={blogDescriptionStyle()}>{blog.description}</Typography> */}
//                 </Box>
//                 {/* <Box sx={{ px: 2, pb: 2 }}>
//                   <Button size="small" sx={blogButtonStyle()}>
//                     Read More
//                   </Button>
//                 </Box> */}
//               </Box>
//             </Grid>
//           ))}
//         </Grid>
//       </>
//   );
// };

// export default BlogSection;
