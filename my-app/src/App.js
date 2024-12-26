import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList'; 
import Cart from './components/Cart'; 
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => (
  <div className='main'>
  <Router>
    <nav className='links'>
      <Link className="btn btn-secondary btn-sm products" to="/">Products</Link> 
      <Link className="btn btn-secondary btn-sm cart" to="/cart">Cart</Link>
    </nav>
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </Router>
  </div>
);

export default App;
