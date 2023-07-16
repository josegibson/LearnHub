import React, { useState } from "react";
import { Box, Divider, IconButton, TextField, TextareaAutosize } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import NoteContainer from "./Notes/NoteContainer";
import ImageImporter from "./ImageImporter";
import LinkButton from "./LinkButton";
import { ThemeProvider } from "@mui/material/styles";
import themeforcreator from "./themeforcreator";
import LinkContainer from "./LinkContainer";

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
        alignItems={"center"}
        height={"900px"}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            borderRadius: "20px",
            width: "60%",
            overflow: "hidden",
            height: "500px",
          }}
        >
          <ImageImporter />
          <Box sx={{ width: "60%", padding: "0px 3px 3px 22px" }}>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <IconButton onClick={handleSave}>
                <DoneIcon />
              </IconButton>
            </Box>

            <TextField
              variant="standard"
              margin="normal"
              name="title"
              size="medium"
              label="Add your title here"
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
            <TextField
              variant="standard"
              margin="normal"
              name="info"
              size="medium"
              label="What's this about?"
              fullWidth
              value={newCardData.info}
              onChange={handleInputChange}
              InputProps={{ style: { fontSize: 24 }, disableUnderline: true }}
              InputLabelProps={{
                shrink: false,
                focused: false,

                style: {
                  visibility: newCardData.info === "" ? "visible" : "hidden",
                  fontSize: 24,
                  color: themeforcreator.palette.tertiary.main,
                },
              }}
            />
            <Box
              height="100%"
              marginY={"20px"}
              display={"flex"}
              justifyContent={"flex-end"}
              flexDirection={"column"}
            ></Box>
          </Box>
        </Box>
        <Box display="flex" 
        flexDirection={"row"}
        width={'100%'}
        justifyContent={'space-between'}
        alignItems={'center'}
        padding={'30px'}>
          <NoteContainer notes={newCardData.notes} />
          <LinkContainer links={newCardData.links} onLinkAdd={handleAddLink} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default NewExpandedCard;
