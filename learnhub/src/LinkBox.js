import React from "react";
import { Box, Chip, IconButton } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import CloseIcon from "@mui/icons-material/Close";

const LinkBox = ({ link, index, handleRemoveLink }) => {
  const extractDomain = (link) => {
    const url = new URL(link);
    return url.hostname;
  };

  const extractPageName = (link) => {
    const url = new URL(link);
    return url.pathname;
  };

  const handleClick = (e) => {
    e.stopPropagation();
    handleRemoveLink(index);
  };

  return (
    <Box display="flex" alignItems="center" marginTop="7px">
      <Chip
        icon={<LinkIcon fontSize="inherit"/>}
        label={`${extractDomain(link)}${extractPageName(link)}`}
        onDelete={handleClick}
        deleteIcon={<CloseIcon />}
        sx={{
          justifyContent: "space-between", // Aligns the link icon to the left and delete icon to the right
          padding: "25px 13px",
          width: "100%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          borderRadius: "10px",
          bgcolor: "transparent",
          ":hover": {
            bgcolor: "tertiary.main",
          },
          "& .MuiChip-deleteIcon": {
            marginLeft: "auto", // Aligns the delete icon to the right
          },
          "& .MuiChip-icon": {
            fontSize: "24px",
            color: "primary.main",
          },
          "& .MuiChip-label": {
            color: "primary.main",
            fontSize: "16px",
          }
        }}
      />
    </Box>
  );
};

export default LinkBox;
