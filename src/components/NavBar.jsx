import LOGO from '../imgs/LOGO.jpg'
//import CartWidget from './CartWidget'

import React from "react";
import { Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import NavBarMobile from "./NavBarMob";
import NavBarDesktop from "./NavBarDesk";


const LinkWithoutDec = (props)=>{
  return <Link {...props} style={{textDecoration:"none", color:"unset"}}></Link>
};

const pages = [
  {
    link: <LinkWithoutDec to="/PIECES">PIECES</LinkWithoutDec>,
    link_desktop: <Button sx={{ my: 2, color: "white", display: "block" }}><LinkWithoutDec to="/PIECES">PIECES</LinkWithoutDec></Button>
  },
  {
    link: <LinkWithoutDec to="/categories">Categories</LinkWithoutDec>,
    link_desktop: <Button sx={{ my: 2, color: "white", display: "block" }}><LinkWithoutDec to="/categories">Categories</LinkWithoutDec></Button>
  },
  {
    link: <LinkWithoutDec to="/about">About us</LinkWithoutDec>,
    link_desktop: <Button sx={{ my: 2, color: "white", display: "block" }}><LinkWithoutDec to="/about">About us</LinkWithoutDec></Button>
  },
];
const settings = ["Profile", "Logout"];

const NavBar = ({cartQuantity}) => {
  return (
    <>
      <CssBaseline />
      <AppBar position="static" style={{background:'black'}}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: { sm: "flex", md: "none" },
            }}
          >
            <NavBarMobile navPages={pages} cartQuantity={cartQuantity} />
          </Box>
          <Box
            sx={{
              display: { sm: "none", md: "block" },
            }}
          >
            <NavBarDesktop
              pages={pages}
              settings={settings}
              cartQuantity={cartQuantity}
            />
          </Box>
        </Container>
      </AppBar>
    </>
  );
};
export default NavBar;