import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const OrderSuccess = () => {
    const { orderId } = useParams();
    const [order, setOrder] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await axios.get(`/api/orders/${orderId}`);
                setOrder(response.data);
            } catch (error) {
                console.error('Error fetching order:', error);
            }
        };

        fetchOrder();
    }, [orderId]);

    const handlePayment = () => {
        if (order && order.paymentUrl) {
            window.location.href = order.paymentUrl;
        }
    };

    return (
        <div className="container mx-auto p-4">
            {order ? (
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h1 className="text-2xl font-bold mb-4">Order Success</h1>
                    <p className="mb-2">Thank you for your order!</p>
                    <p className="mb-2">Order ID: <strong>{order._id}</strong></p>
                    <p className="mb-2">Status: <strong>{order.status}</strong></p>
                    {order.status === 'confirmed' && (
                        <div className="mt-4">
                            <button 
                                onClick={handlePayment} 
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            >
                                Pay Now
                            </button>
                            <button 
                                onClick={() => navigate(`/track/${order.trackingNumber}`)} 
                                className="ml-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                            >
                                Track Your Order
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <p>Loading order details...</p>
            )}
        </div>
    );
};

export default OrderSuccess;