import React, { useState } from "react";
import { IconButton, TextField, Box, TextareaAutosize } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import theme from "./themeforcreator";

const NoteButton = ({ onNoteAdd }) => {
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
  };

  const closeButtonRotation = topic !== "" || content !== "" ? "0deg" : "45deg";

  return (
    <Box
      sx={{
        minHeight: "400px",
        padding: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        borderRadius: "10px",
        bgcolor: "secondary.main",
        gap: "10px",
      }}
    >
      <Box
        sx={{
          height: "400px",
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          borderRadius: "10px",
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
            margin: "11px",
            fontSize: "20px",
            transform: `rotate(${closeButtonRotation})`,
            transition: "transform 0.3s",
            color: "primary.main",
          }}
          onClick={handleNoteClear}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <TextField
            variant="standard"
            size="small"
            label="Topic here"
            value={topic}
            fullWidth
            sx={{
              paddingBottom: "10px",
              marginLeft: "10px",
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
          <Box maxHeight={'330px'} style={{ overflow: "auto" }}>
            <TextareaAutosize
              value={content}
              onChange={handleContentInputChange}
              placeholder="Content here"
              minRows={10}
              fullWidth
              style={{
                overflow: "auto",
                padding: "10px",
                resize: "none",
                border: "none",
                borderColor: theme.palette.tertiary.main,
                outline: "none",
                background: "transparent",
                fontFamily: "inherit",
                fontSize: "18px",
                lineHeight: "inherit",
                borderRadius: "10px",
              }}
            />
          </Box>
        </Box>
        {(topic !== "" || content !== "") && (
          <IconButton
            sx={{ fontSize: "20px", color: "primary.main", margin: "11px" }}
            onClick={handleAddNote}
          >
            <DoneIcon fontSize="inherit" />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default NoteButton;
