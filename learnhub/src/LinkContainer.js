import React from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import LinkButton from "./LinkButton";
import CloseIcon from "@mui/icons-material/Close";

const LinkContainer = ({ links, onLinkAdd }) => {
  const extractDomain = (link) => {
    const url = new URL(link);
    return url.hostname;
  };

  const extractPageName = (link) => {
    const url = new URL(link);
    return url.pathname;
  };

  const handleRemoveLink = (index) => {
    // TODO: Implement the logic to remove the link from the array
    const links = [...this.state.links];
    links.splice(index, 1);
    this.setState({ links });
  };

  return (
    <Box
      bgcolor={"#f5f5f5"}
      padding={1}
      borderRadius={"10px"}
      minHeight={"400px"}
      width={"450px"}
    >
      <LinkButton onLinkAdd={onLinkAdd} />
      <Box>
        {links.length > 0 && (
          <Box display={"flex"} flexDirection={"column"}>
            {links.map((link, index) => (
              <Button
                key={index}
                startIcon={<LinkIcon />}
                endIcon={
                  <CloseIcon
                    onClick={() => {
                      handleRemoveLink(index);
                    }}
                  />
                }
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "10px",
                  width: "100%",
                  textTransform: "none",
                  padding: "10px 20px",
                  borderRadius: "10px",
                  justifyContent: "space-between", // Aligns the link icon to the left and close icon to the right
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography align="left">{extractDomain(link)}</Typography>
                  <Typography
                    variant="caption"
                    className="pageName"
                    sx={{
                      color: "inherit",
                      paddingX: "10px",
                    }}
                  >
                    {extractPageName(link)}
                  </Typography>
                </Box>
              </Button>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default LinkContainer;
