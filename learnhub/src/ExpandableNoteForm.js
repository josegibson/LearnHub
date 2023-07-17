import React, { useState } from "react";
import {
  Box,
  IconButton,
  TextField,
  TextareaAutosize,
  Typography,
  useTheme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
import { Transition } from "react-transition-group";

const ExpandableNoteForm = ({ onNoteAdd }) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleAddNote = () => {
    // Handle adding the note (e.g., save it or perform an action)
    onNoteAdd({ topic, content });

    // Reset the component state
    setTopic("");
    setContent("");
  };

  const handleTopicInputChange = (e) => {
    setTopic(e.target.value);
  };

  const handleContentInputChange = (e) => {
    setContent(e.target.value);
  };

  const handleNoteClear = () => {
    setTopic("");
    setContent("");
    setExpanded(false);
  };

  const duration = 300; // Transition duration in milliseconds

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
    maxHeight: 0,
    overflow: "hidden",
  };

  const transitionStyles = {
    entering: { opacity: 0, maxHeight: 0 },
    entered: { opacity: 1, maxHeight: "300px" },
    exiting: { opacity: 0, maxHeight: 0 },
    exited: { opacity: 0, maxHeight: 0 },
  };

  return (
    <Box
      sx={{
        height: expanded ? "250px" : "60px",
        width: expanded ? "350px" : "120px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        borderRadius: "10px",
        border: "2px dashed",
        borderColor: theme.palette.tertiary.main,
        position: "relative",
        cursor: "pointer",
        transition:
          "height 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), width 0.2s cubic-bezier(0.25, 0.8, 0.5, 1)",
        overflow: "hidden",
      }}
      onClick={expanded ? undefined : handleExpand}
    >
      <IconButton
        sx={{
          margin: "8px 0px",
          marginBottom: "auto",
        }}
        onClick={handleNoteClear}
      >
        <AddIcon
          size="small"
          sx={{
            transition: "transform 0.3s ease",
            transform: `rotate(${expanded ? "45deg" : "0deg"})`,
          }}
        />
      </IconButton>

      <Transition in={expanded} timeout={duration}>
        {(state) => (
          <Box
            sx={{
              position: "relative",
              ...defaultStyle,
              ...transitionStyles[state],
              transition: `opacity ${duration}ms ease-in-out, max-height ${duration}ms ease-in-out`,
            }}
          >
            <TextField
              variant="standard"
              size="small"
              label="Topic here"
              value={topic}
              sx={{
                paddingBottom: "10px",
              }}
              onChange={handleTopicInputChange}
              InputProps={{
                disableUnderline: true,
                sx: {
                  color: theme.palette.primary.main,
                  fontWeight: "bold",
                },
              }}
              InputLabelProps={{
                shrink: false,
                focused: false,
                sx: {
                  visibility: topic === "" ? "visible" : "hidden",
                  color: theme.palette.primary.main,
                  fontWeight: "bold",
                },
              }}
            />
            <TextareaAutosize
              name="info"
              onChange={handleContentInputChange}
              placeholder="Note here"
              resize="none"
              minRows={7}
              fullWidth
              style={{
                width: "90%",
                resize: "none",
                border: "none",
                borderColor: theme.palette.tertiary.main,
                outline: "none",
                background: "transparent",
                fontSize: "16px",
                fontFamily: "inherit",
                borderRadius: "10px",
              }}
            />
            <IconButton
              sx={{
                fontSize: "22px",
                color: "primary.main",
                margin: "10px",
                position: "absolute",
                top: "0px",
                right: "0px",
              }}
              onClick={handleAddNote}
            >
              <DoneIcon fontSize="inherit" />
            </IconButton>
          </Box>
        )}
      </Transition>

      {!expanded && (
        <Typography
          component="div"
          sx={{
            margin: "17px 12px",
            color: theme.palette.primary.main,
            fontWeight: "bold",
          }}
        >
          NOTE
        </Typography>
      )}
    </Box>
  );
};

export default ExpandableNoteForm;
