import express from 'express';
import { protect, authorize } from '../middleware/auth';
import * as orderCtrl from '../controllers/orderCtrl';

const router = express.Router();

// Create a new order
router.post('/', protect, orderCtrl.createOrder);

// Get all orders with optional status filter
router.get('/', protect, authorize('admin'), orderCtrl.getOrders);

// Get a specific order by ID
router.get('/:id', protect, orderCtrl.getOrderById);

// Confirm an order
router.put('/:id/confirm', protect, authorize('admin'), orderCtrl.confirmOrder);

// Update an order
router.put('/:id', protect, authorize('admin'), orderCtrl.updateOrder);

// Delete an order
router.delete('/:id', protect, authorize('admin'), orderCtrl.deleteOrder);

export default router;