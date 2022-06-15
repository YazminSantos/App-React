import React, {useState} from "react";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const cartSettings = ["Ver carrito", "Check"];

function CartWidget({ quantity }) {
  const [cartMenu, setCartMenu] = useState(null);
  const [emptyCartMenu, setEmptyCartMenu] = useState(null);

  const handleOpenCartMenu = (event) => {
    if(quantity === 0){
      return setEmptyCartMenu(event.currentTarget);
    }
    return setCartMenu(event.currentTarget);
  };

  const handleCloseCartMenu = () => {
    setCartMenu(null);
    setEmptyCartMenu(null);
  };
  return (
    <>
      <Tooltip title="Shopping cart" style={{ cursor: "pointer" }} >
        <IconButton  onClick={handleOpenCartMenu} >
          <Badge badgeContent={quantity} color="info"  >
            <ShoppingCartOutlinedIcon color="primary" />
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
        <Typography textAlign="center" sx={{width:170,display:"flex",justifyContent:"space-around", alignItems:"center"}}><span>Your cart is empty</span><SentimentVeryDissatisfiedIcon/></Typography>
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
        {cartSettings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseCartMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default CartWidget;