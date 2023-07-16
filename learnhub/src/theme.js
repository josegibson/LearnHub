import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000", // Black color for primary elements
    },
    secondary: {
      main: "#ffffff", // White color for secondary elements
    },
    greyed: {
      dark: '#888888',
      normal : '#dbdbdb',
      light: '#f5f5f5'
    }
  },
});

export default theme;
