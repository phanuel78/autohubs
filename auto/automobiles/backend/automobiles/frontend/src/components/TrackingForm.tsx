import React, { useState } from 'react';

const TrackingForm: React.FC<{ onSubmit: (trackingNumber: string) => void }> = ({ onSubmit }) => {
    const [trackingNumber, setTrackingNumber] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (trackingNumber) {
            onSubmit(trackingNumber);
            setTrackingNumber('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-4 border rounded shadow-md">
            <label htmlFor="trackingNumber" className="font-semibold">
                Enter Tracking Number:
            </label>
            <input
                type="text"
                id="trackingNumber"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="border p-2 rounded"
                required
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                Track Order
            </button>
        </form>
    );
};

export default TrackingForm;