import React, { useState } from "react";
import {
  Box,
  Divider,
  IconButton,
  TextField,
  TextareaAutosize,
  Fab,
  Button,
  Typography,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import NoteContainer from "./NoteContainer";
import NoteButton from "./NoteButtonv2";
import ImageImporter from "./ImageImporter";
import { ThemeProvider } from "@mui/material/styles";
import themeforcreator from "./themeforcreator";
import LinkContainer from "./LinkContainer";
import LinkButton from "./LinkButton";
import FormButton from "./FormButton";
import AddIcon from "@mui/icons-material/Add";
import theme from "./themeforcreator";
import ExpandableNoteForm from "./ExpandableNoteForm";
import ExpandableLinkForm from "./ExpandableLinkForm";

const NewExpandedCard = ({ onSave }) => {
  const [newCardData, setNewCardData] = useState({
    title: "",
    info: "",
    link: "",
    notes: [],
    links: [],
    image: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCardData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddLink = (link) => {
    setNewCardData((prevData) => ({
      ...prevData,
      links: [...prevData.links, link],
    }));
  };

  const handleRemoveLink = (index) => {
    setNewCardData((prevData) => {
      const updatedLinks = [...prevData.links];
      updatedLinks.splice(index, 1);
      return { ...prevData, links: updatedLinks };
    });
  };

  const handleAddNote = (note) => {
    setNewCardData((prevData) => ({
      ...prevData,
      notes: [...prevData.notes, note],
    }));
  };

  const handleRemoveNote = (index) => {
    setNewCardData((prevData) => {
      const updatedNotes = [...prevData.notes];
      updatedNotes.splice(index, 1);
      return { ...prevData, notes: updatedNotes };
    });
  };

  const handleSave = () => {
    onSave(newCardData);
    console.log(newCardData);
  };

  return (
    <ThemeProvider theme={themeforcreator}>
      <Box
        margin={3}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
      >
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "30% 70%", // Adjust the percentages as desired
            gap: "20px",
            overflow: "hidden",
            height: "500px",
          }}
        >
          <ImageImporter />
          <FormButton
            newCardData={newCardData}
            handleInputChange={handleInputChange}
            handleSave={handleSave}
          />
        </Box>

        <Box
          width={"100%"}
          height={"250px"}
          display="flex"
          flexDirection={"row"}
          justifyContent={"center"}
          padding={"30px 0px"}
          sx={{
            gap: "20px",
          }}
        >
          <ExpandableNoteForm onNoteAdd={handleAddNote}/>
          <ExpandableLinkForm onLinkAdd={handleAddLink}/>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default NewExpandedCard;
