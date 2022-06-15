import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingCartRounded from "@mui/icons-material/ShoppingCartRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import ItemCount from "./ItemCount";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Item({ product, onAdd, onRemove }) {
  const [showAdd, setShowAdd] = useState(true);
  const [countItem, setCountItems] = useState(1);
  const [stockError, setStockError] = useState(false);
  const { id, title, description_short, pictureUrl, price, stock } = product;
  const detailUrl = `/item/${id}`;

  const handleOpenStockError = () => {
    setStockError(true);
  };

  const handleCloseStockError = (_event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setStockError(false);
  };

  const handleAddToCart = () => {
    if (stock >= countItem) {
      setShowAdd(false);
      onAdd(countItem);
    } else {
      handleOpenStockError();
    }
  };

  const handleRemove = () => {
    setShowAdd(true);
    onRemove(countItem);
  };

  const handleAddItem = () => {
    setCountItems(countItem + 1);
  };

  const handleRemoveItem = () => {
    if (countItem > 0) {
      setCountItems(countItem - 1);
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt={title} height="240" image={pictureUrl} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description_short}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            mt: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {`$${price}`}
          {showAdd && (
            <ItemCount
              stock={stock}
              initial={countItem}
              addItem={handleAddItem}
              removeItem={handleRemoveItem}
            />
          )}
        </Typography>
      </CardContent>

      <CardActions>
        {showAdd ? (
          <>
            <Button
              variant="outlined"
              color="info"
              startIcon={<ShoppingCartRounded />}
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
            <Link
              to={detailUrl}
              style={{ textDecoration: "none", color: "unset", marginLeft: "5px" }}
            >
              <Button size="small" color="info">
                See More
              </Button>
            </Link>
          </>
        ) : (
          <>
            <Button
              variant="contained"
              color="warning"
              startIcon={<DeleteIcon />}
              onClick={handleRemove}
            >
              Remove
            </Button>
            <Link
              to="/cart"
              style={{
                textDecoration: "none",
                color: "unset",
                marginLeft: "5px",
              }}
            >
              <Button
                variant="contained"
                color="info"
                startIcon={<ShoppingCartRounded />}
              >
                See full cart
              </Button>
            </Link>
          </>
        )}
      </CardActions>
      <Snackbar
        open={stockError}
        autoHideDuration={2000}
        onClose={handleCloseStockError}
      >
        <Alert
          onClose={handleCloseStockError}
          severity="warning"
          sx={{ width: "100%" }}
        >
          Ups! There are not more products in stock
        </Alert>
      </Snackbar>
    </Card>
  );
}