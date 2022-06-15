import React from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const NotFound = () => {
  return (
    <Container sx={{display:"flex",justifyContent:"center",alignItems:"center", minHeight:"85vh"}}>
        <Box
          component="img"
          sx={{
            height: "100%",
            margin: "0 auto"
          }}
          alt="Page not found"
          src="/notFound.png"
        />
    </Container>
  )
}

export default NotFound