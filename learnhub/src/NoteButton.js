import React, { useState } from "react";
import { IconButton, TextField, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import themeforcreator from "./themeforcreator";

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
        width: 'calc(100% - 32px)',
        paddingX: "15px",
        display: "flex",
        alignItems: "center",
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
          fontSize: "20px",
          transform: `rotate(${closeButtonRotation})`,
          transition: "transform 0.3s",
          color: "primary.main",
        }}
        onClick={handleNoteClear}
      >
        <CloseIcon fontSize="inherit" />
      </IconButton>
      <Box sx={{ flexGrow: 1, display: "flex" }}>
        <TextField
          variant="standard"
          size="small"
          label="Topic here"
          value={topic}
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
        <TextField
          variant="standard"
          size="small"
          label="Content here"
          fullWidth
          value={content}
          sx={{
            paddingBottom: "10px",
            marginLeft: "10px",
          }}
          onChange={handleContentInputChange}
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
              visibility: content === "" ? "visible" : "hidden",
              color: theme.palette.primary.main,
            },
          }}
        />
      </Box>
      {(topic !== "" || content !== "") && (
        <IconButton
          sx={{ fontSize: "20px", color: "primary.main" }}
          onClick={handleAddNote}
        >
          <DoneIcon fontSize="inherit" />
        </IconButton>
      )}
    </Box>
  );
};

export default NoteButton;
