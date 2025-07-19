import { Request, Response } from 'express';
import Message from '../models/Message';

// Send a message from client to admin
export const sendMessage = async (req: Request, res: Response) => {
    try {
        const { productId, userId, content } = req.body;

        const newMessage = await Message.create({
            productId,
            userId,
            content,
            createdAt: new Date(),
        });

        res.status(201).json(newMessage);
    } catch (error) {
        res.status(500).json({ message: 'Error sending message', error });
    }
};

// Get messages for a specific product
export const getMessagesByProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.query;

        const messages = await Message.find({ productId }).sort({ createdAt: -1 });

        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching messages', error });
    }
};

// Get messages for a specific user
export const getMessagesByUser = async (req: Request, res: Response) => {
    try {
        const { userId } = req.query;

        const messages = await Message.find({ userId }).sort({ createdAt: -1 });

        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching messages', error });
    }
};