import MuiAlert from "@mui/material/Alert";
import { Navigate  } from "react-router-dom";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Snackbar from "@mui/material/Snackbar";
import React, { useEffect, useState } from "react";
import Item from "./Item";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ItemList({ onAdd, onRemove, category }) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [products, setProducts] = useState([]);

    const handleErrorOpen = () => {
        setError(true);
    };

    const handleErrorClose = (_event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setError(false);
    };

    useEffect(() => {
        fetch("https://mocki.io/v1/e610ac09-f815-4219-8b0f-32d73743e81d")
            .then((response) => response.json())
            .then((result) => {
                setTimeout(() => {
                    if (category === false) {
                        setLoading(false);
                        return setProducts(result);
                    }

                    const categoryProducts = result.filter(product => product.category_id === +category);
                    
                    setLoading(false);
                    return setProducts(categoryProducts);
                }, 2000);
            })
            .catch((err) => {
                setLoading(false);
                handleErrorOpen();
                console.log(err);
            });
    }, [category]);

    return (
        <>
            {loading && (
                <Box sx={{ mt: "55px", display: "flex" }}>
                    <CircularProgress color="info" />
                </Box>
            )}
            {error && (
                <Snackbar
                    open={error}
                    autoHideDuration={5000}
                    onClose={handleErrorClose}
                >
                    <Alert
                        onClose={handleErrorClose}
                        severity="error"
                        sx={{ width: "100%" }}
                    >
                        Sorry, something happened loading the products
                    </Alert>
                </Snackbar>
            )}
            {(!loading && (products.length === 0)) && (
                <Navigate to="/notFound" replace={true} />
            )}
            {products &&
                products.map((product) => (
                    <Grid
                        item
                        sm={6}
                        md={4}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        key={product.id}
                    >
                        <Item product={product} onAdd={onAdd} onRemove={onRemove} />
                    </Grid>
                ))}
        </>
    );
}