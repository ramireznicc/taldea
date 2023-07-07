import { createTheme } from "@mui/material/styles";

export const Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ACBE47",
    },
    secondary: {
      main: "#efffcc",
    },
    third: {
      main: "#D1EE67",
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
