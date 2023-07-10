import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  TextareaAutosize,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";

const NewNoteForm = ({
  newNote,
  newNoteName,
  handleChange,
  handleSave,
  handleCancel,
}) => (
  <Card
    sx={{
      borderRadius: "16px",
      minHeight: 160,
      backgroundColor: "#fff",
      border: "2px dashed #E0E0E0",
    }}
  >
    <CardContent>
      <TextareaAutosize
        value={newNoteName}
        onChange={handleChange}
        name="noteName"
        placeholder="Topic"
        minRows={1}
        style={{
          resize: "none",
          width: "100%",
          border: "none",
          outline: "none",
          color: "#000000",
          background: "transparent",
          fontFamily: "inherit",
          fontSize: "inherit",
          lineHeight: "inherit",
        }}
      />
      <TextareaAutosize
        value={newNote}
        onChange={handleChange}
        name="noteContent"
        placeholder="Enter a new note"
        minRows={3}
        style={{
          resize: "none",
          width: "100%",
          border: "none",
          outline: "none",
          color: "#000000",
          background: "transparent",
          fontFamily: "inherit",
          fontSize: "inherit",
          lineHeight: "inherit",
        }}
      />
    </CardContent>
    <CardActions
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <IconButton onClick={handleCancel}>
        <CloseIcon sx={{ fontSize: "24px" }} />
      </IconButton>
      <IconButton onClick={handleSave}>
        <DoneIcon sx={{ fontSize: "24px" }} />
      </IconButton>
    </CardActions>
  </Card>
);

export default NewNoteForm;
