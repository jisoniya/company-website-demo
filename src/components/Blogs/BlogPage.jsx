// import React, { useEffect, useState } from "react";
// import { Box, Typography, Container, Divider, Grid, Chip } from "@mui/material";
// import { useParams, useNavigate } from "react-router-dom";
// import SocialShare from "./SocialShare";
// import RecentPosts from "./RecentPosts";
// import { blogBanner, containerStyle, serviceTitle } from "../style";

// //  Dummy Blogs
// const dummyBlogs = [
//   {
//     _id: "1",
//     slug: "future-of-ai",
//     title: "The Future of AI in Software",
//     featuredImage: "https://imgs.search.brave.com/yIL9KZAK2tGENlaeeXr9Kw6yu6lpFi-fTOX6x1WM16U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9sZXR0ZXItcy1m/cm9tLWdvbGQtc2ls/dmVyLXN0YXJzLTNk/LXJlbmRlcmluZ184/MDgzMzctNDAwNy5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw/JnE9ODA",
//     content: "<p>Artificial Intelligence (AI) is reshaping the software industry with automation, machine learning, and intelligent systems. Companies adopting AI can significantly cut costs while boosting efficiency.</p><h2>Why AI Matters</h2><ul><li>Boosts productivity</li><li>Improves decision-making</li><li>Reduces human error</li></ul>",
//     blogImages: [
//       "https://via.placeholder.com/150?text=AI+1",
//       "https://via.placeholder.com/150?text=AI+2",
//     ],
//     tags: ["AI", "Software", "Innovation"],
//     published: true,
//   },
//   {
//     _id: "2",
//     slug: "cloud-strategies-2025",
//     title: "Top 10 Cloud Strategies for 2025",
//     featuredImage: "https://via.placeholder.com/800x400?text=Cloud+Blog",
//     content: "<p>Cloud computing continues to evolve. Here are the top strategies for enterprises in 2025 to stay ahead.</p>",
//     tags: ["Cloud", "Strategy", "Technology"],
//     published: true,
//   },
//   {
//     _id: "3",
//     slug: "cybersecurity-importance",
//     title: "Why Cybersecurity Is More Important Than Ever",
//     featuredImage: "https://via.placeholder.com/800x400?text=Security+Blog",
//     content: "<p>With increasing digital threats, cybersecurity remains a top priority for businesses worldwide.</p>",
//     tags: ["Cybersecurity", "IT", "Data Protection"],
//     published: true,
//   },
// ];

// const BlogPage = () => {
//   const { slug } = useParams();
//   const [blog, setBlog] = useState(null);
//   const [publishedBlogs, setPublishedBlogs] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // ✅ For testing, just set dummy blogs
//     setPublishedBlogs(dummyBlogs);

//     // Find blog by slug
//     const foundBlog = dummyBlogs.find((b) => b.slug === slug);
//     if (foundBlog) {
//       setBlog(foundBlog);
//     } else {
//       console.warn("No blog found for slug:", slug);
//       navigate("/blogs"); // fallback if slug invalid
//     }
//   }, [slug, navigate]);

//   return (
//     <Box
//       sx={{
//         paddingTop: "5%",
//         px: { xs: 0, md: 0 },
//         backgroundColor: "#EFEFEF",
//       }}
//     >
//       {/* Banner Section */}
//       <Box sx={{ paddingTop: "3%", paddingBottom: "6%", backgroundColor: "#FFFFFF" }}>
//         <Container sx={containerStyle}>
//           <Box>
//             <Grid container spacing={2}>
//               {/* Blog Content Section */}
//               <Grid item xs={12} md={9} spacing={4}>
//                 {/* Featured Image */}
//                 {blog?.featuredImage && (
//                   <img
//                     width="100%"
//                     src={blog.featuredImage}
//                     alt="Featured Blog"
//                     style={blogBanner}
//                     loading="lazy"
//                   />
//                 )}

//                 {/* Blog Title */}
//                 <Typography variant="h1" sx={serviceTitle}>
//                   {blog?.title || "Loading..."}
//                 </Typography>

