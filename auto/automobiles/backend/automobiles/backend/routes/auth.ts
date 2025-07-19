import { Router } from 'express';
import { authCtrl } from '../controllers/authCtrl';
import { protect } from '../middleware/authMiddleware';

const router = Router();

// User registration
router.post('/register', authCtrl.registerUser);

// User login
router.post('/login', authCtrl.loginUser);

// Get user profile
router.get('/profile', protect, authCtrl.getUserProfile);

// Update user profile
router.put('/profile', protect, authCtrl.updateUserProfile);

// Admin: Get all users
router.get('/admin/users', protect, authCtrl.getAllUsers);

// Admin: Delete user
router.delete('/admin/users/:id', protect, authCtrl.deleteUser);

export default router;