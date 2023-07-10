import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  TextareaAutosize,
  Typography,
  TextField,
} from "@mui/material";
import { Masonry } from "@mui/lab";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";

const NoteCard = ({ noteDetails, onClose }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleCancel = () => {
    setShowConfirmation(true);
  };

  const handleConfirmCancel = () => {
    onClose();
  };

  return (
    <Card sx={{ borderRadius: "16px" }}>
      {showConfirmation && (
        <Box
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          alignItems="center"
          height={120}
          backgroundColor="#f8f8f8"
        >
          <Typography>Are you sure you want to cancel?</Typography>
          <Box marginLeft={"auto"} marginRight={"20px"} marginTop={"10px"}>
            <IconButton onClick={handleConfirmCancel}>
              <CheckIcon sx={{ fontSize: "px", color: "black" }} />
            </IconButton>
            <IconButton onClick={() => setShowConfirmation(false)}>
              <CloseIcon sx={{ fontSize: "px", color: "black" }} />
            </IconButton>
          </Box>
        </Box>
      )}
      <Box display="flex" justifyContent="space-between" padding={"5px"}>
        {!showConfirmation && (
          <>
            <Typography fontSize={"16px"} padding={"10px"} fontWeight={"bold"}>
              {noteDetails.name}
            </Typography>
            <IconButton onClick={handleCancel}>
              <CloseIcon sx={{ fontSize: "24px", color: "black" }} />
            </IconButton>
          </>
        )}
      </Box>
      <CardContent>
        <Box minHeight={80}>
          {showConfirmation && (
            <Typography
              fontSize={"16px"}
              fontWeight={"bold"}
              paddingBottom={"5px"}
            >
              {noteDetails.name}
            </Typography>
          )}
          <Typography fontSize={"16px"}>{noteDetails.content}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

const AddNoteCard = ({
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

const AddNoteButtonCard = ({ handleToggleAddingNote }) => (
  <Card
    sx={{
      borderRadius: "16px",
      minHeight: 120,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      backgroundColor: "#ffffff",
      border: "2px dashed #E0E0E0",
    }}
    onClick={handleToggleAddingNote}
  >
    <AddIcon sx={{ fontSize: "50px", color: "#E0E0E0" }} />
  </Card>
);

const NoteView = ({ notes }) => {
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
    <Box padding={"20px"}>
      <Masonry columns={{ xs: 2, sm: 3, md: 4 }} spacing={2}>
        {noteList.map((note, index) => (
          <NoteCard
            key={index}
            noteDetails={note}
            onClose={() => handleNoteClose(index)}
          />
        ))}
        {isAddingNote ? (
          <AddNoteCard
            newNote={newNote}
            newNoteName={newNoteName}
            handleChange={handleChange}
            handleSave={handleSave}
            handleCancel={handleCancel}
          />
        ) : (
          <AddNoteButtonCard handleToggleAddingNote={toggleAddingNote} />
        )}
      </Masonry>
    </Box>
  );
};

export default NoteView;
