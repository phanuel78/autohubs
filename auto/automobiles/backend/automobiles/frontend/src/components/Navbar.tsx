import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-lg font-bold">
                    Automobiles Marketplace
                </Link>
                <div className="flex space-x-4">
                    <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
                    <Link to="/all-products" className="text-gray-300 hover:text-white">All Products</Link>
                    <Link to="/cart" className="text-gray-300 hover:text-white">Cart</Link>
                    <Link to="/report" className="text-gray-300 hover:text-white">Report</Link>
                    <Link to="/admin/orders" className="text-gray-300 hover:text-white">Admin Orders</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;