//                 {/* Blog Content */}
//                 <Box
//                   className="blog-content"
//                   sx={{
//                     textAlign: "left",
//                     mt: 2,
//                     "& h2": {
//                       fontSize: "32px !important",
//                       "@media (max-width: 768px)": { fontSize: "28px !important" },
//                       "@media (max-width: 480px)": { fontSize: "24px !important" },
//                       "@media (max-width: 360px)": { fontSize: "20px !important" },
//                     },
//                     "& li": {
//                       paddingBottom: "14px !important",
//                       "@media (max-width: 768px)": { paddingBottom: "12px !important" },
//                       "@media (max-width: 480px)": { paddingBottom: "10px !important" },
//                       "@media (max-width: 360px)": { paddingBottom: "8px !important" },
//                     },
//                   }}
//                   dangerouslySetInnerHTML={{ __html: blog?.content || "" }}
//                 />

//                 {/* Blog Images */}
//                 {blog?.blogImages?.length > 0 && (
//                   <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px", mt: 3 }}>
//                     {blog.blogImages.map((image, index) => (
//                       <img
//                         key={index}
//                         src={image}
//                         alt={`Blog ${index + 1}`}
//                         style={{ width: "100px", height: "100px", borderRadius: "8px" }}
//                       />
//                     ))}
//                   </Box>
//                 )}

//                 {/* Tags */}
//                 {blog?.tags && (
//                   <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px", mt: 3 }}>
//                     {blog.tags.map((tag, index) => (
//                       <Chip key={index} label={tag} sx={{ marginRight: 1, marginBottom: 1 }} />
//                     ))}
//                   </Box>
//                 )}
//               </Grid>

//               {/* Vertical Divider */}
//               <Grid
//                 item
//                 xs={12}
//                 md={1}
//                 sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}
//               >
//                 <Divider
//                   orientation="vertical"
//                   flexItem
//                   sx={{ height: "200vh", borderRightWidth: 2, display: { xs: "none", md: "block" } }}
//                 />
//               </Grid>

//               {/* Sidebar */}
//               <Grid item xs={12} md={2}>
//                 <Box sx={{ mt: 4 }}>
//                   <SocialShare
//                     isBlogPage={true}
//                     blogUrl={`${window.location.origin}/blog/${slug}`}
//                     blogTitle={blog?.title || ""}
//                   />
//                 </Box>
//                 <RecentPosts recentBlogs={publishedBlogs.filter((b) => b.slug !== slug).slice(-2)} />
//               </Grid>
//             </Grid>
//           </Box>
//         </Container>
//       </Box>
//     </Box>
//   );
// };

// export default BlogPage;


import React, { useEffect, useState } from "react";
import { Box, Typography, Container, Divider, Grid, Chip } from "@mui/material";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import SocialShare from "./SocialShare";
import RecentPosts from "./RecentPosts";
import { blogBanner, containerStyle, serviceTitle } from "../style";
import apiUrl from '../../common';

