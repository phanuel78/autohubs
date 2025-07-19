import { Request, Response } from 'express';
import Order from '../models/Order';

// Get tracking information for a specific tracking number
export const getTrackingInfo = async (req: Request, res: Response) => {
    const { trackingNumber } = req.params;

    try {
        const order = await Order.findOne({ trackingNumber });

        if (!order || order.status === 'pending') {
            return res.status(404).json({ message: 'Tracking information not found or order is still pending.' });
        }

        res.status(200).json({
            trackingNumber: order.trackingNumber,
            status: order.status,
            trackingCoords: order.trackingCoords,
            events: order.events, // Assuming events are stored in the order model
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Add tracking coordinates to an order
export const addTrackingCoord = async (req: Request, res: Response) => {
    const { orderId } = req.params;
    const { lat, lng } = req.body;

    try {
        const order = await Order.findById(orderId);

        if (!order) {
            return res.status(404).json({ message: 'Order not found.' });
        }

        order.trackingCoords.push({ lat, lng, timestamp: new Date() });
        await order.save();

        res.status(200).json({ message: 'Tracking coordinates added successfully.', trackingCoords: order.trackingCoords });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};