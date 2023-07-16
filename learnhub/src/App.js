import React, { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import CardView from "./CardView";
import NewExpandedCard from "./NewExpandedCard";

const cardDetailsList = [
  {
    title: "Learn React",
    link: "https://reactjs.org/",
    content: "React is a JavaScript library for building user interfaces.",
    notes: [
      {
        name: "Note 1",
        content: "This is the content of Note 1.",
      },
      {
        name: "Note 2",
        content: "Here's some meaningful content for Note 2.",
      },
    ],
  },
  {
    title: "Learn Redux",
    link: "https://redux.js.org/",
    content: "Redux is a predictable state container for JavaScript apps.",
    notes: [
      {
        name: "Redux Note 1",
        content: "This is the content of Redux Note 1.",
      },
      {
        name: "Redux Note 2",
        content: "Here's some meaningful content for Redux Note 2.",
      },
    ],
  },
  {
    title: "Learn JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    content: "JavaScript is a high-level programming language.",
    notes: [
      {
        name: "JavaScript Note 1",
        content: "This is the content of JavaScript Note 1.",
      },
      {
        name: "JavaScript Note 2",
        content: "Here's some meaningful content for JavaScript Note 2.",
      },
    ],
  },
];

function App() {

  const [selectedCard, setSelectedCard] = useState(null);
  const [newCard, setNewCard] = useState(null);
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleCardClick = (cardDetails) => {
    setSelectedCard(cardDetails);
  };

  const handleExpandedCardClose = () => {
    setSelectedCard(null);
  };

  const handleAddCard = (newCard) => {
    setNewCard(newCard);
  };

  const handleSaveNewCard = (newCardData) => {
    // Save the new card data into the cardDetailsList
    cardDetailsList.push(newCardData);

    // Reset the new card state
    setNewCard(null);
  };

  return (
    <Box>
      <Tabs value={selectedTab} onChange={handleTabChange} centered>
        <Tab label="Home" />
        <Tab label="Create" />
      </Tabs>

      {selectedTab === 0 && (
        <CardView cardDetails={cardDetailsList} onCardClick={handleCardClick} />
      )}
      {selectedTab === 1 && <NewExpandedCard onSave={handleSaveNewCard} />}
    </Box>
  );
}

export default App;
