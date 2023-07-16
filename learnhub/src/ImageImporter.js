import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Button, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ImageUploader = ({ onFileUpload }) => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        const imageURL = URL.createObjectURL(file);
        setUploadedImage(imageURL);
        onFileUpload(file);
      }
    },
    [onFileUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleDeleteImage = (e) => {
    e.stopPropagation();
    setUploadedImage(null);
  };

  return (
    <Box
      sx={{
        width: "50%",
        display: "flex",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "secondary.main",
        height: "calc(100% - 40px)",
      }}
    >
      <Box
        {...getRootProps()}
        sx={{
          width: "100%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderStyle: "dashed",
          borderWidth: "2px",
          borderRadius: "10px",
          borderColor: isDragActive
            ? "primary.main"
            : uploadedImage
            ? "transparent"
            : "tertiary.main",
          cursor: "pointer",
          overflow: "hidden",
        }}
      >
        <input {...getInputProps()} />
        {uploadedImage ? (
          <>
            <img
              src={uploadedImage}
              alt="Uploaded"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />

            <IconButton
              onClick={handleDeleteImage}
              sx={{
                position: "absolute",
                top: "8px",
                right: "8px",
                backgroundColor: "tertiary.main",
                ":hover": { backgroundColor: "secondary.main" },
              }}
            >
              <DeleteIcon />
            </IconButton>
          </>
        ) : (
          <Typography
            variant="body1"
            color="primary.main"
            align="center"
            padding={5}
          >
            {isDragActive
              ? "Drop here"
              : "Drag and drop or click to upload the image here"}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ImageUploader;
