import React, { useState, useContext } from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ItemCount from '../items/ItemCount';
import { MyContext } from '../Context.jsx/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';

const CartItem = ({ product }) => {
    const [countItem, setCountItem] = useState(product.quantity);
    const { onRemove, addQuantity, removeQuantity } = useContext(MyContext);

    const handleAddItem = () => {
        setCountItem(countItem + 1);
        addQuantity(product.id);
    };

    const handleRemoveItem = () => {
        if (countItem > 0) {
            setCountItem(countItem - 1);
            removeQuantity(product.id);
        }
    }

    return (
        <>
            <Grid container sx={{mt: 5, mb: 1, display: { xs: "none", md: "flex" }, justifyContent:"center" }}>
                <Card sx={{ display: 'flex', width: "100%" }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 250 }}
                        image={product.picture_url}
                        alt={product.title}
                    />
                    <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", width: "100%", pr: 3 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="body1">
                                    {product.title}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    {product.description_short}
                                </Typography>
                                <Typography variant="subtitle1" color="body2" component="div" sx={{mt:2}}>
                                    {`${countItem} x $${product.price} - $${countItem * product.price}`}
                                </Typography>
                            </CardContent>
                        </Box>
                        <Box sx={{ width: "350px" }}>
                            <ItemCount
                                stock={product.stock}
                                initial={countItem}
                                addItem={handleAddItem}
                                removeItem={handleRemoveItem}
                            />
                        </Box>
                        <Box>
                            <IconButton color="error" aria-label="delete" onClick={() => onRemove(product.id)}>
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Card>
            </Grid>
        </>
    )
}

export default CartItem