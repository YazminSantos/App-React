import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from '../../firebase/TstItem';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const CategoriesListC = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then((result) => {
                return setCategories(result);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

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
            {categories.map((category) => (
                <Link to={("/category/")+category.key} key={category.id}>
                    <Box
                        sx={{
                            width:"100%"
                        }}
                        component="img"
                        alt={category.name}
                        src={category.banner_image}
                    />
                </Link>
            ))}
        </Container>

    );
};

export default CategoriesListC;