import { createTheme } from "@mui/material";

// Les couleurs utilisées partout dans le projet
export const GOLD      = "#C9A84C";
export const GOLD_LIGHT = "#E8C97A";
export const BEIGE     = "#F5EDD8";
export const DARK      = "#0A0A0A";
export const DARK2     = "#111111";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary:    { main: GOLD, light: GOLD_LIGHT },
    background: { default: DARK, paper: DARK2 },
    text:       { primary: BEIGE, secondary: "rgba(245,237,216,0.6)" },
    divider:    "rgba(201,168,76,0.15)",
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    h1: { fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, letterSpacing: "-1px", lineHeight: 1 },
    h2: { fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, lineHeight: 1.1 },
    h3: { fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 },
    body1:  { fontWeight: 300, lineHeight: 1.9, letterSpacing: "0.5px" },
    button: { letterSpacing: "3px", fontWeight: 400, fontSize: "10px" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root:      { borderRadius: 0, textTransform: "uppercase", fontSize: "10px", letterSpacing: "3px", padding: "14px 36px" },
        contained: { backgroundColor: GOLD, color: DARK, "&:hover": { backgroundColor: GOLD_LIGHT } },
        outlined:  { borderColor: "rgba(245,237,216,0.3)", color: BEIGE, "&:hover": { borderColor: GOLD, color: GOLD, backgroundColor: "transparent" } },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInput-root": {
            color: BEIGE, fontSize: "13px", fontWeight: 300,
            "&:before":       { borderBottomColor: "rgba(245,237,216,0.2)" },
            "&:hover:before": { borderBottomColor: "rgba(245,237,216,0.5)" },
            "&:after":        { borderBottomColor: GOLD },
          },
          "& .MuiInputLabel-root": {
            color: GOLD, fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase",
            "&.Mui-focused": { color: GOLD },
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: { root: { backgroundColor: DARK2, color: BEIGE, fontSize: "13px" } },
    },
  },
});

export default theme;