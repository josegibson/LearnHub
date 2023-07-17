import React from "react";
import { Box, Paper, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const NoteBox = ({ note, index, handleRemoveNote }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    handleRemoveNote(index);
  };

  return (
    <Box display="flex" alignItems="center">
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: "10px",
          bgcolor: "transparent",
          border: "2px solid",
          borderColor: "tertiary.main",
          gap: "7px",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding='20px'
        >
          <Typography fontWeight={"bold"} fontSize={16} color={"primary.main"}>
            {note.topic}
          </Typography>
          <IconButton
            TouchRippleProps={{ style: { color: "transparent" } }}
            sx={{
              color: "tertiary.main",
              fontSize: "20px",
              ":hover": {
                bgcolor: "secondary.main",
                color: "primary.main",
              },
            }}
            onClick={handleClick}
          >
            <CloseIcon fontSize={"inherit"} />
          </IconButton>
        </Box>
        <Typography fontSize={15} color={"primary.main"} padding={'0px 20px'}>
          {note.content}
        </Typography>
      </Paper>
    </Box>
  );
};

export default NoteBox;
