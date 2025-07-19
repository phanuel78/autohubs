import express from 'express';
import { protect, authorize } from '../middleware/auth';
import * as reportCtrl from '../controllers/reportCtrl';

const router = express.Router();

// Route to create a new report
router.post('/', protect, reportCtrl.createReport);

// Route to get all reports
router.get('/', protect, authorize('admin'), reportCtrl.getReports);

// Route to get a specific report by ID
router.get('/:id', protect, authorize('admin'), reportCtrl.getReportById);

// Route to delete a report by ID
router.delete('/:id', protect, authorize('admin'), reportCtrl.deleteReport);

export default router;