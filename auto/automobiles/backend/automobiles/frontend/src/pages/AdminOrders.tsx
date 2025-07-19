import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AdminOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('/api/orders?status=pending');
                setOrders(response.data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, []);

    const confirmOrder = async (orderId) => {
        try {
            await axios.put(`/api/orders/${orderId}/confirm`);
            setOrders(orders.filter(order => order._id !== orderId));
        } catch (error) {
            console.error('Error confirming order:', error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Pending Orders</h1>
            {orders.length === 0 ? (
                <p>No pending orders.</p>
            ) : (
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Order ID</th>
                            <th className="py-2 px-4 border-b">Client Name</th>
                            <th className="py-2 px-4 border-b">Total Price</th>
                            <th className="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order._id}>
                                <td className="py-2 px-4 border-b">{order._id}</td>
                                <td className="py-2 px-4 border-b">{order.clientName}</td>
                                <td className="py-2 px-4 border-b">${order.totalPrice.toFixed(2)}</td>
                                <td className="py-2 px-4 border-b">
                                    <button 
                                        className="bg-green-500 text-white px-4 py-2 rounded"
                                        onClick={() => confirmOrder(order._id)}
                                    >
                                        Confirm
                                    </button>
                                    <Link to={`/orders/${order._id}`} className="ml-2 text-blue-500">
                                        View Details
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AdminOrders;