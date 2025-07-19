import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User';

// Register a new user
export const register = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ username, email, password: hashedPassword });

        res.status(201).json({
            success: true,
            data: newUser,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'User registration failed',
            error: error.message,
        });
    }
};

// Login a user
export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password',
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password',
            });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

        res.status(200).json({
            success: true,
            token,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Login failed',
            error: error.message,
        });
    }
};

// Get current user
export const getCurrentUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.status(200).json({
            success: true,
            data: user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to get current user',
            error: error.message,
        });
    }
};