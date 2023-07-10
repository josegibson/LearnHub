import React from "react";
import { Card } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const NewNoteButton = ({ handleToggleAddingNote }) => (
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
    <AddIcon sx={{ fontSize: "50px", color: "#E0E0E0" }} />
  </Card>
);

export default NewNoteButton;
