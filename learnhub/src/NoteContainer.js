import React from "react";
import { Box } from "@mui/material";
import NoteButton from "./NoteButtonv2";
import NoteBox from "./NoteBox";

const NoteContainer = ({ notes, onNoteAdd, onNoteRemove }) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(2, 1fr)"
      gap={2}
      padding={1}
      borderRadius="10px"
      minHeight="400px"
      width="100%"
    >
      <NoteButton onNoteAdd={onNoteAdd} />
      {notes.length > 0 &&
        notes.map((note, index) => (
          <NoteBox
            key={index}
            note={note}
            index={index}
            handleRemoveNote={onNoteRemove}
          />
        ))}
    </Box>
  );
};

export default NoteContainer;
