import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Container from "@mui/material/Container";

function OpenBannerD() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://mocki.io/v1/78ba0041-2320-4720-adee-d275ba062cd2")
            .then((response) => response.json())
            .then((result) => {
                setCategories(result);
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
                mt: { sm: "105px", xs: "55px", md: "15px" },
            }}>
            <Carousel showThumbs={false} showStatus={false} showArrows={false} emulateTouch={true} transitionTime={1500} autoPlay={true} interval={6500}>
                {categories.map((category, index) =>
                (
                    <Link to={("/category/") + category.id} key={index}>
                        <div>
                            <img src={category.banner_image} alt={category.name} />
                        </div>
                    </Link>
                )
                )}
            </Carousel>
        </Container>
    );
}

export default OpenBannerD;