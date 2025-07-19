import express from 'express';
import { protect, authorize } from '../middleware/auth';
import * as brandCtrl from '../controllers/brandCtrl';

const router = express.Router();

// @desc    Get all brands
// @route   GET /api/brands
// @access  Public
router.get('/', brandCtrl.getBrands);

// @desc    Get brand by slug
// @route   GET /api/brands/:slug
// @access  Public
router.get('/:slug', brandCtrl.getBrandBySlug);

// @desc    Create a new brand
// @route   POST /api/brands
// @access  Private/Admin
router.post('/', protect, authorize('admin'), brandCtrl.createBrand);

// @desc    Update a brand
// @route   PUT /api/brands/:id
// @access  Private/Admin
router.put('/:id', protect, authorize('admin'), brandCtrl.updateBrand);

// @desc    Delete a brand
// @route   DELETE /api/brands/:id
// @access  Private/Admin
router.delete('/:id', protect, authorize('admin'), brandCtrl.deleteBrand);

export default router;