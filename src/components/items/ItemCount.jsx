import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ItemCount({
  stock = 10,
  initial = 1,
  addItem,
  removeItem,
}) {
  const addQuantity = () => {
    if (initial < stock) {
      addItem();
    } else {
      handleOpen();
    }
  };

  const subtractQuantity = () => {
    if (initial > 1) {
      removeItem();
    }
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (_event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        width:"75%",
        margin: "0 auto",
        alignItems: "center",
        justifyContent: "space-between",
        "& > *": {
          m: 1,
        },
      }}
    >
      <IconButton
        key="remove"
        aria-label="upload picture"
        component="span"
        onClick={subtractQuantity}
      >
        <RemoveCircleOutlineOutlinedIcon />
      </IconButton>
      <Box
        sx={{
          width: "45px",
          height: "45px",
          border: "1px solid",
          borderRadius: "50%",
          borderColor: "info.main",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 15
        }}
      >
        {initial}
      </Box>
      <IconButton
        key="add"
        aria-label="upload picture"
        component="span"
        onClick={addQuantity}
      >
        <AddCircleOutlineOutlinedIcon />
      </IconButton>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          There are not more products in stock
        </Alert>
      </Snackbar>
    </Box>
  );
}