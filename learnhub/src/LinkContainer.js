import React from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import LinkButton from "./LinkButton";
import LinkBox from "./LinkBox";
import CloseIcon from "@mui/icons-material/Close";

const LinkContainer = ({ links, onLinkAdd, onLinkRemove }) => {

  return (
    <Box
      bgcolor={"#f5f5f5"}
      padding={1}
      borderRadius={"10px"}
      height={"calc(100% - 20px)"}
      width={"30%"}
    >
      <LinkButton onLinkAdd={onLinkAdd} />
      <Box>
        {links.length > 0 && (
          <Box display={"flex"} flexDirection={"column"}>
            {links.map((link, index) => (
              <LinkBox
                key={index}
                link={link}
                index={index}
                handleRemoveLink={onLinkRemove}
              />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default LinkContainer;
