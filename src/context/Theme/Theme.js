import { createTheme } from "@mui/material/styles";

export const Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#aabd49",
    },
    secondary: {
      main: "#efffcc",
    },
    background: {
      default: "#282828",
      paper: "#282828",
    },
    text: {
      primary: "#eee",
    },
  },
  typography: {
    fontFamily: "Lato",
  },
});
