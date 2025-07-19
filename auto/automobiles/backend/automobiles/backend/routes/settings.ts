import express from 'express';
import { protect, authorize } from '../middleware/auth';
import * as settingsCtrl from '../controllers/settingsCtrl';

const router = express.Router();

// Get all settings
router.get('/', protect, authorize('admin'), settingsCtrl.getSettings);

// Update settings
router.put('/', protect, authorize('admin'), settingsCtrl.updateSettings);

export default router;