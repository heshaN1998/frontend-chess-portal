import { Box, Typography, Link as MuiLink } from "@mui/material";
import{ Link as RouterLink } from "react-router-dom";


function Footer() {
  const handleShare =async()=> {
    const shareData={
      title:"Chess Portal",
      text:"Check out this Unique Poral",
      url:window.location.origin
    };
    try{
      if(navigator.share){
        await navigator.share(shareData)
      }
      else{
        await navigator.clipboard.writeText(shareData.url);
        alert("Link Copied");
      }
        }catch(error){
        alert("Sharing failed");
      }
  };
  return (
    <Box
      sx={{
        mt: 5,
        px: 4,
        py: 3,
        background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        color: "white",
        borderTop: "3px solid #5c7cfa",
        boxShadow: "0 -4px 15px rgba(0,0,0,0.2)",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {/* Copyright */}
        <Typography
          variant="body2"
          sx={{
            fontWeight: 500,
            letterSpacing: "0.5px",
          }}
        >
          © 2026 Chess Portal Universal Club. All rights reserved.
        </Typography>

        {/* Links */}
        <Box sx={{display:"flex",justifyContent:"flex-end"}}>
          <MuiLink
            component={RouterLink}
            to="/aboutUs"
            underline="none"
            color="inherit"
            sx={{
              mx: 1,
              fontWeight: 500,
              transition: "0.3s",
              "&:hover": {
                color: "#ffd43b",
              },
            }}
          >
            About Us
          </MuiLink>

          <MuiLink
            href="https://www.chess.com"
            underline="none"
            color="inherit"
            sx={{
              mx: 1,
              fontWeight: 500,
              transition: "0.3s",
              "&:hover": {
                color: "#ffd43b",
              },
            }}
          >
            Chess.com
          </MuiLink>

          <MuiLink
            href="#"
            underline="none"
            color="inherit"
            onClick={handleShare}
            sx={{
              mx: 2,
              fontWeight: 500,
              transition: "0.3s",
              "&:hover": {
                color: "#ffd43b",
              },
            }}
          >
            ShareFriends 
          </MuiLink>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;