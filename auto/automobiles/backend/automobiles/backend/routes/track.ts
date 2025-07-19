import express from 'express';
import { protect, authorize } from '../middleware/auth';
import * as trackCtrl from '../controllers/trackCtrl';

const router = express.Router();

// Get tracking information by tracking number
router.get('/:trackingNumber', trackCtrl.getTrackingInfo);

// Add tracking coordinates to an order
router.post('/orders/:orderId/coords', protect, authorize('admin'), trackCtrl.addTrackingCoord);

export default router;