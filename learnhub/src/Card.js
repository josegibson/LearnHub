import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";

const FocusModal = ({ hovered }) => (
  <Box
    sx={{
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      flexDirection: "column",
      alignItems: "left",
      justifyContent: "flex-end",
      transition: "background-color 0.5s",
    }}
  >
    <Box backgroundColor="#ffffff" borderRadius={"20px"} margin={"6px"}>
      <Typography
        color="text.secondary"
        align="center"
        sx={{
          color: "#000000",
          padding: "10px",
          fontSize: "12px",
          fontWeight: "bold",
        }}
      >
        Link to More Info
      </Typography>
    </Box>
  </Box>
);

export default function CardComponent({ title, content, onClick }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <Card
      sx={{
        maxWidth: 200,
        borderRadius: "20px",
        filter: hovered ? "brightness(1)" : "brightness(1)",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {hovered && <FocusModal hovered={hovered} />}

      <CardHeader
        title={title}
        titleTypographyProps={{ fontSize: "16px", align: "left" }}
      />

      <CardContent>
        <Typography color="text.primary" fontSize={12} align="left">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}
