import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CloseIcon from "@mui/icons-material/Close";
import NoteContainer from "./Notes/NoteContainer";

function extractDomain(link) {
  try {
    const url = new URL(link);
    const domain = url.hostname + url.pathname;
    return domain;
  } catch (error) {
    console.error("Invalid link:", link);
    return "";
  }
}

const LinkBox = ({ link }) => (
  <Box
    display="inline-flex"
    alignItems="center"
    backgroundColor="#ffffff"
    borderRadius="20px"
    marginTop="16px"
    onClick={() => window.open(link)}
  >
    <ArrowOutwardIcon
      sx={{
        color: "#000000",
        padding: "8px",
        fontSize: "20px",
        paddingRight: "4px",
      }}
    />
    <Typography
      color="#000000"
      fontWeight="bold"
      padding="10px"
      paddingLeft="0px"
      fontSize="12px"
      sx={{
        userSelect: "none",
      }}
    >
      Link to {extractDomain(link)}
    </Typography>
  </Box>
);

const Header = ({ title, content, link, onClose }) => (
  <Box
    sx={{
      padding: "16px",
      background: "darkgray",
      borderRadius: "20px",
      position: "relative",
    }}
  >
    <IconButton
      sx={{
        position: "absolute",
        top: "8px",
        right: "8px",
        color: "#ffffff",
      }}
      onClick={onClose}
    >
      <CloseIcon />
    </IconButton>
    <Typography variant="h5" component="h2" color="text.primary">
      {title}
    </Typography>
    <Typography
      variant="body1"
      color="text.secondary"
      align="left"
      paddingTop={"16px"}
    >
      {content}
    </Typography>
    {link && <LinkBox link={link} />}
  </Box>
);

const ExpandedCard = ({ cardDetails, onClose }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#f5f5f5",
    }}
  >
    <Box
      sx={{
        borderRadius: "20px",
        width: "90%",
        minHeight: "90%",
        display: "flex",
        flexDirection: "column",
        background: "#fff",
        overflow: "hidden",
      }}
    >
      <Header
        title={cardDetails.title}
        content={cardDetails.content}
        link={cardDetails.link}
        onClose={onClose}
      />
      <NoteContainer notes={cardDetails.notes} />
    </Box>
  </Box>
);

export default ExpandedCard;
