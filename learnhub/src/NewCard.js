import React from "react";
import { Card, CardContent, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const NewCardButton = ({ handleAddNewCard }) => {
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
      onClick={handleAddNewCard}
    >
      <CardContent>
        <IconButton>
          <AddIcon sx={{ fontSize: "50px", color: "#E0E0E0" }} />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default NewCardButton;
