import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {
  Title,
  Subtitle,
  SearchContainer,
  StyledInput,
  StyledButton,
  ArrowGraphic,
  FeaturedIn,
  LogoRow,
  LogoImage,
  getWhiteWrapperStyle,
  containerStyle,
  getH2Style,
} from '../style';
import BlogSection from './BlogSection';
import ContactSection from '../Home/ContactSection';
import RecentPosts from './RecentPosts';
import axios from 'axios';
import apiUrl from '../../common';

const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [publishedBlogs, setPublishedBlogs] = useState([]);
  const [logos, setLogos] = useState([
    // Replace with actual logo paths
    '/images/logo1.png',
    '/images/logo2.png',
    '/images/logo3.png',
  ]);

  useEffect(() => {
    const fetchPublishedBlogs = async () => {
      try {
        const response = await axios.get(`${apiUrl}/getBlogData?nocache=${new Date().getTime()}`);
        if (response.status === 200) {
          const published = response.data.blogs.filter(blog => blog.published);
          setPublishedBlogs(published);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchPublishedBlogs();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredBlogs = publishedBlogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery)
  );

  return (
    <>
      <Box sx={getWhiteWrapperStyle()}>
        <Container sx={containerStyle()}>
          <Grid container spacing={1}>
            {/* Blog List */}
            <Grid item xs={12} md={9}>
              <Typography variant="h1" sx={getH2Style()} my={2}>
                Software Innovation Starts Here
              </Typography>

              <Subtitle>
                Tap into the power of our top 1% software engineers and 675+ digital transformation experts.
                <br />
                Get insights to drive your business forward in today’s competitive landscape.
              </Subtitle>

              <ArrowGraphic />

              <SearchContainer>
                <StyledInput
                  placeholder="Search the blog..."
                  variant="outlined"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <StyledButton endIcon={<SearchIcon />}>Search</StyledButton>
              </SearchContainer>

              <Box mt={5}>
                <FeaturedIn>Featured In</FeaturedIn>
                <LogoRow>
                  {logos.map((src, i) => (
                    <LogoImage key={i} src={src} alt={`logo-${i}`} />
                  ))}
                </LogoRow>
              </Box>

              <BlogSection blogs={filteredBlogs} />
            </Grid>

            {/* Vertical Divider */}
            <Grid
              item
              xs={12}
              md={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Divider
                orientation="vertical"
                flexItem
                sx={{ height: "70vh", borderRightWidth: 2, display: { xs: "none", md: "block" } }}
              />
            </Grid>

            {/* Sidebar - Recent Posts */}
            <Grid item xs={12} md={2}>
              <RecentPosts recentBlogs={publishedBlogs.slice(-2)} />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <ContactSection />
    </>
  );
};

export default Blogs;

// import React, { useState } from 'react';
// import { Box, Container, Grid, Typography, Divider } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import {
//   Subtitle,
//   SearchContainer,
//   StyledInput,
//   StyledButton,
//   ArrowGraphic,
//   FeaturedIn,
//   LogoRow,
//   LogoImage,
//   getWhiteWrapperStyle,
//   containerStyle,
//   getH2Style,
// } from '../style';
// import BlogSection from './BlogSection';
// import ContactSection from '../Home/ContactSection';
// import RecentPosts from './RecentPosts';

// //  Dummy logos
// const dummyLogos = [
//   "https://via.placeholder.com/100x40?text=Logo1",
//   "https://via.placeholder.com/100x40?text=Logo2",
//   "https://via.placeholder.com/100x40?text=Logo3",
// ];

// //  Dummy blogs
// const dummyBlogs = [
//   {
//     _id: "1",
//     title: "The Future of AI in Software",
//     slug: "future-of-ai",
//     featuredImage: "https://imgs.search.brave.com/yIL9KZAK2tGENlaeeXr9Kw6yu6lpFi-fTOX6x1WM16U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9sZXR0ZXItcy1m/cm9tLWdvbGQtc2ls/dmVyLXN0YXJzLTNk/LXJlbmRlcmluZ184/MDgzMzctNDAwNy5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw/JnE9ODA",
//     published: true,
//   },
//   {
//     _id: "2",
//     title: "Top 10 Cloud Strategies for 2025",
//     slug: "cloud-strategies-2025",
//     featuredImage: "https://imgs.search.brave.com/yIL9KZAK2tGENlaeeXr9Kw6yu6lpFi-fTOX6x1WM16U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9sZXR0ZXItcy1m/cm9tLWdvbGQtc2ls/dmVyLXN0YXJzLTNk/LXJlbmRlcmluZ184/MDgzMzctNDAwNy5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw/JnE9ODA",
//     published: true,
//   },
//   {
//     _id: "3",
//     title: "Why Cybersecurity Is More Important Than Ever",
//     slug: "cybersecurity-importance",
//     featuredImage: "https://imgs.search.brave.com/yIL9KZAK2tGENlaeeXr9Kw6yu6lpFi-fTOX6x1WM16U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9sZXR0ZXItcy1m/cm9tLWdvbGQtc2ls/dmVyLXN0YXJzLTNk/LXJlbmRlcmluZ184/MDgzMzctNDAwNy5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw/JnE9ODA",
//     published: true,
//   },
// ];

// const Blogs = () => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value.toLowerCase());
//   };

//   const filteredBlogs = dummyBlogs.filter((blog) =>
//     blog.title.toLowerCase().includes(searchQuery)
//   );

//   return (
//     <>
//       <Box sx={getWhiteWrapperStyle()}>
//         <Container sx={containerStyle()}>
//           <Grid container spacing={1}>
//             {/* Blog List */}
//             <Grid item xs={12} md={9}>
//               <Typography variant="h1" sx={getH2Style()} my={2}>
//                 Software Innovation Starts Here
//               </Typography>

//               <Subtitle>
//                 Tap into the power of our top 1% software engineers and 675+ digital transformation experts.
//                 <br />
//                 Get insights to drive your business forward in today’s competitive landscape.
//               </Subtitle>

//               <ArrowGraphic />

//               {/* Search Bar */}
//               <SearchContainer>
//                 <StyledInput
//                   placeholder="Search the blog..."
//                   variant="outlined"
//                   value={searchQuery}
//                   onChange={handleSearchChange}
//                 />
//                 <StyledButton endIcon={<SearchIcon />}>Search</StyledButton>
//               </SearchContainer>

//               {/* Logos */}
//               <Box mt={5}>
//                 <FeaturedIn>Featured In</FeaturedIn>
//                 <LogoRow>
//                   {dummyLogos.map((src, i) => (
//                     <LogoImage key={i} src={src} alt={`logo-${i}`} />
//                   ))}
//                 </LogoRow>
//               </Box>

//               <BlogSection blogs={filteredBlogs} />
//             </Grid>

//             {/* Vertical Divider */}
//             <Grid
//               item
//               xs={12}
//               md={1}
//               sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
//             >
//               <Divider
//                 orientation="vertical"
//                 flexItem
//                 sx={{ height: "70vh", borderRightWidth: 2, display: { xs: "none", md: "block" } }}
//               />
//             </Grid>

//             {/* Sidebar - Recent Posts */}
//             <Grid item xs={12} md={2}>
//               <RecentPosts recentBlogs={dummyBlogs.slice(-2)} />
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>
//       <ContactSection />
//     </>
//   );
// };

// export default Blogs;



// import React, { useState } from 'react';
// import { Box, Container, Grid, Typography, } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import {
//   HeroWrapper,
//   Title,
//   Subtitle,
//   SearchContainer,
//   StyledInput,
//   StyledButton,
//   ArrowGraphic,
//   FeaturedIn,
//   LogoRow,
//   LogoImage,
//   getWhiteWrapperStyle,
//   containerStyle,
//   getH2Style,
// } from '../style';
// import BlogSection from './BlogSection';
// import ContactSection from '../Home/ContactSection';
// import RecentPosts from './RecentPosts';




// const Blogs = () => {
//   const [searchQuery, setSearchQuery] = useState('');


//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value.toLowerCase());
//   };

//   const filteredBlogs = allBlogs.filter((blog) =>
//     blog.title.toLowerCase().includes(searchQuery)
//   );





//   return (
//     <>
//       <Box sx={getWhiteWrapperStyle()}>
//         <Container sx={containerStyle()}>
//           <Grid container spacing={1}>
//             {/* Blog List */}
//             <Grid item xs={12} md={9}>
//               <Typography variant="h1" sx={getH2Style()} my={2}>Software Innovation Starts Here</Typography>

//               <Subtitle>
//                 Tap into the power of our top 1% software engineers and 675+ digital transformation experts.
//                 <br />
//                 Get insights to drive your business forward in today’s competitive landscape.
//               </Subtitle>

//               <ArrowGraphic />

//               <SearchContainer>
//                 <StyledInput
//                   placeholder="Search the blog..."
//                   variant="outlined"
//                   value={searchQuery}
//                   onChange={handleSearchChange}
//                 />
//                 <StyledButton endIcon={<SearchIcon />}>Search</StyledButton>
//               </SearchContainer>

//               <Box mt={5}>
//                 <FeaturedIn>Featured In</FeaturedIn>
//                 <LogoRow>
//                   {logos.map((src, i) => (
//                     <LogoImage key={i} src={src} alt={`logo-${i}`} />
//                   ))}
//                 </LogoRow>
//               </Box>


//               <BlogSection blogs={filteredBlogs} />
//             </Grid>
//               {/* Vertical Divider */}
//             <Grid
//               item
//               xs={12}
//               md={1}
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 height: "100%",
//               }}
//             >
//               <Divider
//                 orientation="vertical"
//                 flexItem
//                 sx={{ height: "70vh", borderRightWidth: 2, display: { xs: "none", md: "block" } }}
//               />
//             </Grid>

//             {/* Sidebar - Recent Posts */}
//             <Grid item xs={12} md={2}>
//               {/* Recent Posts (Ensured it never gets undefined) */}
//               <RecentPosts recentBlogs={publishedBlogs.length > 1 ? publishedBlogs.slice(-2) : publishedBlogs} />
//             </Grid>
//           </Grid>
//         </Container>

//       </Box>
//       <ContactSection />
//     </>
//   );
// };

// export default Blogs;