const BlogPage = ({ currentBlog, allBlogs }) => {
  const { slug } = useParams(); // Get blog ID from the URL
  const [blog, setBlog] = useState(null);
  const [publishedBlogs, setPublishedBlogs] = useState([]); // Store all published blogs
  const navigate = useNavigate();


  // useEffect(() => {
  //   const fetchBlogById = async () => {
  //     try {
  //       const response = await axios.get(`${apiUrl}/getBlogData?nocache=${Date.now()}`);
  //       if (response.status === 200) {
  //         const published = response.data.blogs.filter(blog => blog.published);
  //         setPublishedBlogs(published); // Store published blogs

  //         // Find the selected blog
  //         const foundBlog = published.find(b => b._id === id);
  //         setBlog(foundBlog || {}); // Instead of `null`, set an empty object
  //       }
  //     } catch (error) {
  //       console.error("Error fetching blog:", error);
  //     }
  //   };
  //   fetchBlogById();
  // }, [id]);
  useEffect(() => {
    const fetchBlogBySlug = async () => {
      try {
        const response = await axios.get(`${apiUrl}/getBlogData?nocache=${Date.now()}`);
        if (response.status === 200) {
          const published = response.data.blogs.filter(blog => blog.published);
          setPublishedBlogs(published);

          const foundBlog = published.find(b => b.slug === slug);
          if (foundBlog) {
            setBlog(foundBlog);
          } else {
            console.warn("No blog found for slug:", slug);
          }
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlogBySlug();
  }, [slug]);

  // const recentPosts = useMemo(() => {
  //   return publishedBlogs.filter(b => b.slug !== slug).slice(-2);
  // }, [publishedBlogs, slug]);

useEffect(() => {
  if (slug && publishedBlogs.length > 0 && !blog) {
    navigate("/blogs");
  }
}, [slug, blog, publishedBlogs, navigate]);

  return (
    <Box
      sx={{
        paddingTop: "5%",
        px: { xs: 0, md: 0 },
        backgroundColor: "#EFEFEF",
      }}
    >

      {/* Banner Section */}
      <Box
        sx={{
          paddingTop: "3%",
          paddingBottom: "6%",
          backgroundColor: "#FFFFFF",
        }}

      >
        <Container sx={containerStyle}>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={9} spacing={4}>
                {/* Featured Image */}
                {blog?.featuredImage && (
                  <img width="100%"
                    src={blog.featuredImage}
                    alt="Featured Blog"
                    style={blogBanner}
                    loading="lazy"
                  />
                )}

                {/* Blog Title */}
                <Typography variant="h1" sx={serviceTitle}>
                  {blog?.title || "Loading..."}
                </Typography>

                {/* Blog Content */}
                <Box
                  className="blog-content"
                  sx={{
                    textAlign: "left",
                    mt: 2,
                    "& h2": {
                      fontSize: "32px !important", // Default for large screens
                      "@media (max-width: 768px)": { fontSize: "28px !important" }, // Tablets
                      "@media (max-width: 480px)": { fontSize: "24px !important" }, // Small screens
                      "@media (max-width: 360px)": { fontSize: "20px !important" }, // Extra small screens
                    },
                    "& li": {
                      paddingBottom: "14px !important", // Default
                      "@media (max-width: 768px)": { paddingBottom: "12px !important" },
                      "@media (max-width: 480px)": { paddingBottom: "10px !important" },
                      "@media (max-width: 360px)": { paddingBottom: "8px !important" },
                    },
                  }}
                  dangerouslySetInnerHTML={{ __html: blog?.content || "" }}
                />


                {/* Blog Images */}
                {blog?.blogImages?.length > 0 && (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px", mt: 3 }}>
                    {blog.blogImages.map((image, index) => (
                      <img key={index} src={image} alt={`Blog ${index + 1}`} style={{ width: "100px", height: "100px", borderRadius: "8px" }} />
                    ))}
                  </Box>
                )}

                {/* Display Tags */}
                {/* {selectedTag && (
                  <Box sx={{ marginTop: 2 }}>
                    <Chip label={selectedTag} sx={{ marginRight: 1, marginBottom: 1 }} />
                  </Box>
                )} */}
                {/* Display Tags */}
                {blog?.tags && (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px", mt: 3 }}>
                    {(() => {
                      try {
                        // Ensure tags are properly parsed
                        let parsedTags = Array.isArray(blog.tags)
                          ? blog.tags // Already an array, use as is
                          : JSON.parse(blog.tags); // Parse if it's a stringified array

                        return parsedTags.map((tag, index) => (
                          <Chip
                            key={index}
                            label={typeof tag === "string" ? tag.replace(/["[\]]/g, '') : tag}
                            sx={{ marginRight: 1, marginBottom: 1 }}
                          />
                        ));
                      } catch (error) {
                        console.error("Error parsing tags:", error);
                        return null;
                      }
                    })()}
                  </Box>
                )}




              </Grid>

              {/* Vertical Divider */}
              <Grid item xs={12} md={1} sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                <Divider orientation="vertical" flexItem sx={{ height: "200vh", borderRightWidth: 2, display: { xs: "none", md: "block" } }} />
              </Grid>

              {/* Sidebar with Social Share & Recent Posts */}
              <Grid item xs={12} md={2}>
                <Box sx={{ mt: 4 }}>
                  <SocialShare
                    isBlogPage={true}
                    blogUrl={`${window.location.origin}/blog/${slug}`}
                    blogTitle={blog?.title || ""}
                  />
                </Box>
                <RecentPosts recentBlogs={publishedBlogs.length > 1 ? publishedBlogs.slice(-2) : publishedBlogs} />
                {/* {blog && Object.keys(blog).length > 0 && <RelatedPost currentBlog={blog} allBlogs={publishedBlogs} />} */}

              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default BlogPage;
