import React, { useState } from 'react';
import axios from 'axios';

const AdminTrackingInput: React.FC<{ orderId: string }> = ({ orderId }) => {
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post(`/api/track/orders/${orderId}/coords`, { lat, lng });
            setMessage('Tracking coordinates added successfully!');
            setLat('');
            setLng('');
        } catch (error) {
            setMessage('Error adding tracking coordinates.');
        }
    };

    return (
        <div className="p-4 border rounded shadow-md">
            <h2 className="text-lg font-semibold mb-4">Add Tracking Coordinates</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Latitude:</label>
                    <input
                        type="text"
                        value={lat}
                        onChange={(e) => setLat(e.target.value)}
                        className="border rounded p-2 w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Longitude:</label>
                    <input
                        type="text"
                        value={lng}
                        onChange={(e) => setLng(e.target.value)}
                        className="border rounded p-2 w-full"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white rounded p-2">
                    Submit
                </button>
            </form>
            {message && <p className="mt-4 text-sm">{message}</p>}
        </div>
    );
};

export default AdminTrackingInput;