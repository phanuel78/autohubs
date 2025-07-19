import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCartItems, removeFromCart } from '../utils/cartUtils';
import { OrderItem } from '../types/OrderItem';

const Cart: React.FC = () => {
    const [cartItems, setCartItems] = useState<OrderItem[]>([]);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        const items = getCartItems();
        setCartItems(items);
        calculateTotal(items);
    }, []);

    const calculateTotal = (items: OrderItem[]) => {
        const totalAmount = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotal(totalAmount);
    };

    const handleRemove = (slug: string) => {
        removeFromCart(slug);
        const updatedItems = cartItems.filter(item => item.slug !== slug);
        setCartItems(updatedItems);
        calculateTotal(updatedItems);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty. Start adding products!</p>
            ) : (
                <div>
                    <ul className="space-y-4">
                        {cartItems.map(item => (
                            <li key={item.slug} className="flex justify-between items-center border-b pb-2">
                                <div>
                                    <h2 className="text-lg font-semibold">{item.name}</h2>
                                    <p className="text-gray-600">${item.price.toFixed(2)} x {item.quantity}</p>
                                </div>
                                <button
                                    className="text-red-500 hover:text-red-700"
                                    onClick={() => handleRemove(item.slug)}
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4">
                        <h2 className="text-xl font-bold">Total: ${total.toFixed(2)}</h2>
                    </div>
                    <Link to="/checkout" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                        Place an Order
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Cart;