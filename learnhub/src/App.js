import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import ExpandedCard from "./ExpandedCard";
import CardView from "./CardView";

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

  const handleCardClick = (cardDetails) => {
    setSelectedCard(cardDetails);
  };

  const handleExpandedCardClose = () => {
    setSelectedCard(null);
  };

  return (
    <Box>
      {selectedCard ? (
        <ExpandedCard
          cardDetails={selectedCard}
          onClose={handleExpandedCardClose}
        />
      ) : (
        <CardView cardDetails={cardDetailsList} onCardClick={handleCardClick} />
      )}
    </Box>
  );
}

export default App;

