import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Link,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
import theme from "./themeforcreator";

const ExpandableLinkForm = ({ onLinkAdd }) => {
  const [expanded, setExpanded] = useState(false);


  const handleExpand = () => {
    setExpanded(true);
  };

  const [link, setLink] = useState("");

  const handleLinkInputChange = (e) => {
    setLink(e.target.value);
  };

  const handleAddLink = () => {
    // Handle adding the link (e.g., save it or perform an action)
    onLinkAdd(link);

    // Reset the component state
    setLink("");
  };

  const handleLinkClear = () => {
    setLink("");
    setExpanded(false);
  };

  const closeButtonRotation = expanded ? "45deg" : "0deg";

  return (
    <Box
      sx={{
        height: "60px",
        width: expanded ? "350px" : "110px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
        border: "2px dashed",
        borderColor: "tertiary.main",
        position: "relative",
        cursor: "pointer",
        padding: "0px 10px",
        transition: "width 0.2s cubic-bezier(0.25, 0.8, 0.5, 1)",
        overflow: "hidden",
      }}
      onClick={expanded ? undefined : handleExpand}
    >
      <IconButton
        disabled={!expanded}
        sx={{
          transition: "transform 0.3s ease",
          transform: `rotate(${closeButtonRotation})`,
        }}
        onClick={handleLinkClear}
      >
        <AddIcon size="small" />
      </IconButton>
      {!expanded && (
        <Typography
          component="div"
          sx={{
            margin: "18px 10px 18px 0px",
            color: theme.palette.primary.main,
          }}
        >
          LINK
        </Typography>
      )}
      {expanded && (
        <Box
          sx={{
            width: "100%",
            transition: "max-height 0.5s cubic-bezier(0.25, 0.8, 0.5, 1)",
            maxHeight: "300px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextField
            variant="standard"
            size="small"
            label="Paste link here"
            value={link}
            sx={{
              paddingBottom: "10px",
            }}
            onChange={handleLinkInputChange}
            InputProps={{
              disableUnderline: true,
              style: {
                color: theme.palette.primary.main,
                fontWeight: "regular",
              },
            }}
            InputLabelProps={{
              shrink: false,
              focused: false,
              style: {
                visibility: link === "" ? "visible" : "hidden",
                color: theme.palette.primary.main,
                fontWeight: "regular",
              },
            }}
          />
          <IconButton
            sx={{ fontSize: "22px", color: "primary.main" }}
            onClick={handleAddLink}
          >
            <DoneIcon fontSize="inherit" />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default ExpandableLinkForm;
