import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/items/ItemListContainer";
import ItemDetailContainer from './components/items/ItemDetailContainer';
import MainLanding from "./components/MainL/MainLanding";
import CategoryListContainer from './components/items/CategoryListContainer';
import CategoriesListC from './components/Categories/CategoriesListC';
import NavBar from './components/NavBar';
import Footer from "./Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import Cart from './components/Card/cart';
import CartContext from './components/Context.jsx/CartContext';





  function App() {
    
 
  return (
    <CartContext>
      <Router>
        
          <NavBar />
          <Routes>
            <Route path="/" element={<MainLanding />} />
            <Route path="/pieces" element={<ItemListContainer />} />
            <Route path="/categories" element={<CategoriesListC />} />
            <Route path="/category/:id" element={<CategoryListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        <br />
          <Footer />
        
      </Router>
      </CartContext>  
    



  );
}

export default App;
