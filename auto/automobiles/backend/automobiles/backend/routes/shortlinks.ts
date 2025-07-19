import express from 'express';
import { protect, authorize } from '../middleware/auth';
import * as shortlinkCtrl from '../controllers/shortlinkCtrl';

const router = express.Router();

// Create a short link
router.post('/', protect, authorize('admin'), shortlinkCtrl.createShortLink);

// Redirect to the original URL
router.get('/:code', shortlinkCtrl.redirectShortLink);

export default router;