import React, { useState } from "react";
import { Box, IconButton, Typography, TextField } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import NoteContainer from "./Notes/NoteContainer";

const NewExpandedCard = ({ onSave, onClose }) => {
  const [newCardData, setNewCardData] = useState({
    title: "",
    content: "",
    link: "",
    notes: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCardData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    onSave(newCardData);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f5f5f5",
      }}
    >
      <Box
        sx={{
          borderRadius: "20px",
          width: "90%",
          minHeight: "90%",
          display: "flex",
          flexDirection: "column",
          background: "#fff",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            padding: "16px",
            background: "darkgray",
            borderRadius: "20px",
            position: "relative",
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: "8px",
              right: "8px",
              color: "#ffffff",
            }}
            onClick={handleSave}
          >
            <DoneIcon />
          </IconButton>
          <TextField
            name="title"
            label="Title"
            value={newCardData.title}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            name="content"
            label="Content"
            value={newCardData.content}
            onChange={handleInputChange}
            multiline
            fullWidth
            sx={{ marginTop: "16px" }}
          />
          <TextField
            name="link"
            label="Link"
            value={newCardData.link}
            onChange={handleInputChange}
            fullWidth
            sx={{ marginTop: "16px" }}
          />
        </Box>
        <NoteContainer notes={newCardData.notes} />
      </Box>
    </Box>
  );
};

export default NewExpandedCard;
