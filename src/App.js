// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home/Home';
import ProductCards from './components/services/ProductCards';
import Product from './components/services/Product';
import Contact from './components/contact/Contect';
import About from './components/about/About';
import Signup from './components/signup/Signup';
import Login from './components/signup/Login';
import Cart from './components/cart/Cart';
import ProductDetail from './components/services/ProductDetail';
import Footer  from './components/footer/Footer';
import FAQ from './components/terms/FAQ';
import PrivacyPolicy from './components/terms/Privacy-policy';
import Men from './components/Catagories/Men';
import Women from './components/Catagories/WoMen';
import Kids from './components/Catagories/Kids';
import ProtectedRoutes from "./components/portectRoute/ProtectedRoutes"

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/policy" element={<PrivacyPolicy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Product />} />
          <Route path="/mens" element={<Men />} />
          <Route path="/women" element={<Women/>} />
          <Route path="/kids" element={<Kids/>} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<ProtectedRoutes Component = {Cart}/>}  />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
