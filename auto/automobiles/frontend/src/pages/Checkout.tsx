import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { createOrder } from '../utils/api';

const Checkout: React.FC = () => {
    const { cartItems } = useCart();
    const [shippingInfo, setShippingInfo] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setShippingInfo({ ...shippingInfo, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const orderData = {
                cartItems,
                shippingInfo,
            };
            const response = await createOrder(orderData);
            if (response.success) {
                navigate(`/order-success/${response.orderId}`);
            }
        } catch (error) {
            console.error('Error creating order:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1" htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={shippingInfo.name}
                        onChange={handleChange}
                        required
                        className="border rounded p-2 w-full"
                    />
                </div>
                <div>
                    <label className="block mb-1" htmlFor="phone">Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={shippingInfo.phone}
                        onChange={handleChange}
                        required
                        className="border rounded p-2 w-full"
                    />
                </div>
                <div>
                    <label className="block mb-1" htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={shippingInfo.email}
                        onChange={handleChange}
                        required
                        className="border rounded p-2 w-full"
                    />
                </div>
                <div>
                    <label className="block mb-1" htmlFor="address">Address</label>
                    <textarea
                        name="address"
                        id="address"
                        value={shippingInfo.address}
                        onChange={handleChange}
                        required
                        className="border rounded p-2 w-full"
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className={`bg-blue-500 text-white rounded p-2 ${loading ? 'opacity-50' : ''}`}
                >
                    {loading ? 'Processing...' : 'Place Order'}
                </button>
            </form>
            <div className="mt-4">
                <h2 className="text-xl font-semibold">Invoice Summary</h2>
                <ul className="list-disc pl-5">
                    {cartItems.map(item => (
                        <li key={item.id}>
                            {item.name} - ${item.price} x {item.quantity}
                        </li>
                    ))}
                </ul>
                <p className="font-bold">
                    Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                </p>
            </div>
        </div>
    );
};

export default Checkout;