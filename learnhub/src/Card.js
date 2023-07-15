import React, { useState } from "react";
import { Paper, CardContent, CardHeader, Typography } from "@mui/material";

export default function CardComponent({ title, content, onClick }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <Paper
      elevation={hovered ? 4 : 1}
      sx={{
        maxWidth: 200,
        borderRadius: "20px",
        transition: "box-shadow 0.3s",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <CardHeader
        title={title}
        titleTypographyProps={{ fontSize: "16px", align: "left" }}
      />

      <CardContent>
        <Typography color="text.primary" fontSize={12} align="left">
          {content}
        </Typography>
      </CardContent>
    </Paper>
  );
}
