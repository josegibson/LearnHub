import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import theme from "./themeforcreator";
import DoneIcon from "@mui/icons-material/Done";

const ExpandableNoteForm = ({ onNoteAdd }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(true);
  };

  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");

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

  const closeButtonRotation = expanded ? "45deg" : "0deg";

  return (
    <Box
      sx={{
        height: expanded ? "250px" : "60px",
        width: expanded ? "350px" : "110px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        borderRadius: "10px",
        border: "2px dashed",
        borderColor: "tertiary.main",
        position: "relative",
        cursor: "pointer",
        //padding: "0px 10px",
        transition:
          "height 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), width 0.2s cubic-bezier(0.25, 0.8, 0.5, 1)",
        overflow: "hidden",
      }}
      onClick={expanded ? undefined : handleExpand}
    >
      <IconButton
        disabled={!expanded}
        sx={{
          margin: "8px 0px",
          marginBottom: 'auto'
        }}
        onClick={handleNoteClear}
      >
        <AddIcon
          size="small"
          sx={{
            transition: "transform 0.3s ease",
            transform: `rotate(${closeButtonRotation})`,
          }}
        />
      </IconButton>

      {!expanded && (
        <Typography
          component="div"
          sx={{
            margin: "18px 10px 18px 0px",
            color: theme.palette.primary.main,
          }}
        >
          NOTE
        </Typography>
      )}
      {expanded && (
        <Box
          sx={{
            transition: "max-height 0.5s cubic-bezier(0.25, 0.8, 0.5, 1)",
            maxHeight: "300px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{
              transition: "opacity 1s ease 1s",
              opacity: expanded ? 1 : 0,
              maxHeight: expanded ? "300px" : 0,
              overflow: "hidden",
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
                style: {
                  color: theme.palette.primary.main,
                  fontWeight: "bold",
                },
              }}
              InputLabelProps={{
                shrink: false,
                focused: false,
                style: {
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
          </Box>
          <IconButton
            sx={{ fontSize: "22px", color: "primary.main", margin: "10px" }}
            onClick={handleAddNote}
          >
            <DoneIcon fontSize="inherit" />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default ExpandableNoteForm;
