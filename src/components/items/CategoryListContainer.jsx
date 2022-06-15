import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ItemListContainer from "./ItemListContainer";

const CategoryListContainer = ({ onAdd, onRemove }) => {
    const [category, setCategory] = useState({});
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
        fetch("https://mocki.io/v1/78ba0041-2320-4720-adee-d275ba062cd2")
            .then((response) => response.json())
            .then((result) => {
                const categoryFiltered = result.filter(category => category.id === +id);

                if (Object.keys(categoryFiltered).length !== 0) {
                    setCategory(categoryFiltered[0]);
                }

            })
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
            <ItemListContainer onAdd={onAdd} onRemove={onRemove} category={id} />
        </Container>
    )
}

export default CategoryListContainer