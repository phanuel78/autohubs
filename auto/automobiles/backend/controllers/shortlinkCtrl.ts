import { Request, Response } from 'express';
import ShortLink from '../models/ShortLink';
import { nanoid } from 'nanoid';

// Create a short link
export const createShortLink = async (req: Request, res: Response) => {
    const { targetUrl } = req.body;

    if (!targetUrl) {
        return res.status(400).json({ message: 'Target URL is required' });
    }

    try {
        const code = nanoid(10);
        const shortUrl = `${req.protocol}://${req.get('host')}/s/${code}`;

        const newShortLink = new ShortLink({
            code,
            targetUrl,
            shortUrl,
        });

        await newShortLink.save();
        res.status(201).json(newShortLink);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Redirect to the original URL
export const redirectShortLink = async (req: Request, res: Response) => {
    const { code } = req.params;

    try {
        const shortLink = await ShortLink.findOne({ code });

        if (!shortLink) {
            return res.status(404).json({ message: 'Short link not found' });
        }

        res.redirect(shortLink.targetUrl);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};