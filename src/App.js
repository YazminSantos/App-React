import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from './components/Card/cart';
import CategoriesListC from './components/Categories/CategoriesListC';
import CartContext from './components/Context.jsx/CartContext';
import CategoryListContainer from './components/items/CategoryListContainer';
import ItemDetailContainer from './components/items/ItemDetailContainer';
import ItemListContainer from "./components/items/ItemListContainer";
import MainLanding from "./components/MainL/MainLanding";
import NavBar from './components/NavBar';
import NotFound from "./components/NotFound/NotFound";
import Footer from "./Footer/Footer";
import { initializeApp } from "firebase/app";
import TstItem from "./firebase/TstItem";
//SHIFT+ALT+O PARA ORDENAR LOS IMPORTS

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


// Initialize Firebase


  function App() {
    const firebaseConfig= {
      apiKey: "AIzaSyBZAvGWxrFTmSwiHY4qASb1roz6xW5UE8I",
      authDomain: "appreact-31b16.firebaseapp.com",
      projectId: "appreact-31b16",
      storageBucket: "appreact-31b16.appspot.com",
      messagingSenderId: "448274144916",
      appId: "1:448274144916:web:08ecce961d0e83183e9e81"
  } ;
 
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
