import { Request, Response } from 'express';
import Report from '../models/Report';
import sendEmail from '../utils/sendEmail';

// Create a new report
export const createReport = async (req: Request, res: Response) => {
    try {
        const { userId, productId, description } = req.body;

        const report = await Report.create({
            userId,
            productId,
            description,
        });

        // Optionally send an email notification to the admin
        await sendEmail({
            to: 'admin@example.com',
            subject: 'New Report Submitted',
            text: `A new report has been submitted by user ${userId} for product ${productId}. Description: ${description}`,
        });

        res.status(201).json(report);
    } catch (error) {
        res.status(500).json({ message: 'Error creating report', error });
    }
};

// Get all reports
export const getReports = async (req: Request, res: Response) => {
    try {
        const reports = await Report.find().populate('userId').populate('productId');
        res.status(200).json(reports);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching reports', error });
    }
};

// Delete a report
export const deleteReport = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await Report.findByIdAndDelete(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting report', error });
    }
};