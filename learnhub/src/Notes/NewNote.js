import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  IconButton,
  TextareaAutosize,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";

const NewNoteButtonForm = ({
  isAddingNote,
  handleToggleAddingNote,
  newNote,
  newNoteName,
  handleChange,
  handleSave,
  handleCancel,
}) => {
  if (isAddingNote) {
    return (
      <Card
        sx={{
          borderRadius: "16px",
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
            minRows={1}
            style={{
              resize: "none",
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
  }

  return (
    <Card
      sx={{
        borderRadius: "16px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        backgroundColor: "#ffffff",
        border: "2px dashed #E0E0E0",
      }}
      onClick={handleToggleAddingNote}
    >
      <Box display="flex" alignItems="center">
        <AddIcon sx={{ fontSize: "50px", color: "#E0E0E0" }} />
      </Box>
    </Card>
  );
};

export default NewNoteButtonForm;
