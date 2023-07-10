import React, { useState } from "react";
import { Box } from "@mui/material";
import Note from "./Note";
import NewNote from "./NewNote";

const NoteContainer = ({ notes }) => {
  const [noteList, setNoteList] = useState(notes);
  const [newNote, setNewNote] = useState("");
  const [newNoteName, setNewNoteName] = useState("");
  const [isAddingNote, setIsAddingNote] = useState(false);

  const toggleAddingNote = () => {
    setIsAddingNote(!isAddingNote);
    setNewNote("");
    setNewNoteName("");
  };

  const handleChange = (e) => {
    if (e.target.name === "noteName") {
      setNewNoteName(e.target.value);
    } else {
      setNewNote(e.target.value);
    }
  };

  const handleCancel = () => {
    setIsAddingNote(false);
    setNewNote("");
    setNewNoteName("");
  };

  const handleNoteClose = (index) => {
    setNoteList((prevNotes) => {
      const updatedNotes = [...prevNotes];
      updatedNotes.splice(index, 1);
      return updatedNotes;
    });
  };

  const handleSave = () => {
    if (newNote && newNoteName) {
      const newNoteObject = {
        name: newNoteName,
        content: newNote,
      };
      setNoteList((prevNotes) => [...prevNotes, newNoteObject]);
      setIsAddingNote(false);
      setNewNote("");
      setNewNoteName("");
    }
  };

  return (
    <Box display="flex" flexWrap="wrap" gap={2} padding={2}>
      {noteList.map((note, index) => (
        <Note
          key={index}
          noteDetails={note}
          onClose={() => handleNoteClose(index)}
        />
      ))}
      <NewNote
        isAddingNote={isAddingNote}
        handleToggleAddingNote={toggleAddingNote}
        newNote={newNote}
        newNoteName={newNoteName}
        handleChange={handleChange}
        handleSave={handleSave}
        handleCancel={handleCancel}
      />
    </Box>
  );
};

export default NoteContainer;
