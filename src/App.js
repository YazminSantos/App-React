import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/items/ItemListContainer";
import ItemDetailContainer from './components/items/ItemDetailContainer';
import MainLanding from "./components/MainL/MainLanding";
import CategoryListContainer from './components/items/CategoryListContainer';
import CategoriaListC from './components/Categories/CategoriaListC';
import NavBar from './components/NavBar';
import Footer from "./Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import Cart from './components/Card/cart';





  function App() {
    const [cartQuantity, setCartQuantity] = useState(0);
  
    const handleAddCartQuantity = (count) => {
      setCartQuantity(cartQuantity + count);
    }
  
    const handleRemoveCartQuantity = (count) => {
      setCartQuantity(cartQuantity - count);
    }
 
  return (

    <div>
      
      <Router>
        
          <NavBar cartQuantity={cartQuantity} />
          <Routes>
            <Route path="/" element={<MainLanding onAdd={handleAddCartQuantity} onRemove={handleRemoveCartQuantity} />} />
            <Route path="/HOME" element={<ItemListContainer onAdd={handleAddCartQuantity} onRemove={handleRemoveCartQuantity} />} />
            <Route path="/categories" element={<CategoriaListC />} />
            <Route path="/category/:id" element={<CategoryListContainer onAdd={handleAddCartQuantity} onRemove={handleRemoveCartQuantity} />} />
            <Route path="/item/:id" element={<ItemDetailContainer onAdd={handleAddCartQuantity} onRemove={handleRemoveCartQuantity} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        <br />
          <Footer />
        
      </Router>
       
    </div>



  );
}

export default App;
