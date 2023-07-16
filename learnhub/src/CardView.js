import React from "react";
import { Box, Button } from "@mui/material";
import { Masonry } from "@mui/lab";
import CardComponent from "./Card";
import NewCard from "./NewCard";

const CardView = ({ cardDetails, onCardClick }) => {

  return (
    <Box sx={{ padding: "30px" }}>
      <Masonry columns={4} spacing={2}>
        {cardDetails.map((card, index) => (
          <CardComponent
            key={index}
            title={card.title}
            content={card.content}
            onClick={() => onCardClick(card)}
          />
        ))}
      </Masonry>
    </Box>
  );
};

export default CardView;
