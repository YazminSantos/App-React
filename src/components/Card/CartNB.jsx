import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { MyContext } from '../Context.jsx/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const CartNB = ({ product }) => {
    const { onRemove } = useContext(MyContext);

    
    return (
        <Card sx={{ display: 'flex', justifyContent: "space-between" }}>
            <CardMedia
                component="img"
                sx={{ width: 90 }}
                image={product.picture_url}
                alt={product.title}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="body1">
                        {product.title}
                    </Typography>
                    <Typography variant="subtitle1" color="body2" component="div" sx={{ mt: 1 }}>
                        {`${product.quantity} x $${product.price} - $${product.quantity * product.price}`}
                    </Typography>
                </CardContent>
            </Box>
            <Box sx={{alignSelf:"center", mr:1}}>
                <IconButton color="error" aria-label="delete" onClick={() => onRemove(product.id)}>
                    <DeleteIcon />
                </IconButton>
            </Box>
        </Card>
    )
}

export default CartNB