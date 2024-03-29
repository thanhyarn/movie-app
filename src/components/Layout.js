import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Link } from "react-router-dom";
import logoImg from "../logo.png";
import { styled } from "@mui/system";
import SearchMoviesSuggestion from "../containers/SearchResults";
import Navbar from "./Navbar";

const Img = styled("img")({
  marginLeft: "auto",
  marginRight: "auto",
  display: "block",
  width: 500,
  maxWidth: "100%",
});

const LayoutWrapper = styled("div")(({ theme }) => ({
  margin: 12,
  width: "auto",
  [theme.breakpoints.up("lg")]: {
    marginLeft: "auto",
    marginRight: "auto",
    width: theme.breakpoints.values.lg,
  },
}));

const Layout = ({ children, theme, setTheme }) => {
  return (
    <>
      <div className={`container ${theme}`}>
        <CssBaseline />
        {/* <LayoutWrapper> */}
        <Navbar theme={theme} setTheme={setTheme} />
        {children}
        {/* </LayoutWrapper> */}
      </div>
    </>
  );
};

export default Layout;
