import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";

const ConfirmationDialog = ({ onConfirm, onCancel }) => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    backgroundColor="#f8f8f8"
    padding={2}
  >
    <Typography>Are you sure you want to cancel?</Typography>
    <Box display="flex" justifyContent="flex-end" marginTop={2} gap={1}>
      <IconButton onClick={onConfirm}>
        <CheckIcon sx={{ color: "black" }} />
      </IconButton>
      <IconButton onClick={onCancel}>
        <CloseIcon sx={{ color: "black" }} />
      </IconButton>
    </Box>
  </Box>
);

const Note = ({ noteDetails, onClose }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleCancel = () => {
    setShowConfirmation(true);
  };

  const handleConfirmCancel = () => {
    onClose();
  };

  return (
    <Card sx={{ borderRadius: "16px", width: "300px" }}>
      {showConfirmation ? (
        <ConfirmationDialog
          onConfirm={handleConfirmCancel}
          onCancel={() => setShowConfirmation(false)}
        />
      ) : (
        <>
          <Box display="flex" justifyContent="space-between" padding={1}>
            <Typography fontSize={16} padding={1} fontWeight="bold">
              {noteDetails.name}
            </Typography>
            <IconButton onClick={handleCancel}>
              <CloseIcon sx={{ fontSize: 24, color: "black" }} />
            </IconButton>
          </Box>
          <CardContent>
            <Box>
              <Typography fontSize={16}>{noteDetails.content}</Typography>
            </Box>
          </CardContent>
        </>
      )}
    </Card>
  );
};

export default Note;
