import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  IconButton,
  Paper,
  Chip,
} from "@mui/material";
import LocalPhoneOutlined from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import PhoneIphoneOutlined from "@mui/icons-material/PhoneIphoneOutlined";
import CloudUploadOutlined from "@mui/icons-material/CloudUploadOutlined";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import CheckCircleOutline from "@mui/icons-material/CheckCircleOutline";
import { styled } from "@mui/material/styles";
import styles, {
  containerStyle,
  getBlackWrapperStyle,
  getStartedButton,
  iconWrapper,textFieldStyles
} from "../style";
import BusinessCenterOutlined from "@mui/icons-material/BusinessCenterOutlined";
import PeopleAltOutlined from "@mui/icons-material/PeopleAltOutlined";
import GroupsOutlined from "@mui/icons-material/GroupsOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import axios from "axios";
import { toast } from "react-toastify";
import apiUrl from "../../common";

const HiddenFileInput = styled("input")({
  display: "none",
});

const SERVICES = [
  "UI/UX Design",
  "Web Development",
  "Mobile App Development",
  "SEO & Content",
  "Branding",
  "Custom (Other)",
];

const COUNTRIES = [
  "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Singapore",
  "UAE",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    service: "",
    message: "",
  });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [userData, setUserData] = useState(null);

  // Fetch user data on mount
  const fetchUserData = useCallback(async () => {
    try {
      const response = await axios.get(`${apiUrl}/getUserData`);
      if (response?.data?.user) {
        setUserData(response.data.user);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }, []);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  // Handle change
  const handleChange = (key) => (e) => {
    const { value } = e.target;
    setForm((prev) => {
      if (prev[key] === value) return prev;
      return { ...prev, [key]: value };
    });
  };

  // Handle file upload
  const handleFile = (e) => {
    const f = e.target.files?.[0];
    if (f) setFile(f);
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!termsAccepted) {
      setLoading(false);
      toast.error("Please accept the Terms & Conditions.");
      return;
    }

    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, val]) => formData.append(key, val));
      if (file) formData.append("file", file);

      const response = await axios.post(`${apiUrl}/form/create`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success(response.data.message);
      setForm({
        name: "",
        email: "",
        phone: "",
        country: "",
        service: "",
        message: "",
      });
      setFile(null);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Error submitting form. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  

  return (
    <Box sx={getBlackWrapperStyle}>
      <Grid container sx={containerStyle} pt={8}>
        {/* Left: Form */}
        <Grid item xs={12} md={7.2}>
          <Paper elevation={0} sx={styles.formCard}>
            <Box sx={styles.headerRow}>
              <Box>
                <Typography variant="h4" sx={styles.title}>
                  Get In Touch
                </Typography>
                <Typography sx={styles.subtitle}>
                  Our team will get back to you within 8 business hours or less.
                </Typography>
                <Box sx={styles.actionsRow}>
                  <IconButton size="small" sx={styles.actionBtn}>
                    <LocalPhoneOutlined fontSize="small" />
                  </IconButton>
                  <Typography component="span" sx={styles.actionText}>
                    Book A Call
                  </Typography>
                  <Box sx={styles.actionDot} />
                  <IconButton size="small" sx={styles.actionBtn}>
                    <EmailOutlined fontSize="small" />
                  </IconButton>
                  <Typography component="span" sx={styles.actionText}>
                    Email us
                  </Typography>
                </Box>
              </Box>

              <Box sx={styles.badgeWrap}>
                <Chip
                  icon={<CheckCircleOutline />}
                  label="Same Day Response"
                  variant="outlined"
                  sx={styles.badge}
                />
                <Chip
                  icon={<CheckCircleOutline />}
                  label="We sign NDA"
                  variant="outlined"
                  sx={styles.badge}
                />
              </Box>
            </Box>

            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Full Name *"
                    placeholder="Enter Your Full Name"
                    value={form.name}
                    onChange={handleChange("name")}
                    sx={textFieldStyles}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Email Address *"
                    type="email"
                    placeholder="Enter Your Email Address"
                    value={form.email}
                    onChange={handleChange("email")}
                    sx={textFieldStyles}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel>Country *</InputLabel>
                    <Select
                      label="Country *"
                      value={form.country}
                      onChange={handleChange("country")}
                      IconComponent={KeyboardArrowDown}
                      displayEmpty
                    >
                      {COUNTRIES.map((c) => (
                        <MenuItem key={c} value={c}>
                          {c}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Phone Number (Optional)"
                    placeholder="Enter Your Phone Number"
                    value={form.phone}
                    onChange={handleChange("phone")}
                    InputProps={{
                      startAdornment: (
                        <PhoneIphoneOutlined sx={{ mr: 1, opacity: 0.6 }} />
                      ),
                    }}
                    sx={textFieldStyles}
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Select Your Service *</InputLabel>
                    <Select
                      label="Select Your Service *"
                      value={form.service}
                      onChange={handleChange("service")}
                      IconComponent={KeyboardArrowDown}
                      displayEmpty
                    >
                      {SERVICES.map((s) => (
                        <MenuItem key={s} value={s}>
                          {s}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    minRows={5}
                    label="How Can We Help? *"
                    placeholder="Tell us about your project, goals, timelines, and budget (if any)…"
                    value={form.message}
                    onChange={handleChange("message")}
                    sx={textFieldStyles}
                  />
                </Grid>

                <Grid item xs={12} md={7}>
                  <label htmlFor="file-upload">
                    <HiddenFileInput
                      id="file-upload"
                      type="file"
                      onChange={handleFile}
                    />
                    <Button
                      variant="outlined"
                      startIcon={<CloudUploadOutlined />}
                      component="span"
                      sx={styles.uploadBtn}
                    >
                      {file ? file.name : "Browse | Drop files here"}
                    </Button>
                  </label>
                </Grid>

                <Grid item xs={12} md={5} sx={styles.submitCol}>
                  <Box sx={{ display: "flex" }}>
                    <Button
                      type="submit"
                      sx={getStartedButton}
                      disabled={loading}
                    >
                      <Typography sx={{ mr: 1, fontWeight: 800 }}>
                        {loading ? "Submitting..." : "Send Your Query"}
                      </Typography>
                      <Box className="iconWrapper" sx={iconWrapper}>
                        <ArrowForwardIcon sx={{ fontSize: 18, color: "#fff" }} />
                      </Box>
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>

        {/* Right: Trust & Logos */}
        <Grid item xs={12} md={4.8} sx={styles.sideCol}>
          <Box sx={styles.sideInner}>
            <Typography sx={styles.sideTitle}>
              Trusted by startups and Fortune 500 companies
            </Typography>

            <Box sx={styles.pointRow}>
              <Box sx={styles.pointIcon}>
                <BusinessCenterOutlined sx={styles.pointIconSvg} />
              </Box>
              <Box>
                <Typography sx={styles.pointHead}>
                  20+ years of experience
                </Typography>
                <Typography sx={styles.pointText}>
                  We can handle projects of all complexities.
                </Typography>
              </Box>
            </Box>

            <Box sx={styles.pointRow}>
              <Box sx={styles.pointIcon}>
                <PeopleAltOutlined sx={styles.pointIconSvg} />
              </Box>
              <Box>
                <Typography sx={styles.pointHead}>
                  2500+ satisfied customers
                </Typography>
                <Typography sx={styles.pointText}>
                  Startups to Fortune 500, we have worked with all.
                </Typography>
              </Box>
            </Box>

            <Box sx={styles.pointRow}>
              <Box sx={styles.pointIcon}>
                <GroupsOutlined sx={styles.pointIconSvg} />
              </Box>
              <Box>
                <Typography sx={styles.pointHead}>675+ in-house team</Typography>
                <Typography sx={styles.pointText}>
                  Top 1% industry talent for your success.
                </Typography>
              </Box>
            </Box>

            <Box sx={styles.logoGrid}>
              {[
                "Infosys",
                "Panasonic",
                "Reuters",
                "Ezetap",
                "SignEasy",
                "ATG",
                "HelloBetter",
                "Aromeo",
                "Orange",
                "Yale",
              ].map((name) => (
                <Box key={name} sx={styles.logoCell}>
                  <Typography sx={styles.logoText}>{name}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}


// import React, { useState } from "react";
// import {
//   Box,
//   Grid,
//   Typography,
//   TextField,
//   Button,
//   MenuItem,
//   Select,
//   InputLabel,
//   FormControl,
//   IconButton,
//   Paper,
//   Chip,
// } from "@mui/material";
// import LocalPhoneOutlined from "@mui/icons-material/LocalPhoneOutlined";
// import EmailOutlined from "@mui/icons-material/EmailOutlined";
// import PhoneIphoneOutlined from "@mui/icons-material/PhoneIphoneOutlined";
// import CloudUploadOutlined from "@mui/icons-material/CloudUploadOutlined";
// import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
// import CheckCircleOutline from "@mui/icons-material/CheckCircleOutline";
// import { styled } from "@mui/material/styles";
// import styles, { containerStyle, getBlackWrapperStyle, getStartedButton, iconWrapper } from "../style";
// import BusinessCenterOutlined from "@mui/icons-material/BusinessCenterOutlined";
// import PeopleAltOutlined from "@mui/icons-material/PeopleAltOutlined";
// import GroupsOutlined from "@mui/icons-material/GroupsOutlined";
//   import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// const HiddenFileInput = styled("input")({
//   display: "none",
// });

// const SERVICES = [
//   "UI/UX Design",
//   "Web Development",
//   "Mobile App Development",
//   "SEO & Content",
//   "Branding",
//   "Custom (Other)",
// ];

// const COUNTRIES = [
//   "India",
//   "United States",
//   "United Kingdom",
//   "Canada",
//   "Australia",
//   "Singapore",
//   "UAE",
// ];

// export default function Contact() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     country: "",
//     service: "",
//     message: "",
//   });
//   const [file, setFile] = useState(null);

//   const handleChange = (key) => (e) =>
//     setForm((p) => ({ ...p, [key]: e.target.value }));

//   const handleFile = (e) => {
//     const f = e.target.files?.[0];
//     if (f) setFile(f);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // TODO: hook your API here
//     console.log({ ...form, file });
//     alert("Submitted! (wire your API call here)");
//   };

//   return (
//     <Box sx={getBlackWrapperStyle}>
//       <Grid container sx={containerStyle} pt={8}>
//         {/* Left: Form */}
//         <Grid item xs={12} md={7.2}>
//           <Paper elevation={0} sx={styles.formCard}>
//             <Box sx={styles.headerRow}>
//               {/* <Box sx={styles.logoWrap}>
//                 <Box sx={styles.logoCube} />
//               </Box> */}
//               <Box>
//                 <Typography variant="h4" sx={styles.title}>
//                   Get In Touch
//                 </Typography>
//                 <Typography sx={styles.subtitle}>
//                   Our team will get back to you within 8 business hours or less.
//                 </Typography>
//                 <Box sx={styles.actionsRow}>
//                   <IconButton size="small" sx={styles.actionBtn}>
//                     <LocalPhoneOutlined fontSize="small" />
//                   </IconButton>
//                   <Typography component="span" sx={styles.actionText}>
//                     Book A Call
//                   </Typography>

//                   <Box sx={styles.actionDot} />

//                   <IconButton size="small" sx={styles.actionBtn}>
//                     <EmailOutlined fontSize="small" />
//                   </IconButton>
//                   <Typography component="span" sx={styles.actionText}>
//                     Email us
//                   </Typography>
//                 </Box>
//               </Box>

//               <Box sx={styles.badgeWrap}>
//                 <Chip
//                   icon={<CheckCircleOutline />}
//                   label="Same Day Response"
//                   variant="outlined"
//                   sx={styles.badge}
//                 />
//                 <Chip
//                   icon={<CheckCircleOutline />}
//                   label="We sign NDA"
//                   variant="outlined"
//                   sx={styles.badge}
//                 />
//               </Box>
//             </Box>

//             <Box component="form" onSubmit={handleSubmit}>
//               <Grid container spacing={2}>
//                 <Grid item xs={12} md={6}>
//                   <TextField
//                     fullWidth
//                     label="Full Name *"
//                     placeholder="Enter Your Full Name"
//                     value={form.name}
//                     onChange={handleChange("name")}
//                   />
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                   <TextField
//                     fullWidth
//                     label="Email Address *"
//                     type="email"
//                     placeholder="Enter Your Email Address"
//                     value={form.email}
//                     onChange={handleChange("email")}
//                   />
//                 </Grid>

//                 <Grid item xs={12} md={6}>
//                   <FormControl fullWidth>
//                     <InputLabel>Country *</InputLabel>
//                     <Select
//                       label="Country *"
//                       value={form.country}
//                       onChange={handleChange("country")}
//                       IconComponent={KeyboardArrowDown}
//                       displayEmpty
//                     >
//                       {COUNTRIES.map((c) => (
//                         <MenuItem key={c} value={c}>
//                           {c}
//                         </MenuItem>
//                       ))}
//                     </Select>
//                   </FormControl>
//                 </Grid>

//                 <Grid item xs={12} md={6}>
//                   <TextField
//                     fullWidth
//                     label="Phone Number (Optional)"
//                     placeholder="Enter Your Phone Number"
//                     value={form.phone}
//                     onChange={handleChange("phone")}
//                     InputProps={{
//                       startAdornment: (
//                         <PhoneIphoneOutlined sx={{ mr: 1, opacity: 0.6 }} />
//                       ),
//                     }}
//                   />
//                 </Grid>

//                 <Grid item xs={12}>
//                   <FormControl fullWidth>
//                     <InputLabel>Select Your Service *</InputLabel>
//                     <Select
//                       label="Select Your Service *"
//                       value={form.service}
//                       onChange={handleChange("service")}
//                       IconComponent={KeyboardArrowDown}
//                       displayEmpty
//                     >
//                       {SERVICES.map((s) => (
//                         <MenuItem key={s} value={s}>
//                           {s}
//                         </MenuItem>
//                       ))}
//                     </Select>
//                   </FormControl>
//                 </Grid>

//                 <Grid item xs={12}>
//                   <TextField
//                     fullWidth
//                     multiline
//                     minRows={5}
//                     label="How Can We Help? *"
//                     placeholder="Tell us about your project, goals, timelines, and budget (if any)…"
//                     value={form.message}
//                     onChange={handleChange("message")}
//                   />
//                 </Grid>

//                 <Grid item xs={12} md={7}>
//                   <label htmlFor="file-upload">
//                     <HiddenFileInput
//                       id="file-upload"
//                       type="file"
//                       onChange={handleFile}
//                     />
//                     <Button
//                       variant="outlined"
//                       startIcon={<CloudUploadOutlined />}
//                       component="span"
//                       sx={styles.uploadBtn}
//                     >
//                       {file ? file.name : "Browse | Drop files here"}
//                     </Button>
//                   </label>
//                 </Grid>

//                 <Grid item xs={12} md={5} sx={styles.submitCol}>
//                      <Box sx={{ display: "flex",  }}>
//                                          <Button sx={getStartedButton}>
//                                            <Typography sx={{ mr: 1, fontWeight: 800 }}>  Send Your Query</Typography>
//                                            <Box className="iconWrapper" sx={iconWrapper}>
//                                              <ArrowForwardIcon sx={{ fontSize: 18, color: '#fff' }} />
//                                            </Box>
//                                          </Button></Box>
//                 </Grid>
//               </Grid>
//             </Box>
//           </Paper>
//         </Grid>

//         {/* Right: Trust & Logos */}
//         <Grid item xs={12} md={4.8} sx={styles.sideCol}>
//           <Box sx={styles.sideInner}>
//            <Typography sx={styles.sideTitle}>
//       Trusted by startups and Fortune 500 companies
//     </Typography>

//     <Box sx={styles.pointRow}>
//       <Box sx={styles.pointIcon}>
//         <BusinessCenterOutlined sx={styles.pointIconSvg} />
//       </Box>
//       <Box>
//         <Typography sx={styles.pointHead}>20+ years of experience</Typography>
//         <Typography sx={styles.pointText}>
//           We can handle projects of all complexities.
//         </Typography>
//       </Box>
//     </Box>

//     <Box sx={styles.pointRow}>
//       <Box sx={styles.pointIcon}>
//         <PeopleAltOutlined sx={styles.pointIconSvg} />
//       </Box>
//       <Box>
//         <Typography sx={styles.pointHead}>2500+ satisfied customers</Typography>
//         <Typography sx={styles.pointText}>
//           Startups to Fortune 500, we have worked with all.
//         </Typography>
//       </Box>
//     </Box>

//     <Box sx={styles.pointRow}>
//       <Box sx={styles.pointIcon}>
//         <GroupsOutlined sx={styles.pointIconSvg} />
//       </Box>
//       <Box>
//         <Typography sx={styles.pointHead}>675+ in-house team</Typography>
//         <Typography sx={styles.pointText}>
//           Top 1% industry talent for your success.
//         </Typography>
//               </Box>
//             </Box>

//             <Box sx={styles.logoGrid}>
//               {[
//                 "Infosys",
//                 "Panasonic",
//                 "Reuters",
//                 "Ezetap",
//                 "SignEasy",
//                 "ATG",
//                 "HelloBetter",
//                 "Aromeo",
//                 "Orange",
//                 "Yale",
//               ].map((name) => (
//                 <Box key={name} sx={styles.logoCell}>
//                   <Typography sx={styles.logoText}>{name}</Typography>
//                 </Box>
//               ))}
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }
