import React, { useState } from "react";
import { IconButton, TextField, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import theme from "./themeforcreator";

const LinkButton = ({ onLinkAdd }) => {
  const [link, setLink] = useState("");

  const handleAddLink = () => {
    // Handle adding the link (e.g., save it or perform an action)
    onLinkAdd(link);

    // Reset the component state
    setLink("");
  };

  const handleLinkInputChange = (e) => {
    setLink(e.target.value);
  };

  const handleLinkClear = () => {
    setLink("");
  };

  const closeButtonRotation = link !== "" ? "0deg" : "45deg";

  return (
    <Box
      sx={{
        marginTop: "auto",
        paddingX: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        borderRadius: "10px",
        //bgcolor: "secondary.main",
        border: "2px dashed",
        borderColor: "tertiary.main",
        transition: "background-color 0.3s",
        "&:hover": {
          bgcolor: "secondary.main",
        },
      }}
    >
      <IconButton
        sx={{
          fontSize: "20px",
          transform: `rotate(${closeButtonRotation})`,
          transition: "transform 0.3s",
          color: "primary.main",
          ":hover": {
            bgcolor: "transparent",
            color: "grey.700",
          },
        }}
        onClick={handleLinkClear}
      >
        <CloseIcon fontSize="inherit" />
      </IconButton>
      <TextField
        variant="standard"
        size="small"
        label="Paste sources here"
        fullWidth
        value={link}
        sx={{
          paddingBottom: "10px",
          marginLeft: "10px",
        }}
        onChange={handleLinkInputChange}
        InputProps={{
          disableUnderline: true,
          style: {
            color: theme.palette.primary.main,
          },
        }}
        InputLabelProps={{
          shrink: false,
          focused: false,
          style: {
            visibility: link === "" ? "visible" : "hidden",
            color: theme.palette.primary.main,
          },
        }}
      />
      {link !== "" && (
        <IconButton
          sx={{ fontSize: "20px", color: "primary.main" }}
          onClick={handleAddLink}
        >
          <DoneIcon fontSize="inherit" />
        </IconButton>
      )}
    </Box>
  );
};

export default LinkButton;
