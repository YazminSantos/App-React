import React from 'react'
import { Box, Container } from '@mui/material'

const Footer = () => {
    return (
        <Box sx={{
            
            backgroundColor: "#272727",
            boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)"
        }}>
            <Container maxWidth="xl" sx={{
                mt: 5,
                background:"linear-gradient(#e66465, #9198e5);",
                height: 85,
            }}>
                <Box sx={{display: "flex", justifyContent: "left", alignItems: "center", height: "100%" , color: 'white'}}>
                    Created by Yazmín Santos
                </Box>
            </Container>
        </Box>
    )
}

export default Footer