import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../Context.jsx/CartContext";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartRounded from "@mui/icons-material/ShoppingCartRounded";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import NavBarCartItem from "./NavBarCartItem";
import DeleteIcon from '@mui/icons-material/Delete';

function CartW() {
  const [cartMenu, setCartMenu] = useState(null);
  const [emptyCartMenu, setEmptyCartMenu] = useState(null);

  const { cartQuantity, addedProducts, clear } = useContext(MyContext);

  const handleOpenCartMenu = (event) => {
    if (cartQuantity === 0) {
      return setEmptyCartMenu(event.currentTarget);
    }
    return setCartMenu(event.currentTarget);
  };

  const handleCloseCartMenu = () => {
    setCartMenu(null);
    setEmptyCartMenu(null);
  };

  const handleClearCart = () => {
    handleCloseCartMenu();
    setTimeout(() => {
      clear();
    }, 100); 
  }
  
  return (
    <>
      <Tooltip title="Shopping cart" style={{ cursor: "pointer" }}>
        <IconButton onClick={handleOpenCartMenu}>
          <Badge badgeContent={cartQuantity} color="info">
            <ShoppingCartOutlinedIcon color="action" />
          </Badge>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={emptyCartMenu}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(emptyCartMenu)}
        onClose={handleCloseCartMenu}
      >
        <MenuItem onClick={handleCloseCartMenu}>
          <Typography
            textAlign="center"
            sx={{
              width: 170,
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <span>Your cart is empty</span>
            <SentimentVeryDissatisfiedIcon />
          </Typography>
        </MenuItem>
      </Menu>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={cartMenu}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(cartMenu)}
        onClose={handleCloseCartMenu}
      >
        <MenuItem>
          <Grid container sx={{ width: 310 }} spacing={2}>
            {addedProducts.map((product) => (
              <Grid item xs={12} key={product.id}>
                <NavBarCartItem product={product} />
              </Grid>
            ))}
            <Grid item container xs={12} spacing={2}>
              <Grid item xs={6}>
                <Button
                  variant="text"
                  color="error"
                  startIcon={<DeleteIcon />}
                  onClick={handleClearCart}
                >
                  Clear cart
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Link
                  to="/cart"
                  style={{
                    textDecoration: "none",
                    color: "unset",
                    marginLeft: "5px",
                  }}
                >
                  <Button
                    variant="outlined"
                    color="info"
                    startIcon={<ShoppingCartRounded />}
                    onClick={handleCloseCartMenu}
                  >
                    Checkout
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </MenuItem>
      </Menu>
    </>
  );
}

export default CartW;