import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ItemListContainer from "../items/ItemListContainer";
import { getCategory } from "../../firebase/TstItem";

const CategoryListContainer = () => {
    const [category, setCategory] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getCategory(id)
            .then(category => setCategory(category))
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    return (
        <Container
            maxWidth="xl"
            sx={{
                flexGrow: 1,
                mt: { sm: "105px", xs: "55px", md: "15px" },
            }}>
            <Box
                sx={{
                    width: "100%"
                }}
                component="img"
                alt={category.name}
                src={category.banner_image}
            />
            <ItemListContainer category={id} />
        </Container>
    )
}

export default CategoryListContainer