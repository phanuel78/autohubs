import express from 'express';
import { protect, authorize } from '../middleware/auth';
import * as externalPostCtrl from '../controllers/externalPostCtrl';

const router = express.Router();

// @desc    Create a new external post
// @route   POST /api/external-posts
// @access  Private/Admin
router.post('/', protect, authorize('admin'), externalPostCtrl.createExternalPost);

// @desc    Get all external posts
// @route   GET /api/external-posts
// @access  Public
router.get('/', externalPostCtrl.getAllExternalPosts);

// @desc    Get external post by ID
// @route   GET /api/external-posts/:id
// @access  Public
router.get('/:id', externalPostCtrl.getExternalPostById);

// @desc    Update external post by ID
// @route   PUT /api/external-posts/:id
// @access  Private/Admin
router.put('/:id', protect, authorize('admin'), externalPostCtrl.updateExternalPost);

// @desc    Delete external post by ID
// @route   DELETE /api/external-posts/:id
// @access  Private/Admin
router.delete('/:id', protect, authorize('admin'), externalPostCtrl.deleteExternalPost);

export default router;