import { Request, Response } from 'express';
import Order from '../models/Order';
import { generateTracking } from '../utils/generateTracking';

// Create a new order
export const createOrder = async (req: Request, res: Response) => {
    try {
        const { cartItems, shippingInfo } = req.body;
        const newOrder = new Order({
            cartItems,
            shippingInfo,
            status: 'pending',
            trackingCoords: []
        });
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(500).json({ message: 'Error creating order', error });
    }
};

// Confirm an order
export const confirmOrder = async (req: Request, res: Response) => {
    try {
        const orderId = req.params.id;
        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        order.status = 'confirmed';
        order.confirmedAt = new Date();
        order.trackingNumber = generateTracking();
        await order.save();
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Error confirming order', error });
    }
};

// Get all orders with a specific status
export const getOrdersByStatus = async (req: Request, res: Response) => {
    try {
        const { status } = req.query;
        const orders = await Order.find({ status });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders', error });
    }
};

// Add tracking coordinates to an order
export const addTrackingCoord = async (req: Request, res: Response) => {
    try {
        const orderId = req.params.orderId;
        const { lat, lng } = req.body;
        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        order.trackingCoords.push({ lat, lng, timestamp: new Date() });
        await order.save();
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Error adding tracking coordinates', error });
    }
};