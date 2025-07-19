import express from 'express';
import { protect, authorize } from '../middleware/auth';
import * as productCtrl from '../controllers/productCtrl';

const router = express.Router();

// @desc    Create a new product
// @route   POST /api/products
// @access  Private/Admin
router.post('/', protect, authorize('admin'), productCtrl.createProduct);

// @desc    Get all products
// @route   GET /api/products
// @access  Public
router.get('/', productCtrl.getProducts);

// @desc    Get a single product by slug
// @route   GET /api/products/:slug
// @access  Public
router.get('/:slug', productCtrl.getProductBySlug);

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
router.put('/:id', protect, authorize('admin'), productCtrl.updateProduct);

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
router.delete('/:id', protect, authorize('admin'), productCtrl.deleteProduct);

export default router;