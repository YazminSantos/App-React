import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ItemList from "./ItemList";

const ItemListContainer = ({ category = null }) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        flexGrow: 1,
        width: "90%",
        margin: "auto",
        mt: { sm: "105px", xs: "55px", md: "15px" },
        minHeight: "85vh"
      }}
    >
      <Grid container spacing={2} sx={{ justifyContent: { xs: "center" }, minHeight: "630px" }}>
        <ItemList category={category} />
      </Grid>
    </Container>
  );
};

export default ItemListContainer;


