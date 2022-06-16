import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import Container from "@mui/material/Container";
import ItemDetail from "./ItemDetail";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ItemDetailContainer = ({ onAdd, onRemove }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [product, setProduct] = useState({});
    const { id } = useParams();

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
        window.scrollTo(0, 0);
        fetch("https://mocki.io/v1/e610ac09-f815-4219-8b0f-32d73743e81d")
            .then((response) => response.json()) // promesa función callback
            .then((result) => {
                setTimeout(() => {
                    const productFiltered = result.find(
                        (productFilter) => productFilter.id === id
                    );

                    if (productFiltered !== undefined) {
                        setProduct(productFiltered);
                    }

                    return setLoading(false);
                }, 20000);//2seg
            })
            .catch((err) => {//error
                setLoading(false);
                handleErrorOpen();
                console.log(err);
            });
    }, [id]);
    return (
        <Container
            maxWidth="xl"
            sx={{
                flexGrow: 1,
                width: "90%",
                margin: "auto",
                mt: { sm: "105px", xs: "55px", md: "55px" },
                minHeight: "80vh",
            }}
        >
            <Grid
                container
                spacing={2}
                sx={{ justifyContent: { xs: "center" }, minHeight: "630px" }}
            >
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
                {!loading && product.length === 0 && (
                    <Navigate to="/notFound" replace={true} />
                )}
                {!loading && (
                    <ItemDetail product={product} onAdd={onAdd} onRemove={onRemove} />
                )}
            </Grid>
        </Container>
    );
};

export default ItemDetailContainer;