import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const RecentPosts = ({ recentBlogs = [] }) => {
  return (
    <Box>
      <Typography
        variant="h6"
        sx={{ fontWeight: 500, my: 2, fontFamily: "Bakbak One, serif" }}
      >
        Latest Posts
      </Typography>
      <Grid container spacing={2}>
        {recentBlogs.length > 0 ? (
          recentBlogs.map((blog) => (
            <Grid
              item
              xs={12}
              key={blog._id}
              component={RouterLink}
              to={`/blog/${blog.slug}`}
            >
              <Box
                sx={{
                  textAlign: "center",
                  borderRadius: "3px",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#fff",
                  overflow: "hidden",
                }}
              >
                {/* Image */}
                <Box
                  component="img"
                  src={blog.featuredImage}
                  alt={blog.title}
                  sx={{ width: "100%", height: "144px", objectFit: "cover" }}
                />

                {/* Title */}
                <Box sx={{ p: 1 }}>
                  <Typography variant="body1" sx={{ fontWeight: "bold", fontSize: "14px" }}>
                    {blog.title}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))
        ) : (
          <Typography variant="body2">No recent posts available.</Typography>
        )}
      </Grid>
    </Box>
  );
};

export default RecentPosts;


// import React from "react";
// import { Box, Typography, Grid } from "@mui/material";
// import { Link as RouterLink } from "react-router-dom";

// const RecentPosts = ({ recentBlogs }) => {
//   return (
//     <Box>
//       <Typography
//         variant="h6"
//         sx={{
//           fontWeight: 500,
//           my: 2,
//           fontFamily: "Bakbak One, serif",
//         }}
//       >
//         Latest Posts
//       </Typography>
//       <Grid container spacing={2}>
//       {recentBlogs.length > 0 ? (
//           recentBlogs.map((blog) => (
//           <Grid item xs={12} sm={12} md={12} key={blog._id} component={RouterLink} to={`/blog/${blog.slug}`}>
         
//               <Box
//                 sx={{
//                   textAlign: "center",
//                   borderRadius: "3px",
//                   boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
//                   backgroundColor: "#fff",
//                   overflow: "hidden",
//                 }}
//               >
//                 {/*  Image Section */}
//                 <Box sx={{ display: "block" }}>
//                   <Box
//                     component="image"
//                     src={blog.featuredImage}
//                     alt={blog.title}
//                     sx={{
//                       width: "auto",
//                       height: "144px",
//                       objectFit: "cover",
//                     }}
//                   />
//                 </Box>

//                 {/*  Content Section */}
//                 <Box sx={{ p: 1 }}>
//                   <Typography variant="body1" sx={{ fontWeight: "bold", fontSize: "14px" }}>
//                     {blog.title}
//                   </Typography>
//                 </Box>
//               </Box>
//           </Grid>
//            ))
//           ) : (
//             <Typography variant="body2">No recent posts available.</Typography>
//           )}
//       </Grid>
//     </Box>
//   );
// };

// export default RecentPosts;

