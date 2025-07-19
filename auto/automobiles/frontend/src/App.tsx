import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import Brand from './pages/Brand';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import Report from './pages/Report';
import Track from './pages/Track';
import AdminAddProduct from './pages/AdminAddProduct';
import AdminOrders from './pages/AdminOrders';
import ClonePost from './pages/ClonePost';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/brands/:slug" element={<Brand />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/report" element={<Report />} />
          <Route path="/track/:trackingNumber" element={<Track />} />
          <Route path="/admin/add-product" element={<AdminAddProduct />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/admin/clone-post" element={<ClonePost />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;