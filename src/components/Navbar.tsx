import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";

import NavbarLogo from "../assets/GDGNavbarLogo.svg";

const style = {
  root: {
    background: "#FFF",
  },
  navbar: {
    padding: "1rem",
  },
};

function Navbar() {
  return (
    <AppBar sx={style.root}>
      <Container maxWidth="xl" sx={style.navbar}>
        <Toolbar disableGutters>
          <img src={NavbarLogo} alt="GDG Logo" />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
