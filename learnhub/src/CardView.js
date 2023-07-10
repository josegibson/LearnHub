import React from "react";
import { Box } from "@mui/material";
import { Masonry } from "@mui/lab";
import CardComponent from "./Card";


const CardView = ({ cardDetails, onCardClick }) => (
  <Box sx={{ padding: "10px" }}>
    <Masonry columns={4} spacing={2}>
      {(cardDetails).map((card, index) => (
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

export default CardView;
