import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import CartWidget from "./CartWidget";
import NavBar1 from "./NavBar1";
import LOGO from '../imgs/LOGO.jpg'

const NavBarDesktop = ({ pages, settings, cartQuantity }) => {
  return (
    <Toolbar
      disableGutters
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Link to="/">
        <Box style={{border:'double',borderColor:'#0EF9CE'}}
          component="img"
          sx={{
            height: 60,
            display: { xs: "none", md: "flex" },
          }}
          alt="logo"
          src={LOGO}
        />
      </Link>

      <Box sx={{ ml: 2, flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {pages.map((page, index) => (
          <div key={index}>
            {page.link_desktop}
          </div>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: 90,
        }}
      >
        <Box>
          <CartWidget quantity={cartQuantity} />
        </Box>
        <Box>
          <NavBar1 avatarSettings={settings} />
        </Box>
      </Box>
    </Toolbar>
  );
};

export default NavBarDesktop;