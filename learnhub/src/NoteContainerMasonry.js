import React from "react";
import { Box } from "@mui/material";
import NoteButton from "./NoteButton";
import NoteBox from "./NoteBox";
import { Masonry } from "@mui/lab";

const _notes = [
  {
    id: 1,
    topic: "Important Tasks",
    content: "Finish report by Friday",
    size: "small",
  },
  {
    id: 2,
    topic: "Grocery List",
    content: "- Milk\n- Eggs\n- Bread",
    size: "medium",
  },
  {
    id: 3,
    topic: "Project Ideas",
    content: "- Create a personal portfolio\n- Learn a new programming language",
    size: "large",
  },
  {
    id: 4,
    topic: "Quotes",
    content: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    size: "small",
  },
];

const NoteContainer = ({ notes, onNoteAdd, onNoteRemove }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      bgcolor="secondary.main"
      padding={1}
      borderRadius="10px"
      minHeight="400px"
      width="100%"
      sx={{
        gap: "10px",
      }}
    >
      <NoteButton onNoteAdd={onNoteAdd} />
      <Masonry
        width="100%"
        columns={4} // Set the number of columns you want
        spacing={1} // Set the spacing between items
      >
        {_notes.length > 0 &&
          _notes.map((note, index) => (
            <NoteBox
              key={index}
              note={note}
              index={index}
              handleRemoveNote={onNoteRemove}
            />
          ))}
      </Masonry>
    </Box>
  );
};

export default NoteContainer;
