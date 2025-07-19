import { Request, Response } from 'express';
import Settings from '../models/Settings';

// Get settings
export const getSettings = async (req: Request, res: Response) => {
    try {
        const settings = await Settings.findOne();
        if (!settings) {
            return res.status(404).json({ message: 'Settings not found' });
        }
        res.json(settings);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Update settings
export const updateSettings = async (req: Request, res: Response) => {
    const { paymentUrlTemplate } = req.body;

    try {
        const settings = await Settings.findOneAndUpdate({}, { paymentUrlTemplate }, { new: true, upsert: true });
        res.json(settings);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};