import React from "react";
import { Box, TextField, IconButton, TextareaAutosize } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import themeforcreator from "./themeforcreator";

const NoteForm = ({ newCardData, handleInputChange, handleSave }) => {
  return (
    <Box position="relative">
      <IconButton
        onClick={handleSave}
        sx={{ position: "absolute", top: 0, right: 20 }}
      >
        <DoneIcon />
      </IconButton>

      <TextField
        variant="standard"
        margin="normal"
        name="title"
        size="medium"
        label="Add your title here"
        sx={{
          marginTop: "50px",
        }}
        value={newCardData.title}
        onChange={handleInputChange}
        InputProps={{
          style: { fontSize: 46, fontWeight: "bold" },
          disableUnderline: true,
        }}
        InputLabelProps={{
          shrink: false,
          focused: false,
          style: {
            visibility: newCardData.title === "" ? "visible" : "hidden",
            fontSize: 46,
            fontWeight: "bold",
            color: themeforcreator.palette.tertiary.main,
          },
        }}
      />
      <Box
        width="100%"
        maxHeight="250px"
        style={{ overflow: "auto" }}
        marginTop="20px"
      >
        <TextareaAutosize
          name="info"
          value={newCardData.info}
          onChange={handleInputChange}
          placeholder="What's this about?"
          minRows={7}
          fullWidth
          style={{
            width: "90%",
            resize: "none",
            border: "none",
            borderColor: themeforcreator.palette.tertiary.main,
            outline: "none",
            background: "transparent",
            fontSize: "20px",
            borderRadius: "10px",
          }}
        />
      </Box>

      <Box
        height="100%"
        marginY="20px"
        display="flex"
        justifyContent="flex-end"
        flexDirection="column"
      ></Box>
    </Box>
  );
};

export default NoteForm;
