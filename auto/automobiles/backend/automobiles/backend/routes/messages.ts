import express from 'express';
import { protect, authorize } from '../middleware/auth';
import * as messageCtrl from '../controllers/messageCtrl';

const router = express.Router();

// Route to send a message
router.post('/', protect, messageCtrl.sendMessage);

// Route to get messages for a specific product
router.get('/', protect, messageCtrl.getMessagesByProduct);

// Route to get messages for a specific order
router.get('/order/:orderId', protect, messageCtrl.getMessagesByOrder);

export default router;