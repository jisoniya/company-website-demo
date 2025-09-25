import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  TelegramIcon,
} from "react-share";
import { Box, Typography } from "@mui/material";

export default function SocialShare({ blogUrl = "", blogTitle = "" }) {
  if (!blogUrl || !blogTitle) return null;

  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 500, mb: 2, fontFamily: "Bakbak One, serif" }}>
        Share this Blog
      </Typography>

      <Box display="flex" gap={2} alignItems="center">
        <FacebookShareButton url={blogUrl} quote={blogTitle}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <TwitterShareButton url={blogUrl} title={blogTitle}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        <WhatsappShareButton url={blogUrl} title={blogTitle}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>

        <TelegramShareButton url={blogUrl} title={blogTitle}>
          <TelegramIcon size={32} round />
        </TelegramShareButton>
      </Box>
    </Box>
  );
}


// import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, TelegramShareButton } from "react-share";
// import { FacebookIcon, TwitterIcon, WhatsappIcon, TelegramIcon } from "react-share";
// import { Box, Typography } from "@mui/material";

// export default function SocialShare({ isBlogPage = false, blogUrl = "", blogTitle = "" }) {
//     if (!blogUrl || !blogTitle) return null; // Prevent errors if no URL or title is provided

//     return (
//         <Box>
//             <Typography variant="h6" sx={{ fontWeight: 500, mb: 2, fontFamily: "Bakbak One, serif" }}>
//                 Share this Blog
//             </Typography>

//             <Box display="flex" gap={2} alignItems="center">
//                 <FacebookShareButton url={blogUrl} quote={blogTitle}>
//                     <FacebookIcon size={32} round />
//                 </FacebookShareButton>

//                 <TwitterShareButton url={blogUrl} title={blogTitle}>
//                     <TwitterIcon size={32} round />
//                 </TwitterShareButton>

//                 <WhatsappShareButton url={blogUrl} title={blogTitle}>
//                     <WhatsappIcon size={32} round />
//                 </WhatsappShareButton>

//                 <TelegramShareButton url={blogUrl} title={blogTitle}>
//                     <TelegramIcon size={32} round />
//                 </TelegramShareButton>
//             </Box>
//         </Box>
//     );
// }
