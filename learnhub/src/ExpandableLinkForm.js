import React, { useState } from "react";
import {
  Box,
  IconButton,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
import { Transition } from "react-transition-group";

const ExpandableLinkForm = ({ onLinkAdd }) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);
  const [link, setLink] = useState("");

  const handleExpand = () => {
    setExpanded(true);
  };

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

  const duration = 500; // Transition duration in milliseconds

  const defaultStyle = {
    transition: `max-height ${duration}ms cubic-bezier(0.25, 0.8, 0.5, 1)`,
    maxHeight: 0,
    overflow: "hidden",
  };

  const transitionStyles = {
    entering: { maxHeight: 0 },
    entered: { maxHeight: "300px" },
    exiting: { maxHeight: 0 },
    exited: { maxHeight: 0 },
  };

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
        borderColor: theme.palette.tertiary.main,
        position: "relative",
        cursor: "pointer",
        padding: "0px 10px",
        transition: "width 0.2s cubic-bezier(0.25, 0.8, 0.5, 1)",
        overflow: "hidden",
      }}
      onClick={expanded ? undefined : handleExpand}
    >
      <IconButton
        sx={{
          margin: "8px 0px",
          marginBottom: "auto",
        }}
        onClick={handleLinkClear}
      >
        <AddIcon
          size="small"
          sx={{
            transition: "transform 0.3s ease",
            transform: `rotate(${expanded ? "45deg" : "0deg"})`,
          }}
        />
      </IconButton>
      {!expanded && (
        <Typography
          component="div"
          sx={{
            margin: "18px 10px 18px 0px",
            color: theme.palette.primary.main,
            fontWeight: "bold",
          }}
        >
          LINK
        </Typography>
      )}
      <Transition in={expanded} timeout={duration}>
        {(state) => (
          <Box
            sx={{
              width: "100%",
              ...defaultStyle,
              ...transitionStyles[state],
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
                sx: {
                  color: theme.palette.primary.main,
                  fontWeight: "regular",
                },
              }}
              InputLabelProps={{
                shrink: false,
                focused: false,
                sx: {
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
      </Transition>
    </Box>
  );
};

export default ExpandableLinkForm;
