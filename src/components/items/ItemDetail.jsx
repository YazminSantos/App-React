import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ItemDetailDescription from "./ItemDetailDescription.jsx";

const ItemDetail = ({ product, onAdd, onRemove }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid
                container
                spacing={2}
                sx={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                    mt: 3,
                }}
            >
                <Grid
                    item
                    sm={10}
                    md={4}
                    sx={{
                        display: "flex",
                        justifyContent: "left",
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={{
                            width: {
                                xs: "90%",
                                sm: 400,
                            },
                        }}
                        component="img"
                        alt={product.title}
                        src={product.pictureUrl}
                    />
                </Grid>
                <Grid
                    item
                    sm={10}
                    md={4}
                    sx={{
                        display: "flex",
                        justifyContent: "left",
                        alignItems: "center",
                    }}
                >
                    <ItemDetailDescription
                        product={product}
                        onAdd={onAdd}
                        onRemove={onRemove}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default ItemDetail